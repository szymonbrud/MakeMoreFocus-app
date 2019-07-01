import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const animation = keyframes`
  0%{
    transform: translateY(-100%);
  }
  
  50%{
    transform: translateY(100%);
  }

  100%{
    transform: translateY(-100%);
  }
`;

const StyledMainWrapper = styled.div`
  width: 60%;
  /* height: 100vh; */
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

const StyledH1 = styled.h1`
  font-size: 1.9rem;
  margin: 0;
`;

const Circle = styled.div`
  width: 10px;
  height: 10px;
  background: black;
  border-radius: 100%;
  animation: ${animation} 2s infinite both;
  margin: 0 10px;

  ${({ secound }) =>
    secound &&
    css`
      animation: ${animation} 2s 0.1s infinite both;
    `}

  ${({ three }) =>
    three &&
    css`
      animation: ${animation} 2s 0.2s infinite both;
    `}
`;

const AnimationLoading = () => (
  <>
    <StyledMainWrapper>
      <StyledH1>Loading</StyledH1>
      <StyledDiv>
        <Circle />
        <Circle secound />
        <Circle three />
      </StyledDiv>
    </StyledMainWrapper>
  </>
);

export default AnimationLoading;
