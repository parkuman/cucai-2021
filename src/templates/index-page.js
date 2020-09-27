import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";

//Photos
import SkylineLayers from "../img/parallaxSkyline";
import DesignImgs from "../img/designteams";
import Clouds from "../img/clouds_to_white.png";
import Diver from "../img/diver1.svg"
import Hands from "../img/world.png";
import showcase from "../img/Showcase_30.jpg";
import Highlights from "../img/pano.png"
import Proc from "../img/proceedings.png"
import Spons from "../img/spons.png"

import CardStack from "../components/Cards";
import Layout from "../components/Layout";
import Involved from "../components/Involvement";

import theme from "../styles/theme";
import media from "../styles/media";

import Button from '../components/Button';
import Proceedings from '../files/Proceedings-of-CUCAI-2020.pdf';
import styled from "styled-components";
import { Tab, Tabs, Row, Col, Nav, Carousel } from 'react-bootstrap/'

import 'bootstrap/dist/css/bootstrap.min.css';

//import { conferenceImages } from "../config";
//import Cards from "../components/Slideshow"

const StyledIndexPage = styled.div`
`;

const Fade = styled.div`
  .fade-in {
    animation: fadeIn ease 20s;
    -webkit-animation: fadeIn ease 20s;
    -moz-animation: fadeIn ease 20s;
    -o-animation: fadeIn ease 20s;
    -ms-animation: fadeIn ease 20s;
    }

    @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }
    
    @-moz-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }
    
    @-webkit-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }
    
    @-o-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }
    
    @-ms-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }
    `;

const StyledCont = styled.div`
  max-width: 80%;
  margin: 0 auto;
  padding: 100px 0;
`;



const StyledHero = styled.section`
  padding-top: 10vh;
  background: radial-gradient(189.82% 100% at 50% 0%, rgba(26, 79, 203, 0.0001) 0%, rgba(29, 85, 205, 0.0459233) 0%, rgba(33, 93, 208, 0.0977712) 63.18%, #65DAFE 100%, #65DAFE 100%), linear-gradient(146.77deg, rgba(26, 169, 203, 0.25) -3.05%, rgba(17, 47, 66, 0.25) 90.39%, rgba(17, 47, 66, 0.25) 90.39%);
  max-width: 100vw;
  
  height: 85vh;
  overflow: hidden;
`;

const SectionTitle = styled.h2`
  font-size: 4rem;
  font-weight: lighter;
`;

const SectionSubtitle = styled.h3`
  font-size: 2rem;
  font-weight: lighter;
`;

const StyledHeroContent = styled.div`
  margin: 0 auto;
  max-width: 80%;
`;

const StyledDarkSection = styled.div`
  background-color: #1A4FCB;
  padding: 1em;
  color: white;
`;

const StyledHeading = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-family: ${theme.fonts.IBMPlexSansLight};
  font-size: 4rem;
  max-width: 70%;

  ${media.phone`
      font-size: 2rem;
  `}
`;

const StyledSlogan = styled.h2`
  font-weight: normal;
  font-size: 2rem;

  ${media.phone`
      font-size: 1.2rem;
  `}
`;

const StyledInfo = styled.h3`
  font-weight: normal;
  font-size: 1.2rem;
  padding: 10px 0;

  ${media.phone`
      font-size: 1rem;
  `}
`;

const StyledParallaxSkyline = styled.div`
  max-height: 200px;
  position: relative; 
  top: -40vh;
  pointer-events: none;


  ${media.phone`
      top: -16vh;
  `}

  ${media.tablet`
      top: -20vh;
  `}
`;

const StyledParallax = styled(Parallax)`
  & img {
    width: 100vw;
  }
`;

const StyledBlurbSection = styled.section`
  max-width: 80%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  z-index: 10!important;

  & div {
    max-width: 50%;
    margin-right: 10px;
  }

  ${media.phone`
    flex-direction: column-reverse;
    max-width: 95%;

    & div {
      max-width: 100%;
      margin-right: 0px;
    }
  `}
`;

const StyledDesignTeamShowcase = styled.section`
  max-width: 80%;
  margin: 0 auto;

  ${media.phone`
    max-width: 95%;
  `}
`;

const StyledImg = styled.section`
  max-width: 100%;
`;

const StyledScroller = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  height: 50vh;
`;

const StyledScrollCard = styled.div`
  flex: 0 0 auto;
  border-radius: 1em;
  width: 70vw;
`;

const StyledPastSpeakersSection = styled.section`
  max-width: 80%;
  margin: 0 auto;
  padding: 50px 0 ;
`;

const StyledInvolvedSection = styled.section`
  max-width: 80%;
  margin: 0 auto;
  padding: 50px 0 ;

  ${media.phone`
    max-width: 95%;
  `}

`;

const StyledCard = ({ image }) => {
  return (
    <StyledScrollCard>
      <img src={image} style={{ objectFit: "cover" }} />
    </StyledScrollCard>
  )
}

const CardSlide = ({ array }) => {
  return (
    <StyledScroller>
      <StyledCard image={array[0]} />
      <StyledCard image={array[1]} />
      <StyledCard image={array[3]} />
      <StyledCard image={array[4]} />
      <StyledCard image={array[5]} />
      <StyledCard image={array[6]} />
    </StyledScroller>
  );
}



