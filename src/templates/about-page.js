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


const TeamMember = ({ pic, name, position, program }) => {
  return (
    <>
      <img src={require(`../img/team/${pic}`)} alt={`${name}'s headshot'`} />
      <p>
        {name.split(' ')[0]} <b>{name.split(' ')[1]}</b>
        <br />
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
          <h2>{team.header}</h2>
          <p>{team.email}</p>
          {
            team.members.map(member =>
              <TeamMember
                pic={member.pic}
                name={member.name}
                position={member.position}
                program={member.program} />
            )
          }
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

