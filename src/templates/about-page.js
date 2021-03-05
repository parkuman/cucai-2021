import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";

import "bootstrap/dist/css/bootstrap.min.css";

import styled from "styled-components";

import Layout from "../components/Layout";

import { ourTeam } from "../config";
import media from "../styles/media";
import theme from "../styles/theme";

import LinkedInIcon from "../img/social/linkedin.js";

const SocialLink = styled(Link)`
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

const StyledAboutPage = styled.div`
  margin: 0 auto;
  padding: 2em;
  padding-top: 10vh;
  background: rgb(255, 255, 255);
  /* background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(26,169,203,1) 100%); */

  ${media.phone`
    padding: 0.5em;
    padding-top: 10vh;
  `}
`;

const StyledTextSection = styled.section`
  background: rgb(255, 255, 255);
  border-radius: 10px;

  padding: 2em;
  padding-bottom: 0;
  /* -webkit-box-shadow: 10px 10px 34px -9px rgba(0, 0, 0, 0.65);
  -moz-box-shadow: 10px 10px 34px -9px rgba(0, 0, 0, 0.65);
  box-shadow: 10px 10px 34px -9px rgba(0, 0, 0, 0.65); */
  margin-bottom: 2em;
`;
const StyledTeamMember = styled.div`
  display: flex;
  padding: 1em;
  background: rgb(255, 255, 255);
  height: 450px;
  margin: 1em;
  border-radius: 10px;
  -webkit-box-shadow: 10px 10px 34px -9px rgba(0, 0, 0, 0.65);
  -moz-box-shadow: 10px 10px 34px -9px rgba(0, 0, 0, 0.65);
  box-shadow: 10px 10px 34px -9px rgba(0, 0, 0, 0.65);

  display: flex;
  flex-direction: column;
  align-items: center;

  & h3 {
    margin-top: 10px;
  }

  & p {
    margin: 0;
  }
`;

const StyledOurTeam = styled.div`
  display: flex;
  flex-flow: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const TeamMember = ({ pic, name, position, program, linkedin }) => {
  return (
    <>
      <img src={require(`../img/team/${pic}`)} alt={`${name}'s headshot'`} />

      <h3>
        {name.split(" ")[0]} <b>{name.split(" ")[1]}</b>
      </h3>
      <p>{position}</p>
      <p>
        <i>{program}</i>
      </p>
      <SocialLink to={linkedin}>
        <LinkedInIcon size="25px" />
      </SocialLink>
    </>
  );
};

const OurTeam = ({ data }) => {
  return (
    <StyledOurTeam>
      {ourTeam.map((member) => (
        <StyledTeamMember>
          <TeamMember
            pic={member.pic}
            name={member.name}
            position={member.position}
            program={member.program}
            linkedin={member.linkedin}
          />
        </StyledTeamMember>
      ))}
    </StyledOurTeam>
  );
};

const AboutPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <Layout>
      <Helmet title="About" />
      <StyledAboutPage>
        <StyledTextSection>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </StyledTextSection>
        <OurTeam />
      </StyledAboutPage>
    </Layout>
  );
};

export default AboutPage;

export const pageQuery = graphql`
  query AboutPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      html
      frontmatter {
        title
        slogan
      }
    }
  }
`;
