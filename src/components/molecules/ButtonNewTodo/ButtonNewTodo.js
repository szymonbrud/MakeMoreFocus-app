import styled from 'styled-components';
import { Link } from 'react-router-dom';
import media from 'assets/styles/media';

const ButtonNewTodo = styled(Link)`
  position: fixed;
  bottom: 4vh;
  left: 80%;
  width: 50px;
  height: 50px;
  background: linear-gradient(
      180deg,
      rgba(233, 175, 185, 0.916667) 25%,
      #e7a8b3 25%,
      rgba(255, 255, 255, 0) 25%,
      rgba(255, 255, 255, 0) 25%
    ),
    linear-gradient(180deg, #b482cb 50%, rgba(255, 255, 255, 0) 50%),
    linear-gradient(180deg, #3f5ab1 75%, rgba(255, 255, 255, 0) 75%), #081c41;
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

  ${media.tablet`
    left: calc(50vw + 150px);
  `}
`;

export default ButtonNewTodo;
