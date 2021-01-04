import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import styled from "styled-components";
import media from "../styles/media";

import Layout from "../components/Layout";

const StyledAboutPage = styled.div`
  padding: 3em;
  margin-top: 60px;
  background: rgb(255,255,255);

  ${media.phone`
    padding: 0.5em;
  `}
`;

const StyledTextSection = styled.section`
background: rgb(255,255,255);
border-radius: 10px;

padding: 2em;
margin-bottom: 2em;

`;


export const TasterPageTemplate = ({
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

TasterPageTemplate.propTypes = {
  title: PropTypes.string,
  slogan: PropTypes.string,
};

const TasterPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <Layout>
      <TasterPageTemplate
        title={frontmatter.title}
        slogan={frontmatter.slogan}
        html={html}
      />
    </Layout>
  );
};

TasterPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default TasterPage;

export const pageQuery = graphql`
  query TasterPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "taster-page" } }) {
      html
      frontmatter {
        title
        slogan
      }
    }
  }
`;

