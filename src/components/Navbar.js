import React from "react";
import { Link } from "gatsby";

import styled from "styled-components";
import theme from "../styles/theme";

import { navLinks } from "../config";
import LogoLight from "../img/logo-main-light.png";
import LogoMain from "../img/Logo main.svg"
import {Row, Col, Nav, Navbar} from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css';


const StyledNav = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 50px;
  padding: 0 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100000;
`;

const StyledLogo = styled.img`
  height: 40px;
`;

const StyledNavLink = styled(Link)`
  /* font-family: ${theme.fonts.IBMPlexMono}; */
  padding: 10px;
  color: #003C58;
`;

const NavLinks = () => {
  return (
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      {navLinks.map((item) => (
        <StyledNavLink to={item.url}>{item.name.toUpperCase()}</StyledNavLink>
      ))}
    </Nav>
    </Navbar.Collapse>
  );
};

const NavbarStyled = () => {
  return (
    <Navbar bg="light" sticky="top" expand="lg">
      <Navbar.Brand href="/">
      <StyledLogo
        alt="Logo"
        src={LogoMain}
        className="d-inline-block align-top"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <NavLinks/>
      </Navbar>
  );
};

export default NavbarStyled;
