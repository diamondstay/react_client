import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Logo from 'images/logo.png';

function Header() {
  return (
    <header id="diamond-header">
      <Navbar expand="sm" className="align-items-center">
        <Navbar.Brand href="/">
          <img src={Logo} alt="Diadmon Stay" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-menu" />
        <Navbar.Collapse id="navbar-menu">
          <Nav>
            <Nav.Item>
              <NavLink exact activeClassName="active" to="/register" className="nav-link">Đăng ký</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink exact activeClassName="active" to="/login" className="nav-link">Đăng nhập</NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
