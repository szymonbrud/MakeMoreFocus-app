import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Icon from 'components/Icon/Icon';
import ButtonInTodo from 'components/molecules/ButtonInTodo/ButtonInTodo';
import icon_clock from 'assets/icons/icon_clock.svg';
import icon_check from 'assets/icons/icon_check.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addTodoDone } from 'actions';
import propTypes from 'prop-types';
import { Formik } from 'formik';
import photo1 from 'assets/imagesTodo/photo1.svg';
import photo2 from 'assets/imagesTodo/photo2.svg';
import photo3 from 'assets/imagesTodo/photo3.svg';
import photo4 from 'assets/imagesTodo/photo4.svg';
import photo5 from 'assets/imagesTodo/photo5.svg';
import photo6 from 'assets/imagesTodo/photo6.svg';
import TodoDone from 'components/organisms/TodoDone/TodoDone';
import TodoForm from 'components/molecules/TodoForm/TodoForm';

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

const StyledLink = styled(Link)`
  text-decoration: none;
`;

class Todo extends Component {
  state = {
    checkOptionActive: false,
    LoadState: false,
    animation: false,
    addInformations: false,
    cliced: false,
  };

  addTodoDone = whatCLicked => {
    this.setState({ cliced: whatCLicked, animation: true });
  };

  checkOption = () => {
    this.setState({ animation: false, addInformations: true });
  };

  continue = state => {
    if (!state) {
      this.addToDoneTodoApi();
      this.setState({ checkOptionActive: true });
    } else {
      this.setState({ animation: true });
    }
  };

  addToDoneTodoApi = (
    hours = this.props.data.hours,
    minutes = this.props.data.minutes,
    note = '',
  ) => {
    const { data, date, addTodoDoneApi } = this.props;
    const { cliced } = this.state;
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
    const { LoadState, animation, checkOptionActive, addInformations, cliced } = this.state;
    const photos = [photo1, photo2, photo3, photo4, photo5, photo6];

    return (
      <>
        {checkOptionActive ? (
          <TodoDone status={!cliced} title={data.title} />
        ) : (
          <>
            {addInformations ? (
              <Formik
                initialValues={{ h: '', m: '' }}
                onSubmit={({ h, m }) => {
                  if (h !== '' && m !== '') {
                    this.addToDoneTodoApi(h, m, '');
                    this.setState({ checkOptionActive: true });
                  }
                }}
              >
                <TodoForm data={data} />
              </Formik>
            ) : (
              <>
                <StyledWrapper LoadState={LoadState} addInformations={addInformations}>
                  <StyledIcon src={photos[data.images]} />
                  <StyledWrapperForElements>
                    <StyledH1 to={`todo/${data.id}`}>{data.title}</StyledH1>
                    <StyledTime>
                      {data.hours}h {data.minutes}m
                    </StyledTime>
                    <WrapperIcons>
                      <StyledLink to="/pomodoro">
                        <ButtonInTodo
                          icons={icon_clock}
                          first
                          title="pomodo"
                          animation={animation}
                        />
                      </StyledLink>
                      <div onClick={() => this.addTodoDone(true)}>
                        <ButtonInTodo icons={icon_check} title="zrobione" animation={animation} />
                      </div>
                      <div onClick={() => this.continue(false)}>
                        <ButtonInTodo title="niestety" animation={animation} />
                      </div>
                    </WrapperIcons>
                    {animation && (
                      <StyledQuestion>
                        <StyledQuersionP>Brawo! Chcesz dodać szczegóły</StyledQuersionP>
                        <StyledWrapperButtons>
                          <StyledButton onClick={() => this.continue(false, false)}>
                            nie
                          </StyledButton>
                          <StyledButton blue onClick={() => this.checkOption(true)}>
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
