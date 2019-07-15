import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

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

const TodoDidNotDone = ({ data }) => (
  <StyledMainWrapper>
    <StyledP>{data.title}</StyledP>
  </StyledMainWrapper>
);

TodoDidNotDone.propTypes = {
  data: propTypes.objectOf(propTypes.number, propTypes.string),
};

TodoDidNotDone.defaultProps = {
  data: {},
};

export default TodoDidNotDone;
