import React, { useState, useEffect, useRef } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { Link } from "gatsby";
import styled from "styled-components";

import theme from "../styles/theme";
import media from "../styles/media";

import { navLinks, studentGroups } from "../config";
import LogoSmall from "../img/logoSmall.svg";

import Burger from "./Burger";
import Socials from "./Socials";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 10px 120px;
  z-index: 100000000;
  background: ${({ scrollDirection }) =>
    scrollDirection === "none" ? "none" : "white"};
  height: ${({ scrollDirection }) =>
    scrollDirection === "none" ? "100px" : "60px"};
  box-shadow: ${({ scrollDirection }) =>
    scrollDirection === "up" ? `0 10px 30px -10px rgba(0, 0, 0, 0.3)` : "none"};
  transform: translateY(
    ${({ scrollDirection }) => (scrollDirection === "down" ? "-60px" : "0px")}
  );
  transition: ${theme.transition};
  ${media.phone`
        padding: 10px 30px;
    `}
`;

const StyledLogo = styled.img`
  height: 30px;
`;

const StyledNavItems = styled.ul`
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
    ${media.desktop`
            padding: 5px 0;
        `}
  }
  ${media.desktop`
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        width: 50vw;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        background-color: white;
        /* box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.3); */
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
    font-weight: bold;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 30px;
  border-radius: 2px;
  background: ${theme.colors.darkBlue};
  margin: 0 15px;

  ${media.desktop`
    display: none;
  `}
`;

const StyledDropdown = styled(DropdownButton)`
  #dropdown-custom {
    background: none;
    border: none;
    color: #000000;
    font-size: 1.1rem;
  }
`;

const StudentGroups = () => {
  return (
    <StyledDropdown id="dropdown-custom" title="Student Groups">
      {studentGroups.map((group, i) => (
        <Dropdown.Item
          as="a"
          key={i}
          target="_blank"
          rel="noreferrer"
          href={group.link}
        >
          {group.name}
        </Dropdown.Item>
      ))}
    </StyledDropdown>
  );
};

const NavItems = ({ open, setOpen }) => {
  return (
    <StyledNavItems open={open}>
      {navLinks.map((item, i) => (
        <li key={i}>
          <StyledLink onClick={() => setOpen(false)} to={item.url}>
            {item.name}
          </StyledLink>
        </li>
      ))}
      <StudentGroups />
      <Divider />
      <Socials size="20px" direction="row" />
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
        <StyledLogo src={LogoSmall} alt="cucai logo" />
      </Link>
      <Burger open={open} setOpen={setOpen} />
      <NavItems open={open} setOpen={setOpen} />
    </StyledNav>
  );
};

export default Nav;
