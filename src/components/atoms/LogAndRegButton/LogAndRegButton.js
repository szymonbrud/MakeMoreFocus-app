import styled from 'styled-components';

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
`;

export default LogAndRegButton;
