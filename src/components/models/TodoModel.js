import React, { Component } from 'react';
import styled from 'styled-components';

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
    // eslint-disable-next-line
    const { date, todoDone, todo } = this.props;

    const allTodos = [];
    let tabI = 0;
    let dod = [];
    let przepus = true;
    let dateTodone;

    if (todoDone.length !== 0 && todo.length !== 0) {
      // eslint-disable-next-line
      for (const prop in todo) {
        przepus = true;
        dod = [];
        // eslint-disable-next-line
        todoDone.map((e, i) => {
          if (e === null) {
            dod[i] = true;
          } else if (e.idTodo === todo[prop].id) {
            dod[i] = false;
            dateTodone = e;
          } else {
            dod[i] = true;
          }
        });
        // eslint-disable-next-line
        for (const zmien in dod) {
          if (dod[zmien] === false) {
            przepus = false;
          }
        }

        // console.log(przepus);
        if (przepus === true) {
          allTodos[tabI] = todo[prop];
          tabI += 1;
        } else {
          allTodos[tabI] = dateTodone;
          tabI += 1;
        }
        // else {
        //   addTodosp[tabI] =
        //   tabI += 1;
        // }
      }
    }

    return (
      <StyledMainWrapper>
        <h1>{date.dayName}</h1>
        <h1>{date.day}</h1>
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

export default TodoModel;
