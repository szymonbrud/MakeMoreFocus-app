import React from 'react';
import styled from 'styled-components';
import Icon from 'components/Icon/Icon';
import web_dev from 'assets/images/web_dev.svg';
import ButtonInTodo from 'components/molecules/ButtonInTodo/ButtonInTodo';
import icon_clock from 'assets/icons/icon_clock.svg';
import icon_check from 'assets/icons/icon_check.svg';
import propTypes from 'prop-types';

const StyledWrapper = styled.div`
  width: 200px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const StyledWrapperForElements = styled.div`
  background: ${({ theme }) => theme.opacityBlue2};
  border-radius: 10px;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WrapperIcons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const StyledH1 = styled.h1`
  color: white;
  width: 90%;
  font-size: 2rem;
  text-align: center;
`;

const StyledIcon = styled(Icon)`
  transform: scale(0.15);
`;

const Todo = ({ title }) => (
  <StyledWrapper>
    <StyledIcon src={web_dev} />
    <StyledWrapperForElements>
      {console.log(title)}
      <StyledH1>{title}</StyledH1>
      <WrapperIcons>
        <ButtonInTodo icons={icon_clock} first />
        <ButtonInTodo icons={icon_check} />
        <ButtonInTodo />
      </WrapperIcons>
    </StyledWrapperForElements>
  </StyledWrapper>
);

Todo.propTypes = {
  title: propTypes.string,
};

// Todo.defaultProps = {
//   title: 'Text roboczy',
// };

export default Todo;
