import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import { Parallax } from "react-scroll-parallax";
import Fade from "react-reveal/Fade";

//Photos
import SkylineLayers from "../img/parallaxSkyline";
import DesignImgs from "../img/designteams";
import Clouds from "../img/clouds_to_white.png";
import City from "../img/CIDEE.png";
import Diver from "../img/diver1.svg";
import IndustryShowcaseImg from "../img/Showcase_30.jpg";
import WorkshopShowcaseImg from "../img/workshop_k.jpg";
import Highlights from "../img/pano.png";
import Proc from "../img/proceedings.png";
import Spons from "../img/spons.jpg";

import FacebookIcon from "../img/social/facebook.js";
import LinkedInIcon from "../img/social/linkedin.js";
import InstagramIcon from "../img/social/instagram.js";

import CardStack from "../components/Cards";
import Layout from "../components/Layout";
import Involved from "../components/Involvement";

import theme from "../styles/theme";
import media from "../styles/media";
import { socialMedia } from "../config";

import Button from "../components/Button";
import Proceedings from "../files/Proceedings-of-CUCAI-2020.pdf";
import SponsorshipPackage from "../files/CUCAI 2021 Sponsorship Package.pdf";
import styled from "styled-components";
import { Row, Col, Carousel } from "react-bootstrap/";

import "bootstrap/dist/css/bootstrap.min.css";

//import { conferenceImages } from "../config";
//import Cards from "../components/Slideshow"

const StyledIndexPage = styled.div``;

const StyledCont = styled.div`
  max-width: 80%;
  margin: 0 auto;
  padding: 100px 0;
`;

const IdHrefAnchor = styled.a`
  display: block;
  position: relative;
  top: -100px;
  visibility: hidden;
`;

const StyledHero = styled.section`
  padding-top: 10vh;
  position: relative;
  background: radial-gradient(
      189.82% 100% at 50% 0%,
      rgba(26, 79, 203, 0.0001) 0%,
      rgba(29, 85, 205, 0.0459233) 0%,
      rgba(33, 93, 208, 0.0977712) 63.18%,
      #65dafe 100%,
      #65dafe 100%
    ),
    linear-gradient(
      146.77deg,
      rgba(26, 169, 203, 0.25) -3.05%,
      rgba(17, 47, 66, 0.25) 90.39%,
      rgba(17, 47, 66, 0.25) 90.39%
    );
  max-width: 100vw;

  height: 90vh;
  /* overflow: hidden; */
`;

const SectionTitle = styled.h2`
  font-size: 4rem;
  font-weight: lighter;

  ${media.phone`
    font-size: 2.5rem;
  `}
`;

const SectionSubtitle = styled.h3`
  font-size: 2rem;
  font-weight: lighter;

  ${media.phone`
    font-size: 1.5rem;
  `}
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
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  z-index: 10 !important;

  & div {
    max-width: 50%;
    margin-right: 10px;
  }

  ${media.phone`
    flex-direction: column-reverse;
    max-width: 95%;
    padding: 10vh 0;

    & div {
      max-width: 100%;
      margin-right: 0px;
    }
  `}
`;

const StyledCovidBanner = styled.section`
  padding: 100px 0;
  color: white;
  width: 100vw;
  background: #1a4fcb;
`;

const CovidContent = styled.div`
  max-width: 80%;
  margin: 0 auto;
  & > h2 {
    margin-bottom: 20px;
  }
  & > p {
    margin: 20px 0;
  }
`;

const StyledConferenceEvents = styled.section`
  & > div {
    position: relative;
    & h2 {
      position: absolute;
      bottom: 0;
      left: 0;
      color: white;
    }
  }
`;

const ConferenceEventsList = styled.div`
  max-width: 80%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  & > * {
    padding: 80px 0;
  }

  ${media.phone`
    max-width: 95%;
  `}
`;

const EventTitleAndDesc = styled.div`
  max-width: 48%;
  ${media.phone`
    max-width: 100%;
    padding: 20px 0;
  `}
`;

const EventContent = styled.div`
  max-width: 48%;

  ${media.phone`
    max-width: 100%;
    
  `}
`;

const StyledDesignTeamShowcase = styled.section`
  margin: 0 auto;
`;

const DesignTeamShowcaseContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${media.phone`
    flex-direction: column-reverse;
  `}
`;

const DesignTeamProceedings = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & img {
    max-width: 50%;
  }
`;

const DesignTeamCarousel = styled(Carousel)`
  max-width: 50vw;
  max-height: 50vh;
  margin: 50px auto 0 auto;

  overflow: hidden;

  ${media.phone`
    max-width: 100%;
  `}
`;

const StyledIndustryShowcase = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${media.phone`
    flex-direction: column;
  `}
`;

const StyledSpeakersShowcase = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${media.phone`
    flex-direction: column-reverse;
  `}
`;

const StyledWorkshopsShowcase = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${media.phone`
    flex-direction: column;
  `}
`;

const StyledImg = styled.section`
  max-width: 100%;
`;

const CityImg = styled.img`
  width: 100vw;
  position: absolute;
  pointer-events: none;

  bottom: 0;
  left: 0;
  transform: translateY(15vh);

  ${media.phone`
    transform: translateY(3vh);
  `}
  ${media.tablet`
    transform: translateY(5vh);
  `}
`;

const StyledPastSpeakersSection = styled.section`
  max-width: 80%;
  margin: 0 auto;
  padding: 50px 0;
`;

const StyledSponsorSection = styled.section`
  max-width: 80%;
  margin: 0 auto;
  padding: 100px 0;

  & > img {
    max-height: 50vh;
  }
`;

const StyledInvolvedSection = styled.section`
  max-width: 60%;
  margin: 0 auto;
  padding: 50px 0;

  ${media.phone`
    max-width: 95%;
  `}
`;

const StyledContactUsSection = styled.section`
  margin: 0 auto;
  display: flex;
  padding: 100px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ParallaxSkyline = () => {
  return (
    <StyledParallaxSkyline>
      <StyledParallax y={[-10, 0]}>
        <img src={SkylineLayers[0]} alt="skyline layer" />
      </StyledParallax>
      <StyledParallax y={[-90, -100]}>
        <img src={SkylineLayers[1]} alt="skyline layer" />
      </StyledParallax>
      <StyledParallax y={[-190, -205]}>
        <img src={SkylineLayers[2]} alt="skyline layer" />
      </StyledParallax>
      <StyledParallax y={[-290, -310]}>
        <img src={SkylineLayers[3]} alt="skyline layer" />
      </StyledParallax>
      <StyledParallax y={[-390, -415]}>
        <img src={SkylineLayers[4]} alt="skyline layer" />
      </StyledParallax>
      <StyledParallax y={[-490, -520]}>
        <img src={SkylineLayers[5]} alt="skyline layer" />
      </StyledParallax>
      <StyledParallax y={[-590, -620]}>
        <img src={SkylineLayers[6]} alt="skyline layer" />
      </StyledParallax>
      <StyledParallax y={[-750, -780]}>
        <img src={Clouds} alt="skyline layer" />
      </StyledParallax>
    </StyledParallaxSkyline>
  );
};

const Hero = ({ heading, slogan, location, date, cta1, cta2 }) => (
  <StyledHero>
    <Fade bottom distance="80px">
      <StyledHeroContent>
        <StyledHeading>
          <Fade>{heading}</Fade>
        </StyledHeading>
        <StyledSlogan>{slogan}</StyledSlogan>
        <StyledInfo>
          {location.toUpperCase()} | {date.toUpperCase()}
        </StyledInfo>
        <Button backgroundColour="white">
          <a href="#spons">{cta1}</a>
        </Button>
        <Button borderStyle="solid" borderColour="#174461">
          <a href="mailto:chair@cucai.ca">{cta2}</a>
        </Button>
      </StyledHeroContent>
    </Fade>

    <CityComponent />
  </StyledHero>
);

const CityComponent = () => <CityImg src={City}></CityImg>;

