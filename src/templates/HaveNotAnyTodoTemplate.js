import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledMainWrapper = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  display: flex;
  position: absolute;
  background: white;
  top: 51px;
  left: 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
`;

const StyledBigH1 = styled.h1`
  font-weight: 600;
  text-align: center;
  color: rgba(0, 0, 0, 0.57);
  font-size: 3.4rem;
  max-width: 320px;
`;

const StyledLinkToAddTodo = styled(Link)`
  width: 70%;
  max-width: 240px;
  background: ${({ theme }) => theme.blue};
  color: white;
  border: none;
  border-radius: 15px;
  height: 50px;
  text-decoration: none;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HaveNotAnyTodoTemplate = () => (
  <StyledMainWrapper>
    <StyledBigH1>Nie masz jeszcze żadynch zadań</StyledBigH1>
    <StyledLinkToAddTodo to="/addTodo">+dodaj swoje pierwsze zadnie</StyledLinkToAddTodo>
  </StyledMainWrapper>
);

export default HaveNotAnyTodoTemplate;
