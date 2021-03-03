import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "../components/Layout";
import Socials from "../components/Socials";

import media from "../styles/media";
import theme from "../styles/theme";

const StyledSpeakersPage = styled.div`
  margin: 0 auto;
  padding-top: 10vh;
  background: #ffffff;
  /* background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(26,169,203,1) 100%); */

  ${media.phone`
    padding-top: 10vh;
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

const Speakers = styled.section`
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

const StyledSpeakerCard = styled.div`
  background: #f2f2f2;
  -webkit-box-shadow: 8px 8px 13px -5px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 8px 8px 13px -5px rgba(0, 0, 0, 0.24);
  box-shadow: 8px 8px 13px -5px rgba(0, 0, 0, 0.24);
  border-radius: 15px;
  margin: 10px;
  padding: 20px;
  height: 280px;
  width: 450px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: ${theme.transition};

  &:hover {
    transform: translateY(-5px);
  }

  ${media.phone`
    margin: 10px 0;
    width: 95vw;
    max-width: 400px;
  `}
`;

const SpeakerImg = styled.div`
  max-width: 45%;
  width: 45%;
  max-height: 270px;
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

const Role = styled.h5`
  font-size: 0.9rem;
  font-weight: bold;
`;

const SpeakersPage = ({ data }) => {
  const speakers = [
    {
      role: "Speaker",
      first: "Shivon",
      last: "Zilis",
      title: "Project Director, Office of the CEO",
      work: "Neuralink",
      image: data.shivonZ.childImageSharp.fluid,
      socials: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/shivonzilis/",
        },
        {
          name: "Website",
          url: "http://www.shivonzilis.com/about",
        },
      ],
    },
    {
      role: "Speaker, Ethics in AI Panelist",
      first: "Ron",
      last: "Bodkin",
      title: "VP of AI Engineering",
      work: "Vector Institute",
      image: data.ronB.childImageSharp.fluid,
      socials: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/ronbodkin/",
        },
        {
          name: "Website",
          url: "https://vectorinstitute.ai/",
        },
      ],
    },
    {
      role: "Speaker",
      first: "Laurence",
      last: "Moroney",
      title: "Lead Artificial Intelligence Advocate",
      work: "Google",
      image: data.laurenceM.childImageSharp.fluid,
      socials: [
        {
          name: "LinkedIn",
          url: "https://linkedin.com/in/laurence-moroney",
        },
        {
          name: "Website",
          url: "http://www.laurencemoroney.com/",
        },
      ],
    },
    {
      role: "Speaker",
      first: "Mark",
      last: "Caine",
      title: "AI & Machine Learning Lead",
      work: "World Economic Forum",
      image: data.markCa.childImageSharp.fluid,
      socials: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/markeliotcaine/",
        },
        {
          name: "Website",
          url: "https://www.weforum.org/",
        },
      ],
    },
    {
      role: "Speaker, Pitch Comp. Judge",
      first: "David",
      last: "Hayes",
      title: "CEO & Founder",
      work: "AVO - Autonomous Vehicle Organization",
      image: data.davidH.childImageSharp.fluid,
      socials: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/david-k-hayes/",
        },
        {
          name: "Website",
          url: "https://www.avo-inc.ca/",
        },
      ],
    },
    {
      role: "Speaker",
      first: "Inmar",
      last: "Givoni",
      title: "Former Director of Engineering",
      work: "Uber ATG",
      image: data.inmarG.childImageSharp.fluid,
      socials: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/inmargivoni/",
        },
        {
          name: "Website",
          url: "https://www.inmarg.net/",
        },
      ],
    },
    {
      role: "Pitch Comp. Judge",
      first: "Dan",
      last: "Desjardins",
      title: "Founder & CEO",
      work: "Distributed Compute Labs",
      image: data.danD.childImageSharp.fluid,
      socials: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/dan-desjardins/",
        },
        {
          name: "Website",
          url: "https://distributed.computer/",
        },
      ],
    },
    {
      role: "Women in AI Panelist",
      first: "Caroline",
      last: "Lair",
      title: "Founder / Co-Founder",
      work: "The Good AI/Women in AI",
      image: data.carolineL.childImageSharp.fluid,
      socials: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/carolinelair/",
        },
      ],
    },
    {
      role: "Pitch Comp. Judge",
      first: "Emily",
      last: "Campbell",
      title: "Co-Founder & CGO",
      work: "Backr",
      image: data.emilyC.childImageSharp.fluid,
      socials: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/emily-campbell-31104910a/",
        },
        {
          name: "Website",
          url: "https://www.backr.ai/",
        },
      ],
    },
    {
      role: "Ethics in AI Panelist",
      first: "Valerie",
      last: "Morignat",
      title: "Founder & CEO",
      work: "Intelligent Story LLC",
      image: data.valerieM.childImageSharp.fluid,
      socials: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/valeriemorignat/",
        },
        {
          name: "Website",
          url: "http://www.valeriemorignat.net/index.html",
        },
      ],
    },
    {
      role: "Pitch Comp. Judge",
      first: "Shingai",
      last: "Manjengwa",
      title: "Director of Technical Education",
      work: "Vector Institute",
      image: data.shingaiM.childImageSharp.fluid,
      socials: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/shingai-manjengwa-1ba2574/",
        },
        {
          name: "Website",
          url: "https://vectorinstitute.ai/",
        },
      ],
    },
    {
      role: "Women in AI Panelist",
      first: "Ania",
      last: "Halliop",
      title: "Former Senior Engineering Manager",
      work: "Uber ATG",
      image: data.aniaH.childImageSharp.fluid,
      socials: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/ania-halliop/",
        },
        {
          name: "Website",
          url: "https://www.aniahalliop.com/",
        },
      ],
    },
  ];

  return (
    <Layout>
      <Helmet title="Speakers" />
      <StyledSpeakersPage>
        <Header>
          <h1>Our Guests</h1>
          <h2>Meet our wonderful speakers, panelists and judges!</h2>
        </Header>
        <Speakers>
          {speakers.map((speaker, i) => (
            <StyledSpeakerCard key={i}>
              <SpeakerImg>
                <Img fluid={speaker.image} />
              </SpeakerImg>
              <SpeakerText>
                <Role>{speaker.role}</Role>
                <Name>
                  {speaker.first}{" "}
                  <Name className="medium"> {speaker.last}</Name>
                </Name>
                <Title>{speaker.title}</Title>
                <Work>{speaker.work}</Work>
                <Socials size={"15px"} direction="row" list={speaker.socials} />
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
    markCa: file(relativePath: { eq: "markCa.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    davidH: file(relativePath: { eq: "davidH.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    inmarG: file(relativePath: { eq: "inmarG.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    danD: file(relativePath: { eq: "danD.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    carolineL: file(relativePath: { eq: "carolineL.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    shingaiM: file(relativePath: { eq: "shingaiM.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    valerieM: file(relativePath: { eq: "valerieM.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    aniaH: file(relativePath: { eq: "aniaH.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    emilyC: file(relativePath: { eq: "emilyC.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
