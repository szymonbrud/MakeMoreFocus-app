import React from 'react';
import styled from 'styled-components';
import done from 'assets/icons/done.svg';
import time from 'assets/icons/time.svg';
import Icon from 'components/Icon/Icon';
import { Link } from 'react-router-dom';

const StyledMainWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 20px;
`;

const StyledWrapper = styled(Link)`
  background: ${({ theme }) => theme.ligth_blue};
  border-radius: 10px;
  width: 42vw;
  max-width: 46%;
  height: 35vw;
  max-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

const StyledIcon = styled(Icon)`
  transform: scale(0.1);
  margin-top: -30px;
`;

const StyledLink = styled.p`
  color: ${({ theme }) => theme.blue};
  width: 96%;
  margin: 0 0 0 2%;
  text-align: center;
  position: absolute;
  bottom: 5px;
  left: 0;
  text-decoration: none;
/* 
  ::before {
    position: absolute;
    content: '';
    bottom: -2px;
    left: 6%;
    width: 92%;
    height: 1px;
    background: ${({ theme }) => theme.blue};
  } */
`;

const TilesLinkWithImage = () => (
  <StyledMainWrapper>
    <StyledWrapper to="/doneTodo">
      <StyledIcon src={done} />
      <StyledLink>zobacz jak ci idzie</StyledLink>
    </StyledWrapper>
    <StyledWrapper to="/pomodoro">
      <StyledIcon src={time} />
      <StyledLink>rozpocznij pomodoro</StyledLink>
    </StyledWrapper>
  </StyledMainWrapper>
);

export default TilesLinkWithImage;
