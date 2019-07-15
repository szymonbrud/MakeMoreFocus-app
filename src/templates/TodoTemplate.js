import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getTodosToday, getDoneTodos } from 'actions';
import propTypes from 'prop-types';
import TodoModel from 'components/models/TodoModel';
import ButtonNewTodo from 'components/molecules/ButtonNewTodo/ButtonNewTodo';
import HaveNotAnyTodoTemplate from 'templates/HaveNotAnyTodoTemplate';
import AnimationLoading from 'components/molecules/AnimationLoading/AnimationLoading';
import TopBar from 'components/organisms/TopBar/TopBar';
import TilesLinkWithImage from 'components/molecules/TilesLinkWithImage/TilesLinkWithImage';
import addZeroToDate from 'functions/addZeroToDate';
import { NamesOfDays } from 'functions/Names';

const StyledWrapper = styled.section`
  width: 100%;
  min-height: 100%;
`;

class TodoTemplate extends Component {
  state = {
    day: 0,
    month: 0,
    year: 0,
  };

  componentDidMount() {
    const { todos, getNewData } = this.props;

    const todayDate = new Date();
    let day = todayDate.getDate();
    let month = todayDate.getMonth();
    const year = todayDate.getFullYear();

    this.setState({
      day,
      month,
      year,
    });

    day = addZeroToDate(day);
    month = addZeroToDate(month);

    if (todos.monday === undefined || getNewData) {
      const fullTodayDate = `${year}-${month}-${day - 1}`;
      this.getTodos(fullTodayDate);
    }
  }

  getTodos = fullTodayDate => {
    const userId = sessionStorage.getItem('key');
    const { getTodos, getDone } = this.props;

    getTodos(userId);
    getDone(userId, fullTodayDate);
  };

  render() {
    const { todos, todoDone } = this.props;
    const { day, month, year } = this.state;

    return (
      <StyledWrapper>
        <TopBar />
        {todos.length !== 0 && <TilesLinkWithImage />}
        {todos.length !== 0 ? (
          NamesOfDays.map((element, index) => {
            const dateToday = new Date(year, month, day + index);
            const todayDayName = NamesOfDays[dateToday.getDay()];
            let todayDay = dateToday.getDate();
            let todayMonth = dateToday.getMonth();
            const todayYear = dateToday.getFullYear();
            const todayDayWeek = dateToday.getDay();

            todayDay = addZeroToDate(todayDay);
            todayMonth = addZeroToDate(todayMonth);

            const yesterdayDate = new Date(todayYear, todayMonth, todayDay);

            let yesterdayDay = yesterdayDate.getDate();
            let yesterdayMonth = yesterdayDate.getMonth();
            const yesterdayYear = yesterdayDate.getFullYear();

            yesterdayMonth += 1;

            yesterdayDay = addZeroToDate(yesterdayDay);
            yesterdayMonth = addZeroToDate(yesterdayMonth);

            const fullYesterdayDate = `${yesterdayYear}-${yesterdayMonth}-${yesterdayDay}T00:00:00.000Z`;
            let check = false;

            NamesOfDays.forEach(ele => {
              for (const prop in todos[ele]) {
                if (prop !== undefined) check = true;
              }
            });

            if (check === true) {
              return todos.length !== 0 ? (
                <TodoModel
                  date={{
                    todayDayName,
                    todayDay,
                    todayMonth,
                    todayYear,
                    todayDayWeek,
                  }}
                  todoDone={todoDone.map((e, i) => {
                    return e.date === fullYesterdayDate ? todoDone[i] : null;
                  })}
                  todo={todos[todayDayName]}
                />
              ) : null;
            }
            return <>{index === 0 && <HaveNotAnyTodoTemplate />}</>;
          })
        ) : (
          <AnimationLoading big />
        )}
        <ButtonNewTodo to="/addTodo" />
      </StyledWrapper>
    );
  }
}

TodoTemplate.propTypes = {
  getTodos: propTypes.func.isRequired,
  getDone: propTypes.func.isRequired,
  todoDone: propTypes.objectOf(propTypes.object),
  todos: propTypes.objectOf(propTypes.object),
  getNewData: propTypes.bool.isRequired,
};

TodoTemplate.defaultProps = {
  todoDone: {},
  todos: {},
};

const myActionToProps = {
  getTodos: getTodosToday,
  getDone: getDoneTodos,
};

const mapDataOfTodo = state => ({
  todos: state.todosToday,
  todoDone: state.todoDone,
  getNewData: state.getNewData,
});

export default connect(
  mapDataOfTodo,
  myActionToProps,
)(TodoTemplate);
