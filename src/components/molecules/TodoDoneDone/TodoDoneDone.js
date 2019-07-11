import React from 'react';
import styled from 'styled-components';
import web_dev from 'assets/images/web_dev.svg';
import Icon from 'components/Icon/Icon';
import { Link } from 'react-router-dom';
import arrow_white_icon from 'assets/icons/arrow_white_icon.svg';
import icon_clock from 'assets/icons/icon_clock.svg';

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
  justify-content: space-between;
  min-height: 90px;
  border-radius: 10px;
`;

const StyledP = styled.p`
  color: white;
  font-size: 2rem;
  margin: 0 0 0 10px;
  width: 50%;
`;

const StyledPTime = styled.p`
  width: 40%;
  margin: 0;
  color: white;
  display: flex;
  align-items: center;
`;

const StyledIcon = styled(Icon)`
  transform: scale(0.1);
  margin-left: -50vw;
`;

const StyledIconClock = styled(Icon)`
  display: inline-block;
  transform: scale(0.6);
`;

const TodoDoneDone = ({ data }) => (
  <PostionPhoto>
    <StyledIcon src={web_dev} />
    <StyledMainWrapper>
      <StyledP>{data.title}</StyledP>
      <StyledPTime>
        <StyledIconClock src={icon_clock} />
        {`${data.hours}h ${data.minutes}m`}
      </StyledPTime>
    </StyledMainWrapper>
  </PostionPhoto>
);

export default TodoDoneDone;
