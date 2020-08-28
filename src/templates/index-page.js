import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import theme from "../styles/theme";

import Button from '../components/Button';

import styled from "styled-components";

const StyledIndexPage = styled.div`
  margin-top: 80px;
  background-color: white;
`;

const StyledHeading = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-family: ${theme.fonts.IBMPlexSansLight};
  font-size: 4rem;
  max-width: 70%;
`;


export const IndexPageTemplate = ({
  title,
  image,
  heading,
  slogan,
  location,
  date,
  mainpitch,
  description,
  intro,
}) => (
    <StyledIndexPage>
      <StyledHeading>{heading}</StyledHeading>
      <h2>{slogan}</h2>
      <h3>{location.toUpperCase()} | {date.toUpperCase()}</h3>
      <Button>HELLO</Button>
      <Button>HELLO</Button>

      <h4>{mainpitch.title}</h4>
      <p>{mainpitch.description}</p>
    </StyledIndexPage>
    // <div>
    //   <div
    //     className="full-width-image margin-top-0"
    //     style={{
    //       backgroundImage: `url(${
    //         !!image.childImageSharp ? image.childImageSharp.fluid.src : image
    //       })`,
    //       backgroundPosition: `top left`,
    //       backgroundAttachment: `fixed`,
    //     }}
    //   >
    //     <div
    //       style={{
    //         display: 'flex',
    //         height: '150px',
    //         lineHeight: '1',
    //         justifyContent: 'space-around',
    //         alignItems: 'left',
    //         flexDirection: 'column',
    //       }}
    //     >
    //       <h1
    //         className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
    //         style={{
    //           boxShadow:
    //             'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
    //           backgroundColor: 'rgb(255, 68, 0)',
    //           color: 'white',
    //           lineHeight: '1',
    //           padding: '0.25em',
    //         }}
    //       >
    //         {title}
    //       </h1>
    //       <h3
    //         className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
    //         style={{
    //           boxShadow:
    //             'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
    //           backgroundColor: 'rgb(255, 68, 0)',
    //           color: 'white',
    //           lineHeight: '1',
    //           padding: '0.25em',
    //         }}
    //       >
    //         {subheading}
    //       </h3>
    //     </div>
    //   </div>
    //   <section className="section section--gradient">
    //     <div className="container">
    //       <div className="section">
    //         <div className="columns">
    //           <div className="column is-10 is-offset-1">
    //             <div className="content">
    //               <div className="content">
    //                 <div className="tile">
    //                   <h1 className="title">{mainpitch.title}</h1>
    //                 </div>
    //                 <div className="tile">
    //                   <h3 className="subtitle">{mainpitch.description}</h3>
    //                 </div>
    //               </div>
    //               <div className="columns">
    //                 <div className="column is-12">
    //                   <h3 className="has-text-weight-semibold is-size-2">
    //                     {heading}
    //                   </h3>
    //                   <p>{description}</p>
    //                 </div>
    //               </div>
    //               <Features gridItems={intro.blurbs} />
    //               <div className="columns">
    //                 <div className="column is-12 has-text-centered">
    //                   <Link className="btn" to="/products">
    //                     See all products
    //                   </Link>
    //                 </div>
    //               </div>
    //               <div className="column is-12">
    //                 <h3 className="has-text-weight-semibold is-size-2">
    //                   Latest stories
    //                 </h3>

    //                 <div className="column is-12 has-text-centered">
    //                   <Link className="btn" to="/blog">
    //                     Read more
    //                   </Link>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  slogan: PropTypes.string,
  location: PropTypes.string,
  date: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        image={frontmatter.image}
        heading={frontmatter.heading}
        slogan={frontmatter.slogan}
        location={frontmatter.location}
        date={frontmatter.date}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image
        heading
        slogan
        location
        date
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            text
          }
          heading
          description
        }
      }
    }
  }
`;
