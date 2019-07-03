import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonNewTodo = styled(Link)`
  position: fixed;
  top: 90vh;
  left: 80%;
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.blue};
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  z-index: 4000;

  ::before,
  ::after {
    content: '';
    position: absolute;
    background: white;
  }

  ::before {
    top: 44%;
    left: 20%;
    width: 60%;
    height: 10%;
    border-radius: 50px;
  }

  ::after {
    top: 20%;
    left: 45%;
    width: 10%;
    height: 60%;
    border-radius: 50px;
  }
`;

export default ButtonNewTodo;
