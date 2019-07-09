import styled from 'styled-components';

const Date = styled.div`
  background: ${({ theme }) => theme.blue};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 0px;
  width: ${({ big }) => (big ? '100px' : '70px')};
  font-weight: 700;
  border-radius: 0 10px 10px 0;
  margin: 0px 0 15px 0;
`;

export default Date;
