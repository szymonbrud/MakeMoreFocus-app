import React from 'react';
import styled from 'styled-components';

const StyeldButton = styled.button`
  height: 100px;
  width: 200px;
  background: ${({ color, theme }) => theme[color] || color};
  color: white;
  border-radius: 50px;
  border: none;
  font-size: 30px;
`;

const Button = ({ color }) => (
  <>
    <StyeldButton color={color}>click it</StyeldButton>
  </>
);

export default Button;
