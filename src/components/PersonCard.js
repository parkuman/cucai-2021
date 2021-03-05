import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

import Socials from "./Socials";

import media from "../styles/media";
import theme from "../styles/theme";

const StyledPersonCard = styled.div`
  background: #f2f2f2;
  -webkit-box-shadow: 8px 8px 13px -5px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 8px 8px 13px -5px rgba(0, 0, 0, 0.24);
  box-shadow: 8px 8px 13px -5px rgba(0, 0, 0, 0.24);
  border-radius: 15px;
  margin: 10px;
  padding: 20px;
  height: 280px;
  width: 450px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: ${theme.transition};

  &:hover {
    transform: translateY(-5px);
  }

  ${media.phone`
    margin: 10px 0;
    width: 95vw;
    max-width: 400px;
  `}
`;

const PersonImg = styled.div`
  max-width: 45%;
  width: 45%;
  max-height: 270px;
`;

const Text = styled.div`
  font-family: ${theme.fonts.IBMPlexSansLight};
  max-width: 46%;
  width: 46%;
`;

const Name = styled.h2`
  font-size: 1.5rem;
  display: inline-block;
  &.medium {
    font-family: ${theme.fonts.IBMPlexSansMedium};
  }
`;

const Title = styled.h3`
  font-size: 1.2rem;
  font-style: italic;
`;

const Work = styled.h4`
  font-size: 1.2rem;
`;

const Role = styled.h5`
  font-size: 0.9rem;
  font-weight: bold;
`;

const PersonCard = ({ person }) => {
  return (
    <StyledPersonCard person={person}>
      <PersonImg>
        <Img fluid={person.image} />
      </PersonImg>
      <Text>
        <Role>{person.role}</Role>
        <Name>
          {person.first} <Name className="medium"> {person.last}</Name>
        </Name>
        <Title>{person.title}</Title>
        <Work>{person.work}</Work>
        <Socials size={"15px"} direction="row" list={person.socials} />
      </Text>
    </StyledPersonCard>
  );
};

export default PersonCard;
