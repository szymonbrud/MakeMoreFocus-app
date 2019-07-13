import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import propTypes from 'prop-types';

const AnimationIn = keyframes`
  from{
    transform: translateX(-100%);
  }

  to{
    transform: translateX(0%);
  }
`;

const StyledMainWrapper = styled.div`
  width: 100%;
  height: 30px;
  margin: 10px 0;
  background: ${({ theme }) => theme.blue};
  border-radius: 5px;
  display: flex;
  align-items: center;
  ${({ status }) =>
    status !== undefined &&
    css`
      animation: ${AnimationIn} 0.5s forwards;
    `}

  ${({ state }) =>
    state &&
    css`
      background: #53585e;
    `}
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

const TodoDone = ({ data = { state: null }, status, title }) => (
  <StyledMainWrapper state={status || data.state === 0} status={status}>
    <StyledTitle>{data.title === undefined ? title : data.title}</StyledTitle>
  </StyledMainWrapper>
);

TodoDone.propTypes = {
  data: propTypes.objectOf(propTypes.string.isRequired, propTypes.number.isRequired).isRequired,
  status: propTypes.bool,
  title: propTypes.string,
};

TodoDone.defaultProps = {
  status: undefined,
  title: '',
};

export default TodoDone;
