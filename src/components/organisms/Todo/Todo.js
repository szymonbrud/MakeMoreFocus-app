import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Icon from 'components/Icon/Icon';
import web_dev from 'assets/images/web_dev.svg';
import ButtonInTodo from 'components/molecules/ButtonInTodo/ButtonInTodo';
import icon_clock from 'assets/icons/icon_clock.svg';
import icon_check from 'assets/icons/icon_check.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addTodoDone } from 'actions';
import propTypes from 'prop-types';
import { StyledInput } from 'StyledTemplates/AddTodoTemplate.style';
import { Field, Formik, Form } from 'formik';

const StyledWrapper = styled.div`
  width: 100%;
  transform: scaleY(${({ LoadState }) => (LoadState ? 0.25 : 1)});
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 10px 0;
  overflow: hidden;
  transition: transform 2s;

  ${({ LoadState }) =>
    LoadState &&
    css`
      background: ${({ theme }) => theme.blue};
      border-radius: 10px;
    `}
`;

const StyledWrapperForElements = styled.div`
  background: ${({ theme }) => theme.opacityBlue2};
  border-radius: 10px;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WrapperIcons = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
`;

const StyledH1 = styled(Link)`
  color: white;
  font-size: 2rem;
  position: absolute;
  width: 50%;
  top: 8%;
  left: 3%;
  margin: 0;
  font-weight: 600;
`;

const StyledTime = styled.h1`
  color: white;
  width: 90%;
  font-size: 2rem;
  position: absolute;
  bottom: 8%;
  left: 3%;
  margin: 0;
`;

const StyledIcon = styled(Icon)`
  transform: scale(0.15);
  margin-right: 30%;
`;

const StyledQuestion = styled.div`
  position: absolute;
  right: 10px;
  top: 0;
  width: 50%;
  height: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledQuersionP = styled.p`
  color: white;
  text-align: center;
`;

const StyledWrapperButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  :nth-child(2) {
    margin-left: 10px;
  }
`;

const StyledButton = styled.button`
  width: 80px;
  height: 24px;
  color: white;
  background: ${({ theme }) => theme.red};
  border: none;
  border-radius: 50px;

  ${({ blue }) =>
    blue &&
    css`
      background: ${({ theme }) => theme.blue};
    `}
`;

const AnimationIn = keyframes`
  from{
    transform: translateX(-100%);
  }

  to{
    transform: translateX(0%);
  }
`;

const StyledTitileDone = styled.div`
  width: 100%;
  height: 30px;
  margin: 10px 0;
  background: #53585e;
  border-radius: 5px;
  display: flex;
  align-items: center;
  animation: ${AnimationIn} 0.5s forwards;

  ${({ color }) =>
    color &&
    css`
      background: ${({ theme }) => theme.blue};
    `}
`;

const StyledTitle = styled.h1`
  color: white;
  font-size: 1.8rem;
  position: relative;
  margin: 0 0 0 3%;

  ::before {
    content: '';
    width: 120%;
    height: 2px;
    background: white;
    position: absolute;
    top: 50%;
    left: -10%;
  }
`;

const StyledContentInformation = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.ligth_blue};
  height: ${({ status }) => (status ? '300px' : '230px')};
  margin: 10px 0;
  overflow: hidden;
  border-radius: 10px;
  position: relative;
`;

const StyledH1Information = styled.h1`
  color: ${({ theme }) => theme.blue};
  width: 50%;
  margin: 20px 10px 0;
`;

const StyledWrapperForSvg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 22vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledIconInformation = styled(Icon)`
  transform: scale(0.1);
`;

const StyledFormInformation = styled.div`
  height: 60%;
  width: 50%;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 10px;
  left: 10px;

  ${({ status }) =>
    status === false &&
    css`
      height: auto;
    `}
`;

const StyledInformationP = styled.p`
  color: ${({ theme }) => theme.blue};
  margin: 0;
`;

const StyledInformationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledInformationInput = styled(Field)`
  background: white;
  border: 1px solid ${({ theme }) => theme.blue};
  width: 47%;
  height: 32px;
  border-radius: 5px;
  text-align: center;
`;

const StyledInformationInputText = styled(Field)`
  border: none;
  width: 100%;
  height: 100px;
  margin-top: 10px;
  text-align: unset;
  background: white;
  border-radius: 5px;
  align-self: flex-end;
  justify-self: flex-end;
`;

const StyledInformationButton = styled.button`
  position: absolute;
  right: 10px;
  bottom: 10px;
  background: ${({ theme }) => theme.blue};
  color: white;
  border: none;
  border-radius: 10px;
  height: 30px;
  width: 30%;