const BlurbSection = ({ blurbtitle, blurbdesc, blurbimg }) => (
  <StyledBlurbSection>
    <Fade bottom distance="80px">
      <div>
        <SectionSubtitle>{blurbtitle}</SectionSubtitle>
        <p>{blurbdesc}</p>
        <p>
          As an event geared towards future leaders in this field, we are
          thrilled to announce that our theme for this year will be AI For Good:
          Artificial Intelligence, Real Change! From advancing medical research
          to protecting the environment and aiding in natural disaster recovery,
          the ways in which AI can make the world a better place continue to
          grow. We look forward to presenting an event full of engaging speakers
          and events that will inspire attendees and forge meaningful
          connections.
        </p>
      </div>

      <StyledImg>
        <img src={blurbimg} alt="diver underwater"></img>
      </StyledImg>
    </Fade>
  </StyledBlurbSection>
);

const CovidBanner = () => (
  <StyledCovidBanner>
    <Fade bottom distance="80px">
      <CovidContent>
        <SectionTitle>COVID-19 Response</SectionTitle>
        <p>
          The pandemic has changed the status quo of conferences all around the
          world. Click the link below to read our new plan for an{" "}
          <strong>online</strong> CUCAI 2021.
        </p>
        <Button borderStyle="solid" borderColour="white" textColour="white">
          <Link to="/covidresponse">See Our Plans</Link>
        </Button>
      </CovidContent>
    </Fade>
  </StyledCovidBanner>
);

const ConferenceEvents = () => (
  <StyledConferenceEvents>
    <Fade bottom distance="80px">
      <IdHrefAnchor id="events" />
      <div>
        <img src={Highlights} alt="last years highlights" />
        <SectionTitle>Conference Events</SectionTitle>
      </div>
    </Fade>
    <ConferenceEventsList>
      <Fade bottom distance="80px">
        <DesignTeamShowcase images={DesignImgs} />
      </Fade>
      <Fade bottom distance="80px">
        <IndustryShowcase />
      </Fade>
      <Fade bottom distance="80px">
        <SpeakersShowcase />
      </Fade>
      <Fade bottom distance="80px">
        <WorkshopsShowcase />
      </Fade>
    </ConferenceEventsList>
  </StyledConferenceEvents>
);

const DesignTeamShowcase = ({ images }) => {
  const ProceedingsImg = styled.img`
    padding-bottom: 10px;
  `;

  return (
    <StyledDesignTeamShowcase>
      <DesignTeamShowcaseContent>
        <EventTitleAndDesc>
          <SectionSubtitle>Design Team Showcase</SectionSubtitle>
          <p>
            The design team showcase was the foundation on which CUCAI was
            started. This event allows the hard work, dedication and talent of
            Canadian undergraduate students working on AI-based design projects
            since September, to be exhibited for industry representatives and
            other delegates to learn about the work currently being done in the
            field of AI at the undergraduate level. This event features in-depth
            presentations for audiences of all levels of experience and
            backgrounds, as well as engaging and interactive demonstrations for
            30+ design teams from across Canada.
          </p>
        </EventTitleAndDesc>
        <EventContent>
          <DesignTeamProceedings>
            <ProceedingsImg
              src={Proc}
              alt="conference proceedings"
            ></ProceedingsImg>
            <Button borderStyle="solid" borderColour="#174461">
              <a href={Proceedings}>2020 PROCEEDINGS PDF</a>
            </Button>
          </DesignTeamProceedings>
        </EventContent>
      </DesignTeamShowcaseContent>

      <DesignTeamCarousel>
        {images.map((image, key) => (
          <Carousel.Item key={key}>
            <img src={image} alt="design team showcase" />
          </Carousel.Item>
        ))}
      </DesignTeamCarousel>
    </StyledDesignTeamShowcase>
  );
};

const IndustryShowcase = () => (
  <StyledIndustryShowcase>
    <EventContent>
      <img src={IndustryShowcaseImg} alt="industry showcase"></img>
    </EventContent>

    <EventTitleAndDesc>
      <SectionSubtitle>Industry Showcase</SectionSubtitle>

      <p>
        As a compliment to the design team showcase, this event is designed to
        show undergraduate students what the present and future of artificial
        intelligence in industry look like. Booths for each of our industry
        partners will be set up to allow students to learn about the
        opportunities available to them within industry. Students learn about
        how technological advancements in artificial intelligence are shaping a
        wide variety of industries. The industry showcase is often a favourite
        of both industry reps and delegates due to the phenomenal networking
        opportunities.
      </p>
    </EventTitleAndDesc>
  </StyledIndustryShowcase>
);

