import React, { Component } from 'react';
import styled from 'styled-components';
import TodoModel from 'components/models/TodoModel';
import { connect } from 'react-redux';
import { getTodosToday } from 'actions';
import AnimationLoading from 'components/molecules/AnimationLoading/AnimationLoading';
import propTypes from 'prop-types';

const StyledWrapper = styled.section`
  width: 100%;
  min-height: 100%;
`;

class TodoTemplate extends Component {
  componentDidMount() {
    const date = new Date();
    const { getTodos } = this.props;
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
    setTimeout(() => {
      getTodos(nowDay);
    }, 1000);
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
          <AnimationLoading />
        )}
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
};

const mapDataOfTodo = state => ({
  todos: state.todosToday,
});

export default connect(
  mapDataOfTodo,
  myActionToProps,
)(TodoTemplate);
