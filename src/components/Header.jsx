import React from 'react';
import { Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar expend="md">
      <Navbar.Brand>
        <img src={`${process.env.PUBLIC_URL}/Logo.png`} width="20" height="20" alt="logo" />{' '}
        To-Do
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