const SpeakersShowcase = () => (
  <StyledSpeakersShowcase>
    <EventTitleAndDesc>
      <SectionSubtitle>Speakers</SectionSubtitle>
      <p>
        Speaker presentations from leaders in academia and industry have been a
        cornerstone of CUCAI since its inaugural year. These components of the
        conference empower delegates to learn from the ideas, experiences and
        knowledge of these professionals as they discuss a variety of
        fascinating AI topics.
      </p>
    </EventTitleAndDesc>

    <EventContent>
      <p>speakerstuff</p>
    </EventContent>
  </StyledSpeakersShowcase>
);

const WorkshopsShowcase = () => (
  <StyledWorkshopsShowcase>
    <EventContent>
      <img src={WorkshopShowcaseImg} alt="workshop showcase"></img>
    </EventContent>
    <EventTitleAndDesc>
      <SectionSubtitle>Workshops</SectionSubtitle>
      <p>
        Workshops are an incredibly engaging facet of CUCAI intended to bring an
        element of concreteness to the topic of artificial intelligence. These
        events allow industry partners to showcase their firm’s technology while
        providing an opportunity for interactive experience with modern AI and
        data science tools for delegates.
      </p>
    </EventTitleAndDesc>
  </StyledWorkshopsShowcase>
);

const SponsorSection = () => (
  <StyledSponsorSection>
    <Fade bottom distance="80px">
      <IdHrefAnchor id="sponsors" />
      <SectionTitle>Sponsors</SectionTitle>
      <h3>Sponsor Us</h3>
      <p>There are many advantages to becoming a CUCAI sponsor.</p>
      <Button borderStyle="solid">
        <a href={SponsorshipPackage}>View Our Benefits Package</a>
      </Button>
      <br></br>
      <br></br>
      <br></br>

      <h3>Past Sponsors & Partners</h3>
      <img src={Spons} alt="sponsorships"></img>
    </Fade>
  </StyledSponsorSection>
);

const PastSpeakersSection = () => (
  <StyledPastSpeakersSection>
    <h2>Past Speakers and Workshops</h2>
    <CardStack />
  </StyledPastSpeakersSection>
);

const InvolvedSection = () => (
  <StyledInvolvedSection>
    <Fade bottom distance="80px">
      <IdHrefAnchor id="involvement" />
      <SectionTitle>Get Involved</SectionTitle>
      <Involved />
    </Fade>
  </StyledInvolvedSection>
);

const SocialLink = styled(Link)`
  padding: 5px 10px;

  & svg {
    transition: ${theme.transition};
  }

  &:hover {
    & svg {
      fill: var(--cucai-blue);
      transform: rotate(10deg) translateY(-3px);
    }
  }
`;

const SocialsList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Socials = () => (
  <SocialsList>
    {socialMedia.map((social) => {
      let image;
      if (social.name.includes("Facebook")) {
        image = <FacebookIcon size="25px" />;
      } else if (social.name.includes("Instagram")) {
        image = <InstagramIcon size="25px" />;
      } else if (social.name.includes("LinkedIn")) {
        image = <LinkedInIcon size="25px" />;
      } else {
        image = null;
      }

      return <SocialLink to={social.url}>{image}</SocialLink>;
    })}
  </SocialsList>
);

const ContactUsSection = () => (
  <StyledContactUsSection>
    <Fade bottom distance="80px">
      <IdHrefAnchor id="contact" />
      <SectionTitle>Contact Us</SectionTitle>
      <h3>Email</h3>
      <Button borderStyle="solid">
        <a href="mailto:chair@cucai.ca">chair@cucai.ca</a>
      </Button>
      <br></br>

      <h3>Social Media</h3>
      <Socials />
    </Fade>
  </StyledContactUsSection>
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
    <Hero
      heading={heading}
      slogan={slogan}
      location={location}
      date={date}
      cta1={cta1}
      cta2={cta2}
    />
    {/* <ParallaxSkyline /> */}
    <BlurbSection
      blurbimg={Diver}
      blurbdesc={mainpitch.description}
      blurbtitle={mainpitch.title}
    />
    <CovidBanner />
    <ConferenceEvents />
    <SponsorSection featuredimage={Highlights} />
    {/* <PastSpeakersSection /> */}
    <InvolvedSection />
    <ContactUsSection />
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
