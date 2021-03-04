import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

import theme from "../styles/theme";
import media from "../styles/media";

const StyledSponsorTiers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px 0;

  & h6 {
    font-weight: bold;
  }

  & > * {
    max-width: 80%;
    margin-bottom: 20px;

    ${media.phone`
      max-width: 100%;
    `}
  }
`;

const TitleSponsors = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & > a {
    width: 60vw;

    ${media.phone`
      width: 100vw;
    `}
  }
`;

const GoldSponsors = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & > a {
    width: 200px;
  }
`;

const SilverSponsors = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;

  & > a {
    width: 150px;
  }
`;

const SponsorLink = styled.a`
  transition: ${theme.transition};
  margin: 0 30px 30px 30px;

  &:hover {
    transform: scale(1.08, 1.08);
  }
`;

const Header = styled.div`
  margin: 30px auto;
  width: 100%;
  font-family: ${theme.fonts.IBMPlexSansMedium};

  & h1 {
    font-size: 2.5rem;
  }

  & h2 {
    font-size: 1.2rem;
  }
`;

const SponsorTiers = () => {
  const data = useStaticQuery(graphql`
    query SponsorQuery {
      queensEng: file(relativePath: { eq: "sponsors/queensEng.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      northEasternUT: file(
        relativePath: { eq: "sponsors/northEasternUT.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      telus: file(relativePath: { eq: "sponsors/telus.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bldAI: file(relativePath: { eq: "sponsors/bldAI.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wetraQ: file(relativePath: { eq: "sponsors/wetraQ.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mosea: file(relativePath: { eq: "sponsors/mosea.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      vectorIn: file(relativePath: { eq: "sponsors/vectorIn.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kinaxis: file(relativePath: { eq: "sponsors/kinaxis.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      googleC: file(relativePath: { eq: "sponsors/googleC.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dcl: file(relativePath: { eq: "sponsors/dcl_.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ddqic: file(relativePath: { eq: "sponsors/ddqic.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const titleSpons = [
    {
      name: "Queen's Faculty of Engineering & Applied Science",
      picture: data.queensEng.childImageSharp.fluid,
      link: "https://engineering.queensu.ca/",
    },
  ];

  const goldSpons = [
    {
      name: "Northeastern University",
      picture: data.northEasternUT.childImageSharp.fluid,
      link: "https://toronto.northeastern.edu/",
    },
    {
      name: "Telus",
      picture: data.telus.childImageSharp.fluid,
      link: "https://www.telus.com/en/",
    },
  ];

  const silverSpons = [
    {
      name: "bld.ai",
      picture: data.bldAI.childImageSharp.fluid,
      link: "https://www.bld.ai/",
    },
    {
      name: "wetraQ",
      picture: data.wetraQ.childImageSharp.fluid,
      link: "https://wetraq.ca/",
    },
    {
      name: "MOSEA",
      picture: data.mosea.childImageSharp.fluid,
      link: "https://mosea.io/",
    },
    {
      name: "Vector Institute",
      picture: data.vectorIn.childImageSharp.fluid,
      link: "https://vectorinstitute.ai/",
    },
    {
      name: "Kinaxis",
      picture: data.kinaxis.childImageSharp.fluid,
      link: "https://www.kinaxis.com/en",
    },
    {
      name: "Google Cloud",
      picture: data.googleC.childImageSharp.fluid,
      link: "https://cloud.google.com/",
    },
    {
      name: "DCL",
      picture: data.dcl.childImageSharp.fluid,
      link: "https://distributed.computer",
    },
    {
      name: "DDQIC",
      picture: data.ddqic.childImageSharp.fluid,
      link: "https://www.queensu.ca/innovationcentre/about-0",
    },
  ];

  return (
    <StyledSponsorTiers>
      <Header>
        <h1>Our Sponsors</h1>
        <h2>Thank you so much for making CUCAI 2021 possible!</h2>
      </Header>
      <h6>Title</h6>
      <TitleSponsors>
        {titleSpons.map((sponsor, i) => (
          <SponsorLink
            key={i}
            target="_blank"
            rel="noreferrer"
            href={sponsor.link}
            alt={sponsor.name}
          >
            <Img fluid={sponsor.picture} alt={sponsor.name} />
          </SponsorLink>
        ))}
      </TitleSponsors>

      <h6>Gold</h6>
      <GoldSponsors>
        {goldSpons.map((sponsor, i) => (
          <SponsorLink
            key={i}
            target="_blank"
            rel="noreferrer"
            href={sponsor.link}
            alt={sponsor.name}
          >
            <Img fluid={sponsor.picture} alt={sponsor.name} />
          </SponsorLink>
        ))}
      </GoldSponsors>

      <h6>Silver</h6>
      <SilverSponsors>
        {silverSpons.map((sponsor, i) => (
          <SponsorLink
            key={i}
            target="_blank"
            rel="noreferrer"
            href={sponsor.link}
            alt={sponsor.name}
          >
            <Img fluid={sponsor.picture} alt={sponsor.name} />
          </SponsorLink>
        ))}
      </SilverSponsors>
    </StyledSponsorTiers>
  );
};

export default SponsorTiers;
