import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.blue};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const H1 = styled.h1`
  margin: 0;
`;

const App = () => (
  <MainTemplate>
    <StyledWrapper>
      <H1>hello world</H1>
    </StyledWrapper>
  </MainTemplate>
);

export default App;
