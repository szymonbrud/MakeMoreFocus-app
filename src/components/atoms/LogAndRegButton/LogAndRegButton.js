import styled, { css } from 'styled-components';

const LogAndRegButton = styled.button`
  width: 40%;
  max-width: 150px;
  background: ${({ theme }) => theme.blue};
  border-radius: 10px;
  color: white;
  border: none;
  height: 34px;
  margin: 11px 0;
  font-size: 1.4rem;

  ${({ radius }) =>
    radius &&
    css`
      border-radius: 15px;
      height: 40px;
    `}

  ${({ red }) =>
    red &&
    css`
      background: ${({ theme }) => theme.red};
    `}
`;

export default LogAndRegButton;
