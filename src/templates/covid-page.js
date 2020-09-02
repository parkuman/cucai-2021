import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import styled from "styled-components";

import Layout from "../components/Layout";
import { ourTeam } from "../config";

const StyledAboutPage = styled.div`
  margin-top: 80px;
  padding: 3em;
  background: rgb(255,255,255);
background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(26,169,203,1) 50%);
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


export const CovidPageTemplate = ({
  title,
  slogan,
  html
}) => (
    <StyledAboutPage>
      <h1>{title}</h1>
      <h2>{slogan}</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      
    </StyledAboutPage>
  );

CovidPageTemplate.propTypes = {
  title: PropTypes.string,
  slogan: PropTypes.string,
};

const CovidPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <Layout>
      <CovidPageTemplate
        title={frontmatter.title}
        slogan={frontmatter.slogan}
        html={html}
      />
    </Layout>
  );
};

CovidPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default CovidPage;

export const pageQuery = graphql`
  query CovidPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "covid-page" } }) {
      html
      frontmatter {
        title
        slogan
      }
    }
  }
`;

