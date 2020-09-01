import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import City1 from "../img/parallaxSkyline/1.svg"
import City2 from "../img/parallaxSkyline/2.svg"
import City3 from "../img/parallaxSkyline/3.svg"
import City4 from "../img/parallaxSkyline/4.svg"
import City5 from "../img/parallaxSkyline/5.svg"
import City6 from "../img/parallaxSkyline/6.svg"
import City7 from "../img/parallaxSkyline/7.svg"

import Layout from "../components/Layout";
import theme from "../styles/theme";

import Button from '../components/Button';

import styled from "styled-components";

const StyledIndexPage = styled.div`
`;

const StyledHero = styled.section`
  padding-top: 150px;
  background: radial-gradient(189.82% 100% at 50% 0%, rgba(26, 79, 203, 0.0001) 0%, rgba(29, 85, 205, 0.0459233) 0%, rgba(33, 93, 208, 0.0977712) 63.18%, #65DAFE 100%, #65DAFE 100%), linear-gradient(146.77deg, rgba(26, 169, 203, 0.25) -3.05%, rgba(17, 47, 66, 0.25) 90.39%, rgba(17, 47, 66, 0.25) 90.39%);
  max-width: 100vw;
  overflow: hidden;
`;

const StyledHeroContent = styled.div`
  margin: 0 auto;
  max-width: 80%;
`;

const StyledHeading = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-family: ${theme.fonts.IBMPlexSansLight};
  font-size: 4rem;
  max-width: 70%;
`;

const StyledSlogan = styled.h2`
  font-weight: normal;
  font-size: 2rem;
`;

const StyledInfo = styled.h3`
  font-weight: normal;
  font-size: 1.2rem;
  padding: 10px 0;
`;

const StyledParallaxImg = styled.img`
  left: 500px;
  width: 110vw;
`;


const ParallaxSkyline = () => (
  <>
    <Parallax y={[0, 0]}>
      <StyledParallaxImg src={City7} />
    </Parallax>
    <Parallax y={[-110,-120]}>
      <StyledParallaxImg src={City6} />
    </Parallax>
    <Parallax y={[-200, -220]}>
      <StyledParallaxImg src={City5} />
    </Parallax>
    <Parallax y={[-390, -420]}>
      <StyledParallaxImg src={City4} />
    </Parallax>
    <Parallax y={[-390, -420]}>
      <StyledParallaxImg src={City3} />
    </Parallax>
    <Parallax y={[0, 60]}>
      <StyledParallaxImg src={City2} />
    </Parallax>
    <Parallax y={[0, 70]}>
      <StyledParallaxImg src={City1} />
    </Parallax>
       
  </>
);

const Hero = ({
  heading,
  slogan,
  location,
  date,
  cta1,
  cta2
}) => (
    <StyledHero>
      <StyledHeroContent>
        <StyledHeading>{heading}</StyledHeading>
        <StyledSlogan>{slogan}</StyledSlogan>
        <StyledInfo>{location.toUpperCase()} | {date.toUpperCase()}</StyledInfo>
        <Button backgroundColour="white">{cta1}</Button>
        <Button borderStyle="solid" borderColour="#174461">{cta2}</Button>
      </StyledHeroContent>
      <ParallaxSkyline />
    </StyledHero>
  );



export const IndexPageTemplate = ({
  title,
  heading,
  slogan,
  location,
  date,
  cta1,
  cta2,
  mainpitch,
  description,
  intro,
}) => (
    <StyledIndexPage>
      <Hero heading={heading} slogan={slogan} location={location} date={date} cta1={cta1} cta2={cta2} />

      <div style={{ height: "10000px" }}></div>
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
  // image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  slogan: PropTypes.string,
  location: PropTypes.string,
  date: PropTypes.string,
  cta1: PropTypes.string,
  cta2: PropTypes.string,
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
        // image={frontmatter.image}
        heading={frontmatter.heading}
        slogan={frontmatter.slogan}
        location={frontmatter.location}
        date={frontmatter.date}
        cta1={frontmatter.cta1}
        cta2={frontmatter.cta2}
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
        heading
        slogan
        location
        date
        cta1
        cta2
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
