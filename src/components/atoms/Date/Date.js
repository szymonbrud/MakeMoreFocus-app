import styled from 'styled-components';

const Date = styled.div`
  background: ${({ theme }) => theme.blue};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 0px;
  width: 70px;
  font-weight: 700;
  border-radius: 0 10px 10px 0;
  margin-bottom: 10px;
`;

export default Date;
