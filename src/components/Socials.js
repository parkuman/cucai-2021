import React from "react";
import styled from "styled-components";

import theme from "../styles/theme";
import { socialMedia } from "../config";

import FacebookIcon from "../img/social/facebook.js";
import LinkedInIcon from "../img/social/linkedin.js";
import InstagramIcon from "../img/social/instagram.js";
import YoutubeIcon from "../img/social/youtube.js";
import GlobeIcon from "../img/social/globe.js";

const SocialLink = styled.a`
  padding: 5px 10px;

  & svg {
    transition: ${theme.transition};
    fill: #000000;
  }

  &:hover {
    & svg {
      fill: var(--cucai-blue);
      /* transform: rotate(10deg) translateY(-3px); */
    }
  }
`;

const SocialsList = styled.div`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === "row" ? "row" : "column"};
  align-items: center;
  justify-content: flex-start;
`;

const Socials = ({ list, direction, size }) => {
  const listToMap = list ? list : socialMedia;
  return (
    <SocialsList direction={direction}>
      {listToMap.map((social) => {
        let image;
        if (social.name.includes("Facebook")) {
          image = <FacebookIcon size={size} />;
        } else if (social.name.includes("Instagram")) {
          image = <InstagramIcon size={size} />;
        } else if (social.name.includes("LinkedIn")) {
          image = <LinkedInIcon size={size} />;
        } else if (social.name.includes("Youtube")) {
          image = <YoutubeIcon size={size} />;
        } else {
          image = <GlobeIcon size={size} />;
        }

        return (
          <SocialLink target="_blank" rel="noreferrer" href={social.url}>
            {image}
          </SocialLink>
        );
      })}
    </SocialsList>
  );
};

export default Socials;
