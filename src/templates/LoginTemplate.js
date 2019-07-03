import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { LoginUser, authenticateUser } from 'actions';
import propTypes from 'prop-types';
import BGLogin2 from 'assets/images/BGLogin2.png';
import AnimationLoading from 'components/molecules/AnimationLoading/AnimationLoading';
import LogAndRegButton from 'components/atoms/LogAndRegButton/LogAndRegButton';
import Forwarding from 'components/molecules/Forwarding/Forwarding';
import InputField from 'components/atoms/InputField/InputField';

const StyledMainTemplate = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${BGLogin2});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledContentWrapper = styled.div`
  max-width: 90%;
  width: 400px;
  max-height: 95vw;
  height: 400px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

const StyledH1 = styled.h1`
  font-size: 2.5rem;
  font-weight: 500;
`;

const StyledForm = styled(Form)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledPositionWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledLoginFail = styled.p`
  color: ${({ theme }) => theme.red};
  margin: 0;
`;

class LoginTemplate extends Component {
  state = {
    buttonClick: false,
    currentUser: null,
    finished: false,
    loginStatus: false,
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
    // eslint-disable-next-line
    const { buttonClick, currentUser, finished, loginStatus } = this.state;
    const { dataUser, authenticate, userLogin, authenticateUserStatus } = this.props;

    const { from } = this.props.location.state || { from: { pathname: '/todo' } }; // eslint-disable-line react/destructuring-assignment, react/prop-types

    if (finished) {
      return <Redirect to={from} />;
    }

    if (dataUser.length !== 0) {
      sessionStorage.setItem('currentUser', dataUser);
      sessionStorage.setItem('key', dataUser[0].userId);
      return <Redirect to={from} />;
    }

    if (dataUser.length === 0 && authenticate === 200) {
      if (loginStatus === true) {
        this.setState({ loginStatus: false });
      }
    }

    return (
      <StyledMainTemplate>
        <StyledContentWrapper>
          <StyledH1>make more app</StyledH1>

          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(value, { setSubmitting }) => {
              userLogin(value.email, value.password);
              authenticateUserStatus(0);
              this.setState({ loginStatus: true });
              if (loginStatus === false) {
                setSubmitting(false);
              }
            }}
          >
            {({ isSubmitting }) => (
              <StyledForm>
                <InputField as={Field} type="text" placeholder="email" name="email" />
                <InputField as={Field} type="password" placeholder="password" name="password" />

                {dataUser.length === 0 && authenticate === 200 && (
                  <StyledLoginFail>Logowanie nie powiodło się</StyledLoginFail>
                )}

                {loginStatus ? (
                  <AnimationLoading />
                ) : (
                  <LogAndRegButton type="submit" disabled={isSubmitting}>
                    zaloguj
                  </LogAndRegButton>
                )}
              </StyledForm>
            )}
          </Formik>
          <StyledPositionWrapper>
            <Forwarding
              text="Nie masz jeszcze konta?"
              textInLink="zarejstruj się"
              linkTo="/register"
            />
          </StyledPositionWrapper>

          {/* logowanie do facebooka !!!!!!!!!!!! */}
          {/* {loginStatus ? <h1>logowanie w trakcie.......</h1> : null}
          {currentUser ? (
            <p>witaj {currentUser.name}</p>
          ) : (
            <p>musisz sie najpierw zalogować {from.pathname}</p>
          )}
          {buttonClick ? <p>login......</p> : <Button onClick={() => this.fbLogin()}>login</Button>} */}
        </StyledContentWrapper>
      </StyledMainTemplate>
    );
  }
}

LoginTemplate.propTypes = {
  dataUser: propTypes.arrayOf(propTypes.string, propTypes.string, propTypes.string),
  authenticate: propTypes.number,
  userLogin: propTypes.func.isRequired,
  authenticateUserStatus: propTypes.func.isRequired,
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
  authenticateUserStatus: authenticateUser,
};

export default connect(
  mapStateToProps,
  mapActionToProps,
)(LoginTemplate);
