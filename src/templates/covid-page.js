import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import styled from "styled-components";
import media from "../styles/media";

import Layout from "../components/Layout";
import { ourTeam } from "../config";

const StyledAboutPage = styled.div`
  padding: 3em;
  background: rgb(255,255,255);
background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(26,169,203,1) 50%);

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


export const CovidPageTemplate = ({
  title,
  slogan,
  html
}) => (
    <StyledAboutPage>
      <StyledTextSection>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      </StyledTextSection>
      
      
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

