import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Row, Col } from 'react-bootstrap/'

import styled from "styled-components";
import media from "../styles/media";

import Layout from "../components/Layout";
import { ourTeam } from "../config";

const StyledAboutPage = styled.div`
padding: 2em;

  background: rgb(255,255,255);
background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(26,169,203,1) 100%);

  ${media.phone`
    padding: 0.5em;
  `}
`;

const StyledTextSection = styled.section`
background: rgb(255,255,255);
border-radius: 10px;

padding: 2em;
filter: drop-shadow(5px 5px 0px #1a4fcb);
margin-bottom: 2em;

`;
const StyledTeamMember = styled(Col)`
padding: 1em;
float: left;
background: rgb(255,255,255);
margin: 1em;
border-radius: 10px;
filter: drop-shadow(5px 5px 0px #1a4fcb);
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
flex-direction: row;

${media.phone`
  flex-direction: column;
`}
`;

const TeamMember = ({ pic, name, position, program }) => {
  return (
    <>
      <img src={require(`../img/team/${pic}`)} alt={`${name}'s headshot'`} />

      <h3>
        {name.split(' ')[0]} <b>{name.split(' ')[1]}</b>
      </h3>
      <p>
        {position}
        <br />
        <i>{program}</i>
      </p>
    </>
  );
}

const OurTeam = ({ data }) => {
  return (
    ourTeam.map(team => {
      return (
        <>
          <div>
            <StyledTeamTitle>
                <h2 style={{ marginBottom: "0px" }}>{team.header}</h2>

            </StyledTeamTitle>
            <StyledTeam>

              {
                team.members.map(member =>
                  <StyledTeamMember>
                    <TeamMember
                      pic={member.pic}
                      name={member.name}
                      position={member.position}
                      program={member.program} />
                  </StyledTeamMember>
                )
              }
            </StyledTeam>
          </div>
        </>
      );
    })
  );
}
//<p>{team.email}</p>
export const AboutPageTemplate = ({
  title,
  slogan,
  html
}) => (
  <StyledAboutPage>
    <h1 style={{ color: "white" }}>{title}</h1>
    <StyledTextSection>
      <h2><em>{slogan}</em></h2>
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

