import React from 'react';
import styled from 'styled-components';
import Icon from 'components/Icon/Icon';
import web_dev from 'assets/images/web_dev.svg';
import ButtonInTodo from 'components/molecules/ButtonInTodo/ButtonInTodo';
import icon_clock from 'assets/icons/icon_clock.svg';
import icon_check from 'assets/icons/icon_check.svg';

const StyledWrapper = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  margin: 10px 0;
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
  min-width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
`;

const StyledH1 = styled.h1`
  color: white;
  width: 90%;
  font-size: 2rem;
  position: absolute;
  width: 65%;
  top: 8%;
  left: 3%;
  margin: 0;
`;

const StyledTime = styled.h1`
  color: white;
  width: 90%;
  font-size: 2rem;
  position: absolute;
  bottom: 8%;
  left: 3%;
  margin: 0;
`;

const StyledIcon = styled(Icon)`
  transform: scale(0.15) translateX(150%);
`;

// eslint-disable-next-line
const Todo = ({ data }) => (
  <StyledWrapper>
    <StyledIcon src={web_dev} />
    <StyledWrapperForElements>
      <StyledH1>{data.title}</StyledH1>
      <StyledTime>2h</StyledTime>
      <WrapperIcons>
        <ButtonInTodo icons={icon_clock} first />
        <ButtonInTodo icons={icon_check} />
        <ButtonInTodo />
      </WrapperIcons>
    </StyledWrapperForElements>
  </StyledWrapper>
);

export default Todo;
