import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import styled from "styled-components";

import Layout from "../components/Layout";
import { ourTeam } from "../config";

const StyledAboutPage = styled.div`
  margin-top: 80px;
  background: rgb(255,255,255);
background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(26,169,203,1) 100%);
`;

const StyledTeamMember = styled.section`
max-width: 33%;
padding: 3em;
float: left;
background: rgb(255,255,255);
margin: 3em;
border-radius: 3em;
`;

const StyledTeam = styled.section`
width: 100%;
margin: 3em;
display: flex;
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
        <h2>{team.header}</h2>
          <p>{team.email}</p>
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

export const AboutPageTemplate = ({
  title,
  slogan,
  html
}) => (
    <StyledAboutPage>
      <h1>{title}</h1>
      <h2>{slogan}</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
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

