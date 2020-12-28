import React from "react";
import { Link } from "gatsby";

import styled from "styled-components";
import theme from "../styles/theme";

import { navLinks } from "../config";
import LogoMain from "../img/Logo main.svg"
import {Nav, Navbar} from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css';

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
