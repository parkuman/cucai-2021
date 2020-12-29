import React, { useState, useEffect, useRef } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import theme from "../styles/theme";
import media from "../styles/media";

import { navLinks } from "../config";
import LogoMain from "../img/Logo main.svg";

import Burger from "./Burger";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 120px;
  z-index: 100000000;
  background: ${({ scrollDirection }) =>
    scrollDirection === "none" ? "none" : "white"};
  height: ${({ scrollDirection }) =>
    scrollDirection === "none" ? "100px" : "70px"};
  box-shadow: ${({ scrollDirection }) =>
    scrollDirection === "up" ? `0 10px 30px -10px rgba(0, 0, 0, 0.3)` : "none"};
  transform: translateY(
    ${({ scrollDirection }) => (scrollDirection === "down" ? "-70px" : "0px")}
  );
  transition: ${theme.transition};
  font-family: ${theme.fonts.IBMPlexMono};
  ${media.phone`
        padding: 10px;
    `}
`;

const StyledLogo = styled.img`
  height: 40px;
`;

const StyledNavItems = styled.ul`
  font-family: ${theme.fonts.IBMPlexMono};
  font-size: 1.1rem;
  padding: 0;
  margin: 0;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-evenly;
  list-style: none;
  & li {
    display: inline;
    padding: 0 10px;
    &:last-of-type {
      margin-right: 10px;
    }
    ${media.tablet`
            padding: 30px 0;
        `}
  }
  ${media.tablet`
        font-size: 1.5rem;
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        width: 50vw;
        padding: 0 10px;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        background-color: white;
        box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.3);
        transition: ${theme.transition};
        transform: ${({ open }) =>
          open ? "translateX(0)" : "translateX(100%)"};
    `}
  ${media.phone`
        width: 90vw;
    `}
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  position: relative;
  &:hover {
    text-decoration: none;
  }
  &:after {
    background: ${theme.colors.darkBlue};
    bottom: 0;
    left: 0;
    opacity: 0;
    height: 3px;
    position: absolute;
    content: "";
    transform: translateY(3px);
    transition: opacity 0.21s ease, transform 0.21s ease;
    width: 100%;
  }
  &:hover::after {
    opacity: 1;
    transform: translateY(0);
  }
`;

const NavItems = ({ open, setOpen }) => {
  return (
    <StyledNavItems open={open}>
      {navLinks.map((item, i) => (
        <li key={i}>
          <StyledLink onClick={() => setOpen(false)} to={item.url}>
            {item.name.toUpperCase()}
          </StyledLink>
        </li>
      ))}
    </StyledNavItems>
  );
};

const Nav = () => {
  const [open, setOpen] = useState(false);

  const [scrollDirection, setScrollDirection] = useState("none");

  const [prevScrollPosition, setPrevScrollPosition] = useState(0);

  useEffect(() => {
    setTimeout(
      () => window.addEventListener("scroll", () => handleScroll()),
      100
    );

    return () => window.removeEventListener("scroll", () => handleScroll());
  }, []);

  const handleScroll = () => {
    const currentScrollPosition = window.scrollY;
    const diff = prevScrollPosition - currentScrollPosition;

    if (diff > 0) {
      setScrollDirection("down");
    } else if (diff < 0) {
      setScrollDirection("up");
    } else {
      setScrollDirection("none");
    }
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  // https://codesandbox.io/s/outside-alerter-hooks-lmr2y?module=/src/OutsideAlerter.js&file=/src/OutsideAlerter.js:680-899
  // for closing the menu when user clicks outside of the nav
  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpen(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  return (
    <StyledNav ref={wrapperRef} scrollDirection={scrollDirection}>
      <Link to="/">
        <StyledLogo src={LogoMain} alt="cucai logo" />
      </Link>
      <Burger open={open} setOpen={setOpen} />
      <NavItems open={open} setOpen={setOpen} />
    </StyledNav>
  );
};

export default Nav;
