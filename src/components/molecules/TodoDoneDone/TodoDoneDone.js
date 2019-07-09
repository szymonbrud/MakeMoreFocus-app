import React from 'react';
import styled from 'styled-components';
import web_dev from 'assets/images/web_dev.svg';
import Icon from 'components/Icon/Icon';
import { Link } from 'react-router-dom';
import left_arrow from 'assets/icons/left_arrow.svg';

const PostionPhoto = styled.div`
  width: 94%;
  margin: 10px 3%;
  display: flex;
  align-items: center;
  height: 90px;
  position: relative;
  justify-content: center;
`;

const StyledMainWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.opacityBlue2};
  display: flex;
  align-items: center;
  height: 90px;
  border-radius: 10px;
`;

const StyledP = styled.p`
  color: white;
  font-size: 1.8rem;
  margin: 0 0 0 10px;
  width: 50%;
`;

const StyledPTime = styled.p`
  width: 30%;
  margin: 0;
  color: white;
`;

const StyledIcon = styled(Icon)`
  transform: scale(0.1);
  margin-left: -45vw;
`;

const StyledArrowIcon = styled(Icon)`
  width: 16px;
  height: 16px;
  transform: rotate(180deg);
`;

const StyledLink = styled(Link)`
  position: absolute;
  right: 7px;
`;

const TodoDoneDone = ({ data }) => (
  <PostionPhoto>
    <StyledIcon src={web_dev} />
    <StyledMainWrapper>
      <StyledP>{data.title}</StyledP>
      <StyledPTime>{`${data.hours}h ${data.minutes}m`}</StyledPTime>
      <StyledLink to={`doneTodo/${data.id}`}>
        <StyledArrowIcon src={left_arrow} />
      </StyledLink>
    </StyledMainWrapper>
  </PostionPhoto>
);

export default TodoDoneDone;
