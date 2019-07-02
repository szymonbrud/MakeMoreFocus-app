import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { checkUser, checkUserName, registerUser } from 'actions';
import { Redirect, Link } from 'react-router-dom';
import BGLogin2 from 'assets/images/BGLogin2.png';
import AnimationLoading from 'components/molecules/AnimationLoading/AnimationLoading';

const StyledMainWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(${BGLogin2});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledWrapper = styled.div`
  width: 90%;
  min-height: 100vh;
  display: flex;
  padding: 5vh 0;
  flex-direction: column;
  justify-content: center;
  background: white;
  min-height: 60vw;
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
`;

const StyledField = styled(Field)`
  width: 70%;
  border: 1px solid ${({ theme }) => theme.blue};
  margin: 1vh 0;
  border-radius: 5px;
  height: 30px;
  padding: 5px;
`;

const StyledButtonLogin = styled.button`
  width: 40%;
  background: ${({ theme }) => theme.blue};
  border-radius: 10px;
  color: white;
  border: none;
  height: 34px;
  margin-top: 10px;
`;

// ---------

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

const StyledP = styled.p`
  font-size: 1.5rem;
  margin: 0;
`;

const StyledA = styled(Link)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.blue};
  position: relative;
  margin: 4px 0 0 0;
  text-decoration: none;

  ::before {
    content: '';
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.blue};
    position: absolute;
    bottom: -4px;
    right: 0;
  }
`;

const StyledWrapperButtonAndA = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;
const StyledWrapperAP = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 5vw;
`;

const StyledFail = styled.p`
  font-size: 14px;

  margin: 6% 0 0 0;
  color: ${({ theme }) => theme.red};
`;
// ==========

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
    // eslint-disable-next-line
    const { checkUserApi, checkStatusUser, registerUserApi, checkUserFunc, userData } = this.props;
    const { checked, failLogin } = this.state;

    if (userData[0]) {
      sessionStorage.setItem('currentUser', userData[1]);
      sessionStorage.setItem('key', userData[1].userId);

      return <Redirect to="/todo" />;
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
                <StyledField as={Field} type="text" placeholder="name" name="name" />
                {/* eslint-disable-next-line */}
                {checkStatusUser[1] === undefined ? null : checkStatusUser[1] === false ? (
                  <PStyledFail>taki email już istnieje</PStyledFail>
                ) : null}
                <StyledField as={Field} type="text" placeholder="email" name="email" />
                <StyledField as={Field} type="password" placeholder="password" name="password" />
                <StyledField
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel interdum
                    turpis, sed tempor sapien. Donec at justo dictum, commodo eros sit amet, varius
                    nulla.
                  </StyledTextCheckBox>
                </WrapperCheckboxAndText>
                {/* {dataUser.length === 0 && authenticate === 200 && (
                  <StyledLoginFail>Logowanie nie powiodło się</StyledLoginFail>
                )} */}
                {/* {loginStatus ? (
                  <AnimationLoading />
                ) : ( */}
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
                    <StyledButtonLogin type="submit" disabled={isSubmitting}>
                      rejstracja
                    </StyledButtonLogin>
                  )}
                  <StyledWrapperAP>
                    <StyledP>Masz już konto?</StyledP>
                    <StyledA to="/login">zaloguj się</StyledA>
                  </StyledWrapperAP>
                </StyledWrapperButtonAndA>
                {/* )} */}
              </StyledForm>
            )}
          </Formik>
        </StyledWrapper>
      </StyledMainWrapper>
    );
  }
}

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
