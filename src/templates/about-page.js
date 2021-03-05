import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

import "bootstrap/dist/css/bootstrap.min.css";


import Layout from "../components/Layout";
import PersonCard from "../components/PersonCard";

import media from "../styles/media";
import theme from "../styles/theme";

const StyledAboutPage = styled.div`
  margin: 0 auto;
  /* max-width: 80%; */
  padding-top: 10vh;
  background: rgb(255, 255, 255);

  ${media.phone`
    padding-top: 10vh;
    /* max-width: 95%; */
  `}
`;

const StyledTextSection = styled.section`
  background: rgb(255, 255, 255);
  border-radius: 10px;

  padding: 2em;
  padding-bottom: 0;
  margin-bottom: 2em;
`;

const StyledOurTeam = styled.section`
  width: 100vw;
  margin: 0 auto;
  display: flex;
  flex-flow: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 40px;

  ${media.phone`
    flex-direction: column;
  `}
`;

const Header = styled.section`
  background-image: url("/img/speaker-bg.svg");
  background-size: contain;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: 50% 20%;
  width: 100vw;
  margin: 30px 0;
  height: 250px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: ${theme.fonts.IBMPlexSansMedium};

  & * {
    max-width: 90%;
  }

  & > h1 {
    font-size: 2.5rem;
  }

  & > h2 {
    margin-top: 1rem;
    font-size: 1rem;
  }
`;

const OurTeam = ({ data }) => {
  const ourTeam = [
    {
      first: "Berkeley",
      last: "Wilson",
      title: "Co-Chair",
      work: "Mechanical Engineering '21 @ Queens",
      image: data.berkeley.childImageSharp.fluid,
      socials: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/j-berkeley-wilson-queensu/",
        },
      ],
    },
    {
      first: "Max",
      last: "Bennett",
      title: "Co-Chair",
      work: "Applied Mathematics '22 @ Queens",
      image: data.max.childImageSharp.fluid,
      socials: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/max-bennett-881951172/",
        },
      ],
    },
    {
      first: "Ellie",
      last: "Mehltretter",
      title: "Delegates Coordinator",
      work: "Mathematics '21 @ Queens",
      image: data.ellie.childImageSharp.fluid,
      socials: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/gabrielle-mehltretter-069987170/",
        },
      ],
    },
    {
      first: "Jack",
      last: "Perry",
      title: "Delegates Coordinator",
      work: "Commerce '22 @ Queens",
      image: data.jackP.childImageSharp.fluid,
      socials: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/jack-p-b40941129/",
        },
      ],
    },
    {
      first: "Catherine",
      last: "Wu",
      title: "Logistics Manager",
      work: "Biomedical Computation '22 @ Queens",
      image: data.catherine.childImageSharp.fluid,
      socials: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/catherinewu-/",
        },
      ],
    },
    {
      first: "Jack",
      last: "Grebenc",
      title: "Logistics Coordinator",
      work: "Mathematics & Computing '21 @ Queens",
      image: data.jackG.childImageSharp.fluid,
      socials: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/jack-grebenc-45b636174/",
        },
      ],
    },
    {
      first: "Will",
      last: "Stewart",
      title: "Logistics Coordinator",
      work: "Commerce '22 @ Queens",
      image: data.will.childImageSharp.fluid,
      socials: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/willjgstewart/",
        },
      ],
    },
    {
      first: "Parker",
      last: "Rowe",
      title: "Marketing & Web Development",
      work: "Computer Engineering '22 @ Queens",
      image: data.parker.childImageSharp.fluid,
      socials: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/parker-a-rowe/",
        },
        {
          name: "Website",
          url: "https://prowe.ca/",
        },
      ],
    },
    {
      first: "Katie",
      last: "Lu",
      title: "Marketing & Graphic Design",
      work: "Computing & The Creative Arts '21 @ Queens",
      image: data.katie.childImageSharp.fluid,
      socials: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/katie-lu-0244b8170/",
        },
      ],
    },
  ];

  return (
    <StyledOurTeam>
      <Header>
        <h1>Our Team</h1>
        <h2>Meet our hard-working team!</h2>
      </Header>
      {ourTeam.map((member) => (
        <PersonCard person={member} />
      ))}
    </StyledOurTeam>
  );
};

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <Helmet title="About" />
      <StyledAboutPage>
        <StyledTextSection>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </StyledTextSection>
        <OurTeam data={data} />
      </StyledAboutPage>
    </Layout>
  );
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
    berkeley: file(relativePath: { eq: "team/berkeley-wilson.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    max: file(relativePath: { eq: "team/max-bennett.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jackP: file(relativePath: { eq: "team/jack-perry.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jackG: file(relativePath: { eq: "team/jack-grebenc.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    catherine: file(relativePath: { eq: "team/catherine-wu.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ellie: file(relativePath: { eq: "team/ellie-mehltretter.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    katie: file(relativePath: { eq: "team/katie-lu.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    will: file(relativePath: { eq: "team/will-stewart.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    parker: file(relativePath: { eq: "team/parker-rowe.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
