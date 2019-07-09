import React from 'react';
import styled from 'styled-components';
import Icon from 'components/Icon/Icon';
import propTypes from 'prop-types';
import posed from 'react-pose';

const StyledWrapper = styled.button`
  height: 25px;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0;
  position: relative;
  left: 5%;
  background: none;
`;

const StyledIcon = styled(Icon)`
  transform: scale(0.4);
`;

const StyledXIcon = styled.div`
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
  height: 100%;
  background: ${({ theme }) => theme.blue};
  color: white;
  border-radius: 5px;
  z-index: 10;
  min-width: 100px;
  position: relative;
  margin-left: -10%;
`;

const StyledIconWrapper = styled.div`
  width: 50px;
  height: 25px;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  position: relative;
  z-index: 100;
  background: white;
`;

const StyledWrapperAnimate = posed(StyledWrapper)({
  visible: {
    opacity: 1,
    x: '0',
  },
  hidden: {
    opacity: 0,
    x: '100%',
  },
});

const ButtonInTodo = ({ icons, first, title, animation }) => (
  <StyledWrapperAnimate pose={animation ? 'hidden' : 'visible'}>
    <StyledIconWrapper>
      {icons ? <StyledIcon src={icons} first={first} /> : <StyledXIcon />}
    </StyledIconWrapper>
    <StyledNameOfFunction>{title}</StyledNameOfFunction>
  </StyledWrapperAnimate>
);

ButtonInTodo.propTypes = {
  icons: propTypes.element.isRequired,
  first: propTypes.bool,
  title: propTypes.string,
};

ButtonInTodo.defaultProps = {
  first: false,
  title: '',
};

export default ButtonInTodo;
