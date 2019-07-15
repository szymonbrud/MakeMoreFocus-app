import React from 'react';
import styled from 'styled-components';
import Icon from 'components/Icon/Icon';
import icon_clock from 'assets/icons/icon_clock.svg';
import propTypes from 'prop-types';

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

const StyledIconClock = styled(Icon)`
  display: inline-block;
  transform: scale(0.6);
`;

const TodoDoneDone = ({ data }) => (
  <PostionPhoto>
    <StyledMainWrapper>
      <StyledP>{data.title}</StyledP>
      <StyledPTime>
        <StyledIconClock src={icon_clock} />
        {`${data.hours}h ${data.minutes}m`}
      </StyledPTime>
    </StyledMainWrapper>
  </PostionPhoto>
);

TodoDoneDone.propTypes = {
  data: propTypes.objectOf(propTypes.number, propTypes.string),
};

TodoDoneDone.defaultProps = {
  data: {},
};

export default TodoDoneDone;
