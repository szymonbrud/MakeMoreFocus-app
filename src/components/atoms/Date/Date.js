import styled from 'styled-components';

const Date = styled.div`
  background: ${({ theme }) => theme.blue};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  max-width: 100px;
  border-radius: 0 10px 10px 0;
`;

export default Date;
