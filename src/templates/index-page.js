import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import styled from "styled-components";
import { Tab, Tabs, Row, Col, Nav } from 'react-bootstrap/'

import SkylineLayers from "../img/parallaxSkyline";
import DesignImgs from "../img/designteams";
import Clouds from "../img/clouds.png";
import Diver from "../img/diver1.svg"
import Hands from "../img/hands.png";
import showcase from "../img/Showcase_30.jpg"

import CardStack from "../components/Cards";
import Layout from "../components/Layout";
import Button from '../components/Button';

import Proceedings from '../files/Proceedings-of-CUCAI-2020.pdf';
import 'bootstrap/dist/css/bootstrap.min.css';

import theme from "../styles/theme";
import media from "../styles/media";


const StyledIndexPage = styled.div`
`;

const StyledCont = styled.div`
padding: 1em;
`;

const StyledHero = styled.section`
  padding-top: 150px;
  background: radial-gradient(189.82% 100% at 50% 0%, rgba(26, 79, 203, 0.0001) 0%, rgba(29, 85, 205, 0.0459233) 0%, rgba(33, 93, 208, 0.0977712) 63.18%, #65DAFE 100%, #65DAFE 100%), linear-gradient(146.77deg, rgba(26, 169, 203, 0.25) -3.05%, rgba(17, 47, 66, 0.25) 90.39%, rgba(17, 47, 66, 0.25) 90.39%);
  max-width: 100vw;
  height: 100vh;
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

const StyledParallax = styled(Parallax)`
  & img {
    width: 100vw;
  }
`;

const StyledParallaxClouds = styled.section`
  max-width: 100vw;
`;

const StyledIntroSection = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 90vw;

  & section {
    padding: 20px;
  }

  & img {
    width: 50%;
  }

  ${media.phone` 
    flex-direction: column;
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
    <>
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
    </>
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
        <StyledHeading>{heading}</StyledHeading>
        <StyledSlogan>{slogan}</StyledSlogan>
        <StyledInfo>{location.toUpperCase()} | {date.toUpperCase()}</StyledInfo>
        <Button backgroundColour="white"><a href="#spons">{cta1}</a></Button>
        <Button borderStyle="solid" borderColour="#174461"><a href="mailto:chair@cucai.ca">{cta2}</a></Button>
      </StyledHeroContent>
      <ParallaxSkyline />
    </StyledHero>
  );


const ParallaxClouds = () => (
  <StyledParallaxClouds>
    <StyledParallax y={[-30, -60]}>
      <img src={Clouds} />
    </StyledParallax>
  </StyledParallaxClouds>
);

const IntroSection = ({ title, content, img }) => (
  <StyledIntroSection>
    <section>
      <h2>{title}</h2>
      <p>{content}</p>
    </section>
    <img src={img}></img>
  </StyledIntroSection>
);


const HighlightSection = ({ featuredimage }) => (
  <div>
    <SectionTitle>2020 <strong>Highlights</strong></SectionTitle>
    <div id="2020proceedings">
      <StyledDarkSection>
        <SectionSubtitle> Design Team Showcase</SectionSubtitle>
        <p>The design team showcase was the foundation on which CUCAI was started. This event allows the hard work, dedication and talent of Canadian undergraduate students working on AI-based design projects since September, to be exhibited for industry representatives and other delegates to learn about the work currently being done in the field of AI at the undergraduate level. This event features in-depth presentations for audiences of all levels of experience and backgrounds, as well as engaging and interactive demonstrations for 30+ design teams from across Canada.</p>
        <Button borderStyle="solid" borderColour="#ffffff"><a href={Proceedings} style={{ color: "white" }}>PROCEEDINGS</a></Button>
      </StyledDarkSection>
      <CardSlide array={DesignImgs} />
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
      </StyledCont>
    </div>
  </div>
);

const InvolvedSection = () => (
  <StyledCont>
    <CardStack />
    <h2>Get Involved</h2>
    <Tab.Container id="left-tabs-example" defaultActiveKey="Industry Partners">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="Industry Partners">Industry Partners</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Speakers">Speakers</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Student Groups">Student Groups</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Delegates">Delegates</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>

        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="Industry Partners">
              <p>We will work closely with our industry partners to create an environment where undergraduate students and professionals can share their ideas and experiences, and explore the world of AI together. As a partner, CUCAI is the perfect place to interact and connect with the top talent in AI and machine learning.
</p>
            </Tab.Pane>
            <Tab.Pane eventKey="Speakers">
              <p>As a CUCAI speaker, you will have the unique opportunity to speak to and engage with the nation's leading undergraduate AI talent. Conference speakers are encouraged to provide students with relevant insight from their own work and the AI field in an innovative, creative, and personable way. Speaker opportunities include speeches, as well as panelist positions, workshop leaders and inQUbate pitch competition judges.
</p>
            </Tab.Pane>
            <Tab.Pane eventKey="Student Groups">
              <p>In its inaugural year of implementation, CUCAI has developed a “Tier Collaberation Program” structured to facilitate involvement from undergraduate AI groups across Canada. Incentives include reserved delegate spots, design showcase involvement, participation in the inQUbate pitch competition, the undergraduate AI executive showcase and more. Opportunities for partnership with other Canadian undergraduate AI societies have never been so plentiful, as CUCAI’s national reach expands.
</p>
            </Tab.Pane>
            <Tab.Pane eventKey="Delegates">
              <p>Stay tuned for delegate applications!</p>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  </StyledCont>
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
      <ParallaxClouds />
      <IntroSection img={Diver} content={mainpitch.description} title={mainpitch.title} />
      <HighlightSection featuredimage={showcase} />
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
