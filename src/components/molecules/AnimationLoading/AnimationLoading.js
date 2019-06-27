import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const animation = keyframes`
  0%{
    transform: translateY(-150%);
  }
  
  50%{
    transform: translateY(150%);
  }

  100%{
    transform: translateY(-150%);
  }
`;

const StyledMainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Circle = styled.div`
  width: 10px;
  height: 10px;
  background: black;
  border-radius: 100%;
  animation: ${animation} 2s infinite;
  margin: 0 10px;

  ${({ secound }) =>
    secound &&
    css`
      animation: ${animation} 2s 0.1s infinite;
    `}

  ${({ three }) =>
    three &&
    css`
      animation: ${animation} 2s 0.2s infinite;
    `}
`;

const AnimationLoading = () => (
  <>
    <StyledMainWrapper>
      <h1>Loading</h1>
      <StyledDiv>
        <Circle />
        <Circle secound />
        <Circle three />
      </StyledDiv>
    </StyledMainWrapper>
  </>
);

export default AnimationLoading;
