import React, { Component } from 'react';
import styled from 'styled-components';
import TodoModel from 'components/models/TodoModel';
import { connect } from 'react-redux';
import { ApiTake } from 'actions';

const StyledWrapper = styled.section`
  width: 100%;
  min-height: 100%;
`;

class TodoTemplate extends Component {
  componentDidMount() {
    const date = new Date();
    const { wantApi } = this.props;
    // const dateDay = date.getDate();
    const dzieńtyg = date.getDay();

    const NamesOfDays = [
      'sunday',
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
    ];

    const nowDay = NamesOfDays[dzieńtyg];

    wantApi(nowDay);
  }

  render() {
    const { todos } = this.props;

    return (
      <StyledWrapper>
        {todos.length !== 0 ? (
          [todos].map(element => {
            return <TodoModel todoData={element} />;
          })
        ) : (
          <h1>nie masz żadnych notatek</h1>
        )}
      </StyledWrapper>
    );
  }
}

const myActionToProps = {
  wantApi: ApiTake,
};

const mapDataOfTodo = state => ({
  todos: state.AddDate,
});

export default connect(
  mapDataOfTodo,
  myActionToProps,
)(TodoTemplate);
