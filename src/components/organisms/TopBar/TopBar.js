import React, { useState } from 'react';
import styled from 'styled-components';
import Menu from 'components/organisms/Menu/Menu';

const StyledMainTemplate = styled.div`
  height: 50px;
  width: 100%;
  border-bottom: 1px solid black;
  border-radius: 10px 10px 0 0;
  background: white;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledBurgerWrapper = styled.button`
  padding: 15px;
  cursor: pointer;
  border: none;
  background: none;
  position: relative;
  position: fixed;
  top: 3vh;
  transform: translateY(25%);
  z-index: 4000;
`;

const StyledBurger = styled.div`
  height: 3px;
  width: 24px;
  position: relative;
  background: black;
  border-radius: 50px;

  ::before,
  ::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    display: block;
    background: black;
    border-radius: 50px;
  }

  ::before {
    top: 8px;
  }

  ::after {
    top: -8px;
  }
`;

const StyledTitleApp = styled.p`
  font-size: 1.8rem;
  margin: 0 0 0 50px;
  color: black;
`;

const TopBar = () => {
  const [isMenuOpen, setMenuState] = useState(false);

  const toggleMobileMenu = () => {
    setMenuState(!isMenuOpen);
  };

  const getClose = () => {
    setMenuState(!isMenuOpen);
  };

  return (
    <>
      <StyledMainTemplate>
        <StyledBurgerWrapper onClick={toggleMobileMenu}>
          <StyledBurger />
        </StyledBurgerWrapper>
        <StyledTitleApp>make more app</StyledTitleApp>
      </StyledMainTemplate>
      <Menu position={isMenuOpen} closed={getClose} />
    </>
  );
};
export default TopBar;
