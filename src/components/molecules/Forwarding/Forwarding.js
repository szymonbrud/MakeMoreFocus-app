import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledText = styled.p`
  font-size: 1.5rem;
  margin: 0;
`;

const StyledLink = styled(Link)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.blue};
  position: relative;
  margin: 4px 0 0 0;
  text-decoration: none;

  ::before {
    content: '';
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.blue};
    position: absolute;
    bottom: -4px;
    right: 0;
  }
`;

const Forwarding = ({ text, textInLink, linkTo }) => (
  <StyledWrapper>
    <StyledText>{text}</StyledText>
    <StyledLink to={linkTo}>{textInLink}</StyledLink>
  </StyledWrapper>
);

Forwarding.propTypes = {
  text: propTypes.string.isRequired,
  textInLink: propTypes.string.isRequired,
  linkTo: propTypes.string.isRequired,
};

export default Forwarding;
