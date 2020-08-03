import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import styled from "styled-components";
import theme from "../styles/theme";

import { navLinks, socialMedia } from "../config";
import LogoLight from "../img/logo-main-light.png";

const StyledNav = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 70px;
  padding: 0 10%;
  background-color: lightblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledContent = styled.div``;

const StyledLogo = styled.img`
  height: 50px;
`;

const StyledNavLink = styled(Link)`
  /* font-family: ${theme.fonts.IBMPlexMono}; */
  padding: 10px;
`;

const StyledNavLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const NavLinks = () => {
  return (
    <StyledNavLinks>
      {navLinks.map((item) => (
        <StyledNavLink to={item.url}>{item.name.toUpperCase()}</StyledNavLink>
      ))}
    </StyledNavLinks>
  );
};

const Navbar = () => {
  return (
    <StyledNav>
      <Link to="/">
        <StyledLogo src={LogoLight} alt="logo" />
      </Link>
      <NavLinks />
    </StyledNav>
  );
};

export default Navbar;