`;

class Todo extends Component {
  state = {
    LoadState: false,
    animation: false,
    continueState: false,
    addInformations: false,
    cliced: false,
  };

  addTodoDone = whatCLicked => {
    this.setState({ cliced: whatCLicked, animation: true });
  };

  continue = (state, b) => {
    const { cliced } = this.state;
    if (state === false && b === false) {
      this.setState({ continueState: true });

      this.addToDoneTodoApi();
    }

    if (state === false && b === true && cliced === false) {
      this.setState({ addInformations: true });
    }

    if (state === false && b === true && cliced === true) {
      this.setState({ addInformations: true });
      this.setState({ addInformations: true });
    }
  };

  addToDoneTodoApi = (
    hours = this.props.data.hours,
    minutes = this.props.data.minutes,
    note = '',
  ) => {
    // eslint-disable-next-line

    const { data, date, addTodoDoneApi } = this.props;
    const { cliced } = this.state;

    this.setState({ LoadState: true });

    let liczba;

    if (date.todayMonth[0] === '0') {
      // eslint-disable-next-line
      liczba = parseInt(date.todayMonth[1]);
      liczba += 1;
      if (liczba < 10) {
        liczba = `0${liczba}`;
      }
    } else {
      // eslint-disable-next-line
      liczba = parseInt(date.todayMonth);
      liczba += 1;
      liczba = `${liczba}`;
    }

    let state;

    if (cliced) {
      state = true;
    } else {
      state = false;
    }

    const fullDate = `${date.todayYear}-${liczba}-${date.todayDay}`;

    addTodoDoneApi(data.id, data.title, fullDate, hours, minutes, note, state);
  };

  render() {
    const { data } = this.props;
    const { LoadState, animation, continueState, addInformations, cliced } = this.state;

    return (
      <>
        {continueState ? (
          <StyledTitileDone color={cliced}>
            <StyledTitle>{data.title}</StyledTitle>
          </StyledTitileDone>
        ) : (
          <>
            {addInformations ? (
              <Formik
                initialValues={{ h: '', m: '', content: '' }}
                onSubmit={(value, { setSubmitting }) => {
                  console.log(value);
                  this.addToDoneTodoApi(value.h, value.m, value.content);
                  this.setState({ continueState: true });
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <StyledContentInformation status={cliced}>
                      <StyledH1Information>{data.title}</StyledH1Information>
                      <StyledWrapperForSvg>
                        <StyledIconInformation src={web_dev} />
                      </StyledWrapperForSvg>
                      <StyledFormInformation status={cliced}>
                        {cliced ? (
                          <>
                            <StyledInformationP>
                              Ile czasu udało ci się na to poświęcić
                            </StyledInformationP>
                            <StyledInformationWrapper>
                              <StyledInformationInput
                                as={Field}
                                type="number"
                                name="h"
                                placeholder="godziny"
                              />
                              <StyledInformationInput
                                as={Field}
                                type="number"
                                name="m"
                                placeholder="minuty"
                              />
                            </StyledInformationWrapper>
                          </>
                        ) : (
                          <>
                            <StyledInformationP>dodaj opis</StyledInformationP>
                          </>
                        )}
                        <StyledInformationInputText
                          component="textarea"
                          name="opis"
                          placeholder="opis"
                        />
                      </StyledFormInformation>
                      <StyledInformationButton>zapisz</StyledInformationButton>
                    </StyledContentInformation>
                  </Form>
                )}
              </Formik>
            ) : (
              <>
                <StyledWrapper LoadState={LoadState} addInformations={addInformations}>
                  <StyledIcon src={web_dev} />
                  <StyledWrapperForElements>
                    <StyledH1 to={`todo/${data.id}`}>{data.title}</StyledH1>
                    <StyledTime>
                      {data.hours}h {data.minutes}m
                    </StyledTime>
                    <WrapperIcons>
                      <ButtonInTodo icons={icon_clock} first title="pomodo" animation={animation} />
                      {/* eslint-disable-next-line */}
                      <div onClick={() => this.addTodoDone(true)}>
                        <ButtonInTodo icons={icon_check} title="zrobione" animation={animation} />
                      </div>
                      {/* eslint-disable-next-line */}
                      <div onClick={() => this.addTodoDone(false)}>
                        <ButtonInTodo title="niestety" animation={animation} />
                      </div>
                    </WrapperIcons>
                    {animation && (
                      <StyledQuestion>
                        <StyledQuersionP>
                          {cliced
                            ? 'Brawo! Chcesz dodać szczegóły'
                            : 'Trudno, chcesz dodać notakę?'}
                        </StyledQuersionP>
                        <StyledWrapperButtons>
                          <StyledButton onClick={() => this.continue(false, false)}>
                            nie
                          </StyledButton>
                          <StyledButton blue onClick={() => this.continue(false, true)}>
                            tak
                          </StyledButton>
                        </StyledWrapperButtons>
                      </StyledQuestion>
                    )}
                  </StyledWrapperForElements>
                </StyledWrapper>
              </>
            )}
          </>
        )}
      </>
    );
  }
}
const mapActionToProps = {
  addTodoDoneApi: addTodoDone,
};

Todo.propTypes = {
  addTodoDoneApi: propTypes.func.isRequired,
};

export default connect(
  null,
  mapActionToProps,
)(Todo);
