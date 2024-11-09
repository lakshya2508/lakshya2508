import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <NavBar>
      <Logo></Logo>
      <NavLinks>
        <a href="#projects">Projects</a>
        <a href="Contact">Contact</a>
        <a href="#about">About</a>
        <a href="#blog">Blog</a>
      </NavLinks>
    </NavBar>
  );
}

export default Header;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
  background: transparent;
  position: absolute;
  width: 100%;
  top: 0;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: white;
`;

const NavLinks = styled.div`
  a {
    color: white;
    margin-left: 20px;
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    &:hover {
      color: #f0f0f0;
    }
  }
`;
