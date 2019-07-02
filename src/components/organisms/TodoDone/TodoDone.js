import React from 'react';
import styled from 'styled-components';

const StyledMainWrapper = styled.div`
  width: 100%;
  height: 30px;
  background: ${({ theme }) => theme.blue};
  border-radius: 5px;
  display: flex;
  align-items: center;
`;

const StyledTitle = styled.h1`
  color: white;
  font-size: 1.8rem;
  position: relative;
  margin: 0 0 0 3%;

  ::before {
    content: '';
    width: 120%;
    height: 2px;
    background: white;
    position: absolute;
    top: 50%;
    left: -10%;
  }
`;

// eslint-disable-next-line
const TodoDone = ({ data }) => (
  <StyledMainWrapper>
    <StyledTitle>{data.title}</StyledTitle>
  </StyledMainWrapper>
);

export default TodoDone;
