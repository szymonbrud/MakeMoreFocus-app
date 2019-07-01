import React, { Component } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledMainWrapper = styled.article`
  width: 100%;
  height: 100%;
`;

// const WrapperTodo = styled.div`
//   width: 100%;
//   display: grid;
//   justify-content: center;
//   grid-template-columns: repeat(auto-fill, 220px);
//   grid-gap: 10px 0;
// `;

class TodoModel extends Component {
  state = {};

  render() {
    const { date, todoDone, todo } = this.props;

    const allTodos = [];
    let indexTab = 0;
    let stateOfTodo = [];
    let CheckStateOfTodo = true;
    let dateTodone;

    const checkTodoDone = prop => {
      todoDone.forEach((e, i) => {
        if (e === null) {
          stateOfTodo[i] = true;
        } else if (e.idTodo === todo[prop].id) {
          stateOfTodo[i] = false;
          dateTodone = e;
        } else {
          stateOfTodo[i] = true;
        }
      });

      stateOfTodo.forEach(e => {
        if (e === false) {
          CheckStateOfTodo = false;
        }
      });

      if (CheckStateOfTodo === true) {
        allTodos[indexTab] = todo[prop];
        indexTab += 1;
      } else {
        allTodos[indexTab] = dateTodone;
        indexTab += 1;
      }
    };

    if (todoDone.length !== 0 && todo.length !== 0) {
      // eslint-disable-next-line
      for (const prop in todo) {
        CheckStateOfTodo = true;
        stateOfTodo = [];
        checkTodoDone(prop);
      }
    }

    return (
      <StyledMainWrapper>
        <h1>{date.todayDayName}</h1>
        <h1>{date.todayDay}</h1>
        {allTodos.length !== 0
          ? allTodos.map(e => {
              if (e.date === undefined) {
                return <p>{e.title}</p>;
              }
              return <p>---{e.title}---</p>;
            })
          : null}
      </StyledMainWrapper>
    );
  }
}

TodoModel.propTypes = {
  date: propTypes.objectOf(propTypes.object),
  todoDone: propTypes.arrayOf(propTypes.object),
  todo: propTypes.objectOf(propTypes.object),
};

TodoModel.defaultProps = {
  date: {},
  todoDone: [],
  todo: {},
};

export default TodoModel;
