import React, { Component } from 'react';
import styled from 'styled-components';
import TodoModel from 'components/models/TodoModel';
import { connect } from 'react-redux';
import { getTodosToday, getDoneTodos } from 'actions';
import propTypes from 'prop-types';

const StyledWrapper = styled.section`
  width: 100%;
  min-height: 100%;
`;

class TodoTemplate extends Component {
  state = {
    // eslint-disable-next-line
    dateToday: '',
    // eslint-disable-next-line
    stateFor: 0,
  };

  componentDidMount() {
    const date = new Date();
    // eslint-disable-next-line
    const { getTodos, getDone, todoDone } = this.props;

    const userId = sessionStorage.getItem('key');

    let month = date.getMonth();
    let day = date.getDate();
    const year = date.getFullYear();
    if (day < 10) {
      day = `0${day}`;
    }
    if (month < 10) {
      month = `0${month}`;
    }

    const fullDate = `${year}-${month}-${day - 1}`;

    // eslint-disable-next-line
    this.setState({ dateToday: fullDate });

    setTimeout(() => {
      getTodos(userId);
      getDone(userId, fullDate);
    }, 1000);
  }

  render() {
    const { todos, todoDone } = this.props;
    const date = new Date();

    const month2 = date.getMonth();
    const day2 = date.getDate();
    const year2 = date.getFullYear();

    const NamesOfDays = [
      'sunday',
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
    ];

    const tab = [0, 1, 2, 3, 4, 5, 6];

    return (
      <StyledWrapper>
        {todos.length !== 0
          ? tab.map((element, i) => {
              let date2;
              let date3;
              if (i !== 0) {
                date2 = new Date(year2, month2 + 1, day2 + i);
              } else {
                date2 = new Date(year2, month2 + 1, day2);
              }

              if (i !== 0) {
                date3 = new Date(year2, month2, day2 + i);
              } else {
                date3 = new Date(year2, month2, day2);
              }

              const dayName = NamesOfDays[date3.getDay()];
              let month = date2.getMonth();
              let day = date2.getDate();
              const year = date2.getFullYear();

              if (month < 10) {
                month = `0${month}`;
              }

              if (day < 10) {
                day = `0${day}`;
              }

              const fullDateIn = `${year}-${month}-${day - 1}T22:00:00.000Z`;
              const dayDate3 = date3.getDate();
              const monthDate3 = date3.getMonth();
              const yearDate3 = date3.getFullYear();

              const date4 = new Date(yearDate3, monthDate3 + 1, dayDate3 - 1);

              let fullDay4 = date4.getDate();
              let fullMonth4 = date4.getMonth();

              if (fullMonth4 < 10) {
                fullMonth4 = `0${fullMonth4}`;
              }

              if (fullDay4 < 10) {
                fullDay4 = `0${fullDay4}`;
              }

              const mainDate = new Date();
              const mainDay = mainDate.getDate();
              const mainMonth = mainDate.getMonth();
              const mainYear = mainDate.getFullYear();

              const DateLastDay = new Date(mainYear, mainMonth, mainDay - 1 + i);

              let LastDay = DateLastDay.getDate();
              let lastMonth = DateLastDay.getMonth();
              const lastYear = DateLastDay.getFullYear();
              lastMonth += 1;

              if (LastDay < 10) {
                LastDay = `0${LastDay}`;
              }

              if (lastMonth < 10) {
                lastMonth = `0${lastMonth}`;
              }

              const full2 = `${lastYear}-${lastMonth}-${LastDay}T22:00:00.000Z`;

              const doneMore = [];
              if (todoDone.length !== 0) {
                // eslint-disable-next-line
                todoDone.map((element, i) => {
                  if (element.date === fullDateIn) {
                    doneMore[i] = todoDone[i];
                    // console.log(todoDone[i]);
                    // console.log(fullDateIn);
                  }
                });
              }

              // console.log(fullDateIn);
              // console.log(todoDone);

              return todos.length !== 0 ? (
                <TodoModel
                  date={{
                    month,
                    day,
                    year,
                    dayName,
                  }}
                  todoDone={todoDone.map((ele, ind) => {
                    return ele.date === full2 ? todoDone[ind] : null;
                  })}
                  todo={todos[dayName]}
                />
              ) : null;
            })
          : null}
      </StyledWrapper>
    );
  }
}

TodoTemplate.propTypes = {
  getTodos: propTypes.func.isRequired,
  todos: propTypes.objectOf(
    propTypes.string,
    propTypes.string,
    propTypes.string,
    propTypes.number,
    propTypes.number,
    propTypes.number,
    propTypes.number,
    propTypes.number,
    propTypes.number,
  ),
};

TodoTemplate.defaultProps = {
  todos: propTypes.objectOf(
    propTypes.string,
    propTypes.string,
    propTypes.string,
    propTypes.number,
    propTypes.number,
    propTypes.number,
    propTypes.number,
    propTypes.number,
    propTypes.number,
  ),
};

const myActionToProps = {
  getTodos: getTodosToday,
  getDone: getDoneTodos,
};

const mapDataOfTodo = state => ({
  todos: state.todosToday,
  todoDone: state.todoDone,
});

export default connect(
  mapDataOfTodo,
  myActionToProps,
)(TodoTemplate);
