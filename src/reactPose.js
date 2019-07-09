import React, { Component } from 'react';
import MainTemplate from 'templates/MainTemplate';
import styled from 'styled-components';
import posed from 'react-pose';

// const AnimateH1 = {};

// const H1 = styled(posed.h1(AnimateH1))`
//   margin: 0;
// `;

const H1 = styled.h1`
  margin: 0;
`;

const H1Animate = posed(H1)({
  hiddene: {
    opacity: 0,
    x: '100%',
  },
  visiblee: {
    opacity: 1,
    x: 0,
  },
});

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.blue};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class App extends Component {
  state = {
    animate: true,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState(prevState => ({ animate: !prevState.animate }));
    }, 1000);
  }

  render() {
    const { animate } = this.state;

    return (
      <MainTemplate>
        <StyledWrapper>
          <H1Animate pose={animate ? 'visiblee' : 'hiddene'}>hello worldd</H1Animate>
        </StyledWrapper>
      </MainTemplate>
    );
  }
}

export default App;
