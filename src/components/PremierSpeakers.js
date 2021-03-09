import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import theme from "../styles/theme";
import media from "../styles/media";

const StyledSpeakerCarousel = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  height: 400px;
  align-items: center;
  position: relative;

  ${media.phone`
    height: 376px;
  `}
`;

const SpeakerCarouselContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledSpeakerCard = styled.li`
  background: #ffffff;
  width: 100%;
  height: 100%;
  transition: all 0.75s ease;
  opacity: 0;
  position: absolute;
  transform: scale(0.85) translateX(50px);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &.active {
    opacity: 1;
    transform: scale(1) translateX(0);
    z-index: 1;
  }

  &.next {
    opacity: 0.05;
    z-index: 0;
  }

  &.prev {
    transform: scale(0.85) translateX(-50px);
    z-index: 0;
    opacity: 0;
    visibility: hidden;
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

const CardSelector = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  & > button {
    background-color: #cccccc;
    margin: 0;
    padding: 0;
    border-style: none;
    display: inline-block;
    width: 40px;
    height: 7px;
    margin-right: 5px;
    border-radius: 5px;

    &.active {
      background-color: #1aa9cb;
    }

    &:focus {
      outline: 0;
    }
  }
`;

function determineClasses(indexes, speakerIndex) {
  if (indexes.currentIndex === speakerIndex) {
    return "active";
  } else if (indexes.nextIndex === speakerIndex) {
    return "next";
  } else if (indexes.previousIndex === speakerIndex) {
    return "prev";
  }
  return "inactive";
}

const SpeakerCard = ({ speaker, state }) => {
  return (
    <StyledSpeakerCard className={state}>
      <SpeakerImg>
        <Img fluid={speaker.image} />
      </SpeakerImg>
      <SpeakerText>
        {/* <Header>Upcoming Speaker: </Header>
        <Divider /> */}
        <Name>
          {speaker.first} <Name className="medium"> {speaker.last}</Name>
        </Name>
        <Title>{speaker.title}</Title>
        <Work>{speaker.work}</Work>
      </SpeakerText>
    </StyledSpeakerCard>
  );
};

const PremierSpeakers = () => {
  const data = useStaticQuery(graphql`
    query SpeakerQuery {
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
    }
  `);

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
      first: "David",
      last: "Hayes",
      title: "CEO & Founder",
      work: "AVO - Autonomous Vehicle Organization",
      image: data.davidH.childImageSharp.fluid,
    },
    {
      first: "Inmar",
      last: "Givoni",
      title: "Director of Engineering",
      work: "Uber ATG",
      image: data.inmarG.childImageSharp.fluid,
    },
  ];

  const [indexes, setIndexes] = useState({
    previousIndex: 0,
    currentIndex: 0,
    nextIndex: 1,
  });

  const [didUserInteract, setDidUserInteract] = useState(false);

  const handleCardTransition = useCallback(
    (userIndex) => {
      if (userIndex !== undefined) {
        setDidUserInteract(true);
        setIndexes({
          previousIndex: userIndex - 1,
          currentIndex: userIndex,
          nextIndex: userIndex + 1,
        });
      } else {
        // If we've reached the end, start again from the first card,
        // but carry previous value over
        if (indexes.currentIndex >= speakers.length - 1) {
          setIndexes({
            previousIndex: speakers.length - 1,
            currentIndex: 0,
            nextIndex: 1,
          });
        } else {
          setIndexes((prevState) => ({
            previousIndex: prevState.currentIndex,
            currentIndex: prevState.currentIndex + 1,
            nextIndex:
              prevState.currentIndex + 2 === speakers.length
                ? 0
                : prevState.currentIndex + 2,
          }));
        }
      }
    },
    [indexes.currentIndex]
  );

  useEffect(() => {
    const transitionInterval = setInterval(() => {
      handleCardTransition();
    }, 4000);

    if (didUserInteract) clearInterval(transitionInterval);

    return () => clearInterval(transitionInterval);
  }, [didUserInteract, handleCardTransition, indexes]);

  return (
    <SpeakerCarouselContainer>
      <StyledSpeakerCarousel>
        {speakers.map((speaker, i) => (
          <SpeakerCard
            key={i}
            speaker={speaker}
            state={determineClasses(indexes, i)}
          />
        ))}
      </StyledSpeakerCarousel>
      <CardSelector>
        {speakers.map((speaker, i) => (
          <button
            key={i}
            onClick={() => handleCardTransition(i)}
            className={determineClasses(indexes, i)}
          />
        ))}
      </CardSelector>
    </SpeakerCarouselContainer>
  );
};

export default PremierSpeakers;
