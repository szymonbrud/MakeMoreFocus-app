import React from 'react';
import styled from 'styled-components';
import Date from 'components/atoms/Date/Date';
import Todo from 'components/organisms/Todo/Todo';

const StyledMainWrapper = styled.article`
  width: 100%;
  height: 100%;
`;

const WrapperTodo = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 220px);
  grid-gap: 10px 0;
`;

const TodoModel = ({ todoData }) => (
  <StyledMainWrapper>
    <Date>data</Date>
    <WrapperTodo>
      {[todoData[0]].map(({ title }) => (
        <Todo title={title} />
      ))}
    </WrapperTodo>
  </StyledMainWrapper>
);

export default TodoModel;
