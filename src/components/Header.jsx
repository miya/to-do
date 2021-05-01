import React from 'react';
import { Navbar } from 'react-bootstrap';
import Logo from '../Logo.png';

const Header = () => {
  return (
    <>
      <Navbar expend="md" bg="dark" variant="dark">
        <Navbar.Brand>
          <img src={Logo} width="20" height="20" alt="logo"/>{' '}
          To-Do
        </Navbar.Brand>
      </Navbar>
    </>
  )
}

export default Header;
