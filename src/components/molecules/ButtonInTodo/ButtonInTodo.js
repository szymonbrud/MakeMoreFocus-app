import React from 'react';
import styled from 'styled-components';
import Icon from 'components/Icon/Icon';
import propTypes from 'prop-types';

const StyledWrapper = styled.button`
  width: 50px;
  height: 25px;
  background: white;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

const StyledIcon = styled(Icon)`
  transform: scale(0.4) translateY(${({ first }) => (first ? '-60%' : '-63%')});
`;

const StyledDiv = styled.div`
  width: 18px;
  background: ${({ theme }) => theme.blue};
  height: 4px;
  border-radius: 50px;
  transform: rotate(45deg);
  position: relative;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: ${({ theme }) => theme.blue};
    transform: rotate(90deg);
    width: 100%;
    height: 100%;
    border-radius: 50px;
  }
`;

const ButtonInTodo = ({ icons, first }) => (
  <StyledWrapper>{icons ? <StyledIcon src={icons} first={first} /> : <StyledDiv />}</StyledWrapper>
);

ButtonInTodo.propTypes = {
  icons: propTypes.element.isRequired,
  first: propTypes.bool,
};

ButtonInTodo.defaultProps = {
  first: false,
};

export default ButtonInTodo;
