import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'
import theme from '../styles/theme'

const StyledNav = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 70px;
  background-color: lightblue;
  display: flex;
`;

const StyledNavLink = styled.button`
  font-family: ${theme.fonts.IBMPlexMono};
`;

const Navbar = () => {
  return(
    <StyledNav>
      <p>navbar</p>
      <StyledNavLink>
        About
      </StyledNavLink>
    </StyledNav>
  );
}

export default Navbar
