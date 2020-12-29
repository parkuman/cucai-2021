import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Row, Col } from "react-bootstrap/";

import styled from "styled-components";
import media from "../styles/media";

import Layout from "../components/Layout";
import { ourTeam } from "../config";

const StyledAboutPage = styled.div`
  margin: 0 auto;
  padding: 2em;
  padding-top: 10vh;
  background: rgb(255, 255, 255);
  /* background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(26,169,203,1) 100%); */

  ${media.phone`
    padding: 0.5em;
  `}
`;

const StyledTextSection = styled.section`
  background: rgb(255, 255, 255);
  border-radius: 10px;

  padding: 2em;
  -webkit-box-shadow: 10px 10px 34px -9px rgba(0, 0, 0, 0.65);
  -moz-box-shadow: 10px 10px 34px -9px rgba(0, 0, 0, 0.65);
  box-shadow: 10px 10px 34px -9px rgba(0, 0, 0, 0.65);
  margin-bottom: 2em;
`;
const StyledTeamMember = styled.div`
  padding: 1em;
  float: left;
  background: rgb(255, 255, 255);
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

const StyledTeamTitle = styled(Col)`
  margin: 1em 0em 0em 0em;

  float: left;
  border-radius: 10px;
  color: var(--dark-blue);
`;

const StyledTeam = styled(Row)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.phone`
  flex-direction: column;
`}
`;

const StyledOurTeam = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TeamMember = ({ pic, name, position, program }) => {
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
    </>
  );
};

const OurTeam = ({ data }) => {
  return ourTeam.map((team) => {
    return (
      <StyledOurTeam>
        <div>
          <StyledTeamTitle>
            <h2 style={{ marginBottom: "0px" }}>{team.header}</h2>
          </StyledTeamTitle>
          <StyledTeam>
            {team.members.map((member) => (
              <StyledTeamMember>
                <TeamMember
                  pic={member.pic}
                  name={member.name}
                  position={member.position}
                  program={member.program}
                />
              </StyledTeamMember>
            ))}
          </StyledTeam>
        </div>
      </StyledOurTeam>
    );
  });
};
//<p>{team.email}</p>
export const AboutPageTemplate = ({ title, slogan, html }) => (
  <StyledAboutPage>
    <StyledTextSection>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </StyledTextSection>
    <OurTeam />
  </StyledAboutPage>
);

AboutPageTemplate.propTypes = {
  title: PropTypes.string,
  slogan: PropTypes.string,
};

const AboutPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <Layout>
      <AboutPageTemplate
        title={frontmatter.title}
        slogan={frontmatter.slogan}
        html={html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
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
