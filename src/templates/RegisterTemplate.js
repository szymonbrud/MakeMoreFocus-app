import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { checkUser, checkUserName, registerUser } from 'actions';
import { Redirect, Link } from 'react-router-dom';
import BGLogin2 from 'assets/images/BGLogin2.png';
import AnimationLoading from 'components/molecules/AnimationLoading/AnimationLoading';
import InputField from 'components/atoms/InputField/InputField';
import LogAndRegButton from 'components/atoms/LogAndRegButton/LogAndRegButton';
import Forwarding from 'components/molecules/Forwarding/Forwarding';
import propTypes from 'prop-types';

const StyledMainWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(${BGLogin2});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
`;

const StyledWrapper = styled.div`
  max-width: 90%;
  width: 400px;
  display: flex;
  padding: 5vh 0;
  flex-direction: column;
  justify-content: center;
  background: white;
  border-radius: 10px;
`;

const StyledH1 = styled.h1`
  margin: 0vh 0 1vh 5%;
  font-size: 2.3rem;
  font-weight: 500;
`;

const StyledSecoundH1 = styled.h2`
  font-size: 1.6rem;
  font-weight: 500;
  margin: 0 0 2vh 5%;
`;

const StyledForm = styled(Form)`
  width: 90%;
  margin: 0 5%;
  display: flex;
  flex-direction: column;
`;

const CheckboxContainer = styled.div`
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 3px;
  transition: all 150ms;
  border: 1px solid ${({ theme }) => theme.blue};

  ${({ checked }) =>
    checked &&
    css`
      background: ${({ theme }) => theme.blue};
    `}

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 10px pink;
  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`;

const WrapperCheckboxAndText = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const StyledTextCheckBox = styled.p`
  margin: 0 3%;
  font-size: 14px;
`;

const StyledWrapperButtonAndA = styled.div`
  width: 96%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

const StyledFail = styled.p`
  font-size: 14px;
  margin: 6% 0 0 0;
  color: ${({ theme }) => theme.red};
`;

const PStyledFail = styled.p`
  font-size: 12px;
  margin: 2% 0 0 0;
  color: ${({ theme }) => theme.red};
`;

class RegisterTemplate extends Component {
  state = { checked: false, failLogin: false };

  handleCheckboxChange = () => {
    this.setState(prev => ({ checked: !prev.checked }));
  };

  render() {
    const { checkUserApi, checkStatusUser, checkUserFunc, userData } = this.props;
    const { checked, failLogin } = this.state;

    if (userData[0]) {
      sessionStorage.setItem('currentUser', userData[1]);
      sessionStorage.setItem('key', userData[1].userId);

      return <Redirect to="/presentation" />;
    }
    return (
      <StyledMainWrapper>
        <StyledWrapper>
          <StyledH1>make more app</StyledH1>
          <StyledSecoundH1>rejstracja</StyledSecoundH1>
          <Formik
            initialValues={{ name: '', email: '', password: '', passwordSecound: '' }}
            onSubmit={(value, { setSubmitting }) => {
              if (
                value.name.length >= 3 &&
                value.email.length >= 3 &&
                value.password.length >= 7 &&
                checked
              ) {
                if (value.password === value.passwordSecound) {
                  checkUserFunc(null, true);
                  checkUserApi(value.name, value.email, value.password);
                } else {
                  this.setState({ failLogin: true });
                }
              } else {
                this.setState({ failLogin: true });
              }

              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <StyledForm>
                <InputField as={Field} type="text" placeholder="name" name="name" />
                {/* eslint-disable-next-line */}
                {checkStatusUser[1] === undefined ? null : checkStatusUser[1] === false ? (
                  <PStyledFail>taka nazwa użytkowanika już istnieje</PStyledFail>
                ) : null}
                <InputField as={Field} type="text" placeholder="username" name="email" />
                <InputField as={Field} type="password" placeholder="password" name="password" />
                <InputField
                  as={Field}
                  type="password"
                  placeholder="secound Password"
                  name="passwordSecound"
                />
                <WrapperCheckboxAndText>
                  <CheckboxContainer onClick={() => this.handleCheckboxChange()}>
                    <HiddenCheckbox checked={checked} />
                    <StyledCheckbox checked={checked}>
                      <Icon viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                      </Icon>
                    </StyledCheckbox>
                  </CheckboxContainer>
                  <StyledTextCheckBox>
                    Oświadczam iż zapoznałem się z warunkami użytkowania oraz je akceptuję.
                    <Link to="/licanse">warunki użytkowania</Link>
                  </StyledTextCheckBox>
                </WrapperCheckboxAndText>
                {failLogin && (
                  <StyledFail>
                    Dane zostały podane nieprawidłowo, pamiętaj że hasło powinno zawierać
                    przynajmniej 7 liter
                  </StyledFail>
                )}
                <StyledWrapperButtonAndA>
                  {checkStatusUser[1] ? (
                    <AnimationLoading />
                  ) : (
                    <LogAndRegButton type="submit" disabled={isSubmitting}>
                      rejstracja
                    </LogAndRegButton>
                  )}
                  <Forwarding text="Masz już konto?" textInLink="zaloguj się" linkTo="/login" />
                </StyledWrapperButtonAndA>
              </StyledForm>
            )}
          </Formik>
        </StyledWrapper>
      </StyledMainWrapper>
    );
  }
}

RegisterTemplate.propTypes = {
  checkUserApi: propTypes.func.isRequired,
  checkUserFunc: propTypes.func.isRequired,
  checkStatusUser: propTypes.arrayOf(propTypes.bool.isRequired),
  userData: propTypes.objectOf(propTypes.string.isRequired),
};

RegisterTemplate.defaultProps = {
  checkStatusUser: [],
  userData: [],
};

const mapStateToProps = state => ({
  checkStatusUser: state.checkStatusUser,
  userData: state.userData,
});

const mapActionToProps = {
  checkUserApi: checkUserName,
  checkUserFunc: checkUser,
  registerUserApi: registerUser,
};

export default connect(
  mapStateToProps,
  mapActionToProps,
)(RegisterTemplate);
