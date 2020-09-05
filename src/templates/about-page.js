import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import styled from "styled-components";

import Layout from "../components/Layout";
import { ourTeam } from "../config";

const StyledAboutPage = styled.div`
padding: 2em;

  margin-top: 80px;
  background: rgb(255,255,255);
background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(26,169,203,1) 100%);
`;

const StyledTextSection = styled.section`
background: rgb(255,255,255);
border-radius: 10px;

padding: 2em;
filter: drop-shadow(5px 5px 0px #1a4fcb);
margin-bottom: 2em;

`;
const StyledTeamMember = styled.section`
width: 20vw;
padding: 1em;
float: left;
background: rgb(255,255,255);
margin: 1em;
border-radius: 10px;
filter: drop-shadow(5px 5px 0px #1a4fcb);
`;

const StyledTeamTitle = styled.section`
margin: 1em 0em 1em 0em;
width: 10vw;
padding: 1em;
float: left;
border-radius: 10px;
color: white;
font-weight: bolder;
background: linear-gradient(29deg, rgba(26,79,203,1) 38%, rgba(26,169,203,1) 100%);
`;

const StyledTeam = styled.section`
width: 100%;
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
          <StyledTeam>
            <StyledTeamTitle style={{transform: "rotate(180deg)"}}> 
              <div style={{transform: "rotate(90deg)"}}>
            <h2 style={{fontSize: "3em", marginBottom: "0px"}}>{team.header}</h2>
      
          </div>
            </StyledTeamTitle>
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
              <h1>{title}</h1>
      <StyledTextSection>
      <h2>{slogan}</h2>
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

