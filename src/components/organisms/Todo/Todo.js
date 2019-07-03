import React, { Component } from 'react';
import styled from 'styled-components';
import Icon from 'components/Icon/Icon';
import web_dev from 'assets/images/web_dev.svg';
import ButtonInTodo from 'components/molecules/ButtonInTodo/ButtonInTodo';
import icon_clock from 'assets/icons/icon_clock.svg';
import icon_check from 'assets/icons/icon_check.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addTodoDone } from 'actions';
import propTypes from 'prop-types';

const StyledWrapper = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  margin: 10px 0;
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
  min-width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
`;

const StyledH1 = styled(Link)`
  color: white;
  width: 90%;
  font-size: 2rem;
  position: absolute;
  width: 65%;
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
  transform: scale(0.15) translateX(150%);
`;

// eslint-disable-next-line
class Todo extends Component {
  addToDoneTodo = () => {
    // eslint-disable-next-line
    const { data, date, addTodoDoneApi } = this.props;

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

    const fullDate = `${date.todayYear}-${liczba}-${date.todayDay}`;

    addTodoDoneApi(data.id, data.title, fullDate);
  };

  render() {
    const { data } = this.props;

    return (
      <StyledWrapper>
        <StyledIcon src={web_dev} />
        <StyledWrapperForElements>
          <StyledH1 to={`todo/${data.id}`}>{data.title}</StyledH1>
          <StyledTime>2h</StyledTime>
          <WrapperIcons>
            <ButtonInTodo icons={icon_clock} first title="pomodo" />
            {/* eslint-disable-next-line */}
            <div onClick={() => this.addToDoneTodo()}>
              <ButtonInTodo icons={icon_check} title="zrobione" />
            </div>
            <ButtonInTodo title="niestety" />
          </WrapperIcons>
        </StyledWrapperForElements>
      </StyledWrapper>
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
