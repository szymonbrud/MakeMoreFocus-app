import React from 'react';
import styled from 'styled-components';
import Icon from 'components/Icon/Icon';
import propTypes from 'prop-types';

const StyledWrapper = styled.button`
  height: 25px;
  background: white;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  position: relative;
  top: 0;
  left: 0;
  z-index: 100;
  margin: 0;
  padding: 0;
`;

const StyledIcon = styled(Icon)`
  transform: scale(0.4);
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

const StyledNameOfFunction = styled.div`
  padding: 5px 10px 5px 30px;
  position: absolute;
  top: 0;
  left: 80%;
  height: 100%;
  background: ${({ theme }) => theme.blue};
  color: white;
  border-radius: 5px;
  z-index: -100;
`;

const StyledIconWrapper = styled.div`
  width: 50px;
  height: 25px;
  background: white;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  position: absolute;
`;

const ButtonInTodo = ({ icons, first }) => (
  <StyledWrapper>
    <StyledIconWrapper>
      {icons ? <StyledIcon src={icons} first={first} /> : <StyledDiv />}
    </StyledIconWrapper>
    <StyledNameOfFunction>zrobione</StyledNameOfFunction>
  </StyledWrapper>
);

ButtonInTodo.propTypes = {
  icons: propTypes.element.isRequired,
  first: propTypes.bool,
};

ButtonInTodo.defaultProps = {
  first: false,
};

export default ButtonInTodo;
