import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/Layout";

import media from "../styles/media";
import theme from "../styles/theme";

const StyledSpeakersPage = styled.div`
  margin: 0 auto;
  padding-top: 10vh;
  background: #ffffff;
  /* background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(26,169,203,1) 100%); */

  ${media.phone`
    padding: 0.5em;
    padding-top: 10vh;
  `}
`;

const Header = styled.section`
  width: 100vw;
  height: 250px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${theme.fonts.IBMPlexSansMedium};

  & > h1 {
    font-size: 3rem;
  }
`;

const Speakers = styled.section`
  width: 100vw;
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 40px;
`;

const StyledSpeakerCard = styled.div`
  background: #f2f2f2;
  -webkit-box-shadow: 8px 8px 13px -5px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 8px 8px 13px -5px rgba(0, 0, 0, 0.24);
  box-shadow: 8px 8px 13px -5px rgba(0, 0, 0, 0.24);
  border-radius: 15px;
  margin: 0 10px;
  padding: 20px;
  height: 280px;
  width: 400px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: ${theme.transition};

  &:hover {
    transform: translateY(-5px);
  }
`;

const SpeakerImg = styled.div`
  max-width: 45%;
  width: 45%;
`;

const SpeakerText = styled.div`
  font-family: ${theme.fonts.IBMPlexSansLight};
  max-width: 46%;
  width: 46%;
`;

const Name = styled.h2`
  font-size: 1.5rem;
  display: inline-block;
  &.medium {
    font-family: ${theme.fonts.IBMPlexSansMedium};
  }
`;

const Title = styled.h3`
  font-size: 1.2rem;
  font-style: italic;
`;

const Work = styled.h4`
  font-size: 1.2rem;
`;

const SpeakersPage = ({ data }) => {
  const speakers = [
    // {
    //   first: "Geoffrey",
    //   last: "Hinton",
    //   title: "Godfather of AI",
    //   work: "UofT, Google, Vector Institute",
    //   image: data.geoffH.childImageSharp.fluid,
    // },
    // {
    //   first: "Dan",
    //   last: "Desjardins",
    //   title: "CEO",
    //   work: "Distributed Compute Labs",
    //   image: data.danD.childImageSharp.fluid,
    // },
    // {
    //   first: "Stuart",
    //   last: "Lombard",
    //   title: "Founder and CEO",
    //   work: "Ecobee",
    //   image: data.stuartL.childImageSharp.fluid,
    // },
    {
      first: "Shivon",
      last: "Zilis",
      title: "Project Director, Office of the CEO",
      work: "Neuralink",
      image: data.shivonZ.childImageSharp.fluid,
    },
    {
      first: "Ron",
      last: "Bodkin",
      title: "VP of AI Engineering",
      work: "Vector Institute",
      image: data.ronB.childImageSharp.fluid,
    },
    {
      first: "Laurence",
      last: "Moroney",
      title: "Lead Artificial Intelligence Advocate",
      work: "Google",
      image: data.laurenceM.childImageSharp.fluid,
    },
    {
      first: "Kay",
      last: "Firth-Butterfield",
      title: "Head of AI & Machine Learning",
      work: "World Economic Forum",
      image: data.kayFB.childImageSharp.fluid,
    },
  ];

  return (
    <Layout>
      <StyledSpeakersPage>
        <Header>
          <h1>{data.markdownRemark.frontmatter.title}</h1>
        </Header>
        <Speakers>
          {speakers.map((speaker, i) => (
            <StyledSpeakerCard key={i}>
              <SpeakerImg>
                <Img fluid={speaker.image} />
              </SpeakerImg>
              <SpeakerText>
                <Name>
                  {speaker.first}{" "}
                  <Name className="medium"> {speaker.last}</Name>
                </Name>
                <Title>{speaker.title}</Title>
                <Work>{speaker.work}</Work>
              </SpeakerText>
            </StyledSpeakerCard>
          ))}
        </Speakers>
      </StyledSpeakersPage>
    </Layout>
  );
};

export default SpeakersPage;

export const pageQuery = graphql`
  query SpeakersPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "speakers-page" } }) {
      html
      frontmatter {
        title
      }
    }
    shivonZ: file(relativePath: { eq: "shivonZ.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ronB: file(relativePath: { eq: "ronB.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    laurenceM: file(relativePath: { eq: "laurenceM.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    kayFB: file(relativePath: { eq: "kayFB.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
