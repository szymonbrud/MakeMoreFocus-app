import React from 'react';
import styled from 'styled-components';
import Icon from 'components/Icon/Icon';
import { Link } from 'react-router-dom';
import left_arrow from 'assets/icons/left_arrow.svg';

const StyledMainWrapper = styled.div`
  width: 94%;
  margin: 10px 3%;
  padding: 5px 0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #53585e;
  position: relative;
`;

const StyledP = styled.p`
  color: white;
  margin: 0 0 0 10px;
  font-size: 18px;
`;

const StyledArrowIcon = styled(Icon)`
  width: 15px;
  height: 15px;
  transform: rotate(180deg);
`;

const StyledLink = styled(Link)`
  position: absolute;
  right: 7px;
`;

const TodoDidNotDone = ({ data }) => (
  <StyledMainWrapper>
    <StyledP>{data.title}</StyledP>
  </StyledMainWrapper>
);

export default TodoDidNotDone;
