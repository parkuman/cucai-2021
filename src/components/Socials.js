import React from "react";
import styled from "styled-components";

import theme from "../styles/theme";
import { socialMedia } from "../config";

import FacebookIcon from "../img/social/facebook.js";
import LinkedInIcon from "../img/social/linkedin.js";
import InstagramIcon from "../img/social/instagram.js";

const SocialLink = styled.a`
  padding: 5px 10px;

  & svg {
    transition: ${theme.transition};
  }

  &:hover {
    & svg {
      fill: var(--cucai-blue);
      transform: rotate(10deg) translateY(-3px);
    }
  }
`;

const SocialsList = styled.div`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === "row" ? "row" : "column"};
  align-items: center;
  justify-content: center;
`;

const Socials = ({ direction }) => (
  <SocialsList direction={direction}>
    {socialMedia.map((social) => {
      let image;
      if (social.name.includes("Facebook")) {
        image = <FacebookIcon size="25px" />;
      } else if (social.name.includes("Instagram")) {
        image = <InstagramIcon size="25px" />;
      } else if (social.name.includes("LinkedIn")) {
        image = <LinkedInIcon size="25px" />;
      } else {
        image = null;
      }

      return <SocialLink target="_blank" rel="noreferrer" href={social.url}>{image}</SocialLink>;
    })}
  </SocialsList>
);

export default Socials;
