import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const StyledMainWrapper = styled.div`
  position: fixed;
  top: 3vh;
  z-index: 3000;
  left: 4%;
  width: 92%;
  height: 97vh;
  display: flex;
`;

const StyledMainWrapperAnimation = posed(StyledMainWrapper)({
  visible: {
    y: 0,
    opacity: 1,
  },
  hidden: {
    opacity: 0,
    y: '100vh',
  },
});

const StyledCloseWrapper = styled.div`
  width: 30%;
  height: 100%;
`;

const StyledWrapper = styled.div`
  background: #fff;
  height: 100%;
  width: 70%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled.p`
  margin: 15px;
  color: black;
  text-decoration: none;
  font-size: 2rem;

  :nth-child(1) {
    margin-top: 90px;
  }
`;

const Menu = ({ position, closed }) => (
  <StyledMainWrapperAnimation pose={position ? 'visible' : 'hidden'}>
    <StyledWrapper>
      <StyledLink as={NavLink} to="/todo">
        Start
      </StyledLink>
      <StyledLink as={NavLink} to="/doneTodo">
        zrobione zadania
      </StyledLink>
      <StyledLink as={NavLink} to="/pomodoro">
        pomodoro
      </StyledLink>
    </StyledWrapper>
    <StyledCloseWrapper onClick={() => closed()} />
  </StyledMainWrapperAnimation>
);

export default Menu;
