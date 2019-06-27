import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { LoginUser } from 'actions';
import propTypes from 'prop-types';

const StyledMainTemplate = styled.div`
  width: 100%;
  height: 100vh;
`;

const Button = styled.button`
  width: 40%;
  height: 50px;
  background: black;
  color: white;
  border: none;
`;

const StyledForm = styled(Form)`
  width: 100%;
`;

class LoginTemplate extends Component {
  state = {
    buttonClick: false,
    currentUser: null,
    finished: false,
  };

  fbLogin = () => {
    this.setState({ buttonClick: true });
    window.FB.getLoginStatus(response => {
      if (response.status !== 'connected') {
        window.FB.login();
      } else {
        window.FB.api('/me', user => {
          sessionStorage.setItem('currentUser', user);
          this.setState({ finished: true, buttonClick: false, currentUser: user });
        });
      }
    });
  };

  render() {
    const { buttonClick, currentUser, finished } = this.state;
    const { dataUser, authenticate, userLogin } = this.props;

    const { from } = this.props.location.state || { from: { pathname: '/' } }; // eslint-disable-line react/destructuring-assignment, react/prop-types

    if (finished) {
      return <Redirect to={from} />;
    }

    if (dataUser.length !== 0) {
      sessionStorage.setItem('currentUser', dataUser);
      return <Redirect to={from} />;
    }

    return (
      <StyledMainTemplate>
        <h1>login template</h1>
        <h1>logowanie</h1>

        {dataUser.length === 0 && authenticate === 200 ? <h1>NIE UDAŁO SIĘ ZALOGOWAĆ</h1> : null}
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(value, { setSubmitting }) => {
            userLogin(value.email, value.password);
            setTimeout(() => {
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <StyledForm>
              <Field as={Field} type="text" placeholder="email" name="email" />
              <Field as={Field} type="password" placeholder="password" name="password" />
              <button type="submit" disabled={isSubmitting}>
                login
              </button>
            </StyledForm>
          )}
        </Formik>
        {currentUser ? (
          <p>witaj {currentUser.name}</p>
        ) : (
          <p>musisz sie najpierw zalogować {from.pathname}</p>
        )}
        {buttonClick ? <p>login......</p> : <Button onClick={() => this.fbLogin()}>login</Button>}
      </StyledMainTemplate>
    );
  }
}

LoginTemplate.propTypes = {
  dataUser: propTypes.arrayOf(propTypes.string, propTypes.string, propTypes.string),
  authenticate: propTypes.number,
  userLogin: propTypes.func.isRequired,
};

LoginTemplate.defaultProps = {
  dataUser: [],
  authenticate: 0,
};

const mapStateToProps = state => ({
  dataUser: state.loginUser,
  authenticate: state.authenticate,
});

const mapActionToProps = {
  userLogin: LoginUser,
};

export default connect(
  mapStateToProps,
  mapActionToProps,
)(LoginTemplate);