const ParallaxSkyline = () => {
  return (
    <StyledParallaxSkyline>
      <StyledParallax y={[-10, 0]}>
        <img src={SkylineLayers[0]} />
      </StyledParallax>
      <StyledParallax y={[-90, -100]}>
        <img src={SkylineLayers[1]} />
      </StyledParallax>
      <StyledParallax y={[-190, -205]}>
        <img src={SkylineLayers[2]} />
      </StyledParallax>
      <StyledParallax y={[-290, -310]}>
        <img src={SkylineLayers[3]} />
      </StyledParallax>
      <StyledParallax y={[-390, -415]}>
        <img src={SkylineLayers[4]} />
      </StyledParallax>
      <StyledParallax y={[-490, -520]}>
        <img src={SkylineLayers[5]} />
      </StyledParallax>
      <StyledParallax y={[-590, -620]}>
        <img src={SkylineLayers[6]} />
      </StyledParallax>
      <StyledParallax y={[-750, -780]}>
        <img src={Clouds} />
      </StyledParallax>
    </StyledParallaxSkyline>



  );
}

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
      <StyledHeading><Fade>{heading}</Fade></StyledHeading>
      <StyledSlogan>{slogan}</StyledSlogan>
      <StyledInfo>{location.toUpperCase()} | {date.toUpperCase()}</StyledInfo>
      <Button backgroundColour="white"><a href="#spons">{cta1}</a></Button>
      <Button borderStyle="solid" borderColour="#174461"><a href="mailto:chair@cucai.ca">{cta2}</a></Button>
    </StyledHeroContent>
  </StyledHero>
);

const BlurbSection = ({ blurbtitle, blurbdesc, blurbimg }) => (
  <StyledBlurbSection>
    <div>
      <h2>{blurbtitle}</h2>
      <p>{blurbdesc}</p>
      <p>As an event geared towards future leaders in this field, we are thrilled to announce that our theme for this year will be AI For Good: Artificial Intelligence, Real Change! From advancing medical research to protecting the environment and aiding in natural disaster recovery, the ways in which AI can make the world a better place continue to grow. We look forward to presenting an event full of engaging speakers and events that will inspire attendees and forge meaningful connections.</p>
    </div>

    <StyledImg><img src={blurbimg}></img></StyledImg>

  </StyledBlurbSection>
);

const DesignTeamShowcase = ({ images }) => (
  <StyledDesignTeamShowcase>
    <SectionSubtitle> Design Team Showcase</SectionSubtitle>
    <p>The design team showcase was the foundation on which CUCAI was started. This event allows the hard work, dedication and talent of Canadian undergraduate students working on AI-based design projects since September, to be exhibited for industry representatives and other delegates to learn about the work currently being done in the field of AI at the undergraduate level. This event features in-depth presentations for audiences of all levels of experience and backgrounds, as well as engaging and interactive demonstrations for 30+ design teams from across Canada.</p>
    <Button><a href={Proceedings}>PROCEEDINGS</a></Button>
    <img src={Proc}></img>
    <Carousel>
      {images.map((image, key) => (
        <Carousel.Item key={key}>
          <img src={image} alt="design team showcase image" />
        </Carousel.Item>
      ))}
    </Carousel>
  </StyledDesignTeamShowcase>
);

const HighlightSection = ({ featuredimage }) => (
  <>
    <SectionTitle>Conference Events</SectionTitle>
    <img src={Highlights} />
    <StyledCont>
      <Row>
        <Col>
          <img src={showcase}></img>
        </Col>
        <Col>
          <SectionSubtitle>Industry Showcase</SectionSubtitle>

          <p>
            As a compliment to the design team showcase, this event is designed to show undergraduate students what the present and future of artificial intelligence in industry look like. Booths for each of our industry partners will be set up to allow students to learn about the opportunities available to them within industry. Students learn about how technological advancements in artificial intelligence are shaping a wide variety of industries. The industry showcase is often a favourite of both industry reps and delegates due to the phenomenal networking opportunities.

</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <SectionSubtitle>Speakers</SectionSubtitle>
          <p>Speaker presentations from leaders in academia and industry have been a cornerstone of CUCAI since its inaugural year. These components of the conference empower delegates to learn from the ideas, experiences and knowledge of these professionals as they discuss a variety of fascinating AI topics.
</p>

        </Col>
        <Col>
          <p>abc</p>
        </Col>

      </Row>
      <Row>
        <Col>
          <SectionSubtitle>Workshops</SectionSubtitle>
          <p>Workshops are an incredibly engaging facet of CUCAI intended to bring an element of concreteness to the topic of artificial intelligence. These events allow industry partners to showcase their firm’s technology while providing an opportunity for interactive experience with modern AI and data science tools for delegates.
</p>
        </Col>
        <Col>
          <img src="../img/workshop_k.jpg"></img>
        </Col>

      </Row>

      <Row>
        <Col sm={9}>
          <h3>Past Sponsors</h3>
          <img src={Spons}>
          </img>

        </Col>
        <Col>
          <Button borderStyle="solid" borderColour="#ffffff"><a href={Proceedings} style={{ color: "white" }}>Sponsorship Package</a></Button>
        </Col>
      </Row>
    </StyledCont>

  </>
);

const PastSpeakersSection = () => (
  <StyledPastSpeakersSection>
    <h2>Past Speakers and Workshops</h2>
    <CardStack />
  </StyledPastSpeakersSection>
)

const InvolvedSection = () => (
  <StyledInvolvedSection>

    <h2>Get Involved</h2>
    <Involved />

  </StyledInvolvedSection>
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
    <ParallaxSkyline />
    <BlurbSection blurbimg={Diver} blurbdesc={mainpitch.description} blurbtitle={mainpitch.title} />
    <DesignTeamShowcase images={DesignImgs} />
    <HighlightSection featuredimage={Highlights} />
    <PastSpeakersSection />
    <InvolvedSection />
  </StyledIndexPage>

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
      markdownRemark(frontmatter: {templateKey: {eq: "index-page" } }) {
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
