import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { Parallax } from "react-scroll-parallax";
import Fade from "react-reveal/Fade";

//Photos
import SkylineLayers from "../img/parallaxSkyline";
import DesignImgs from "../img/designteams";
import Clouds from "../img/clouds_to_white.png";
import Diver from "../img/diver1.svg";
import Highlights from "../img/pano.png";

import FacebookIcon from "../img/social/facebook.js";
import LinkedInIcon from "../img/social/linkedin.js";
import InstagramIcon from "../img/social/instagram.js";

import CardStack from "../components/Cards";
import Layout from "../components/Layout";
import Involved from "../components/Involvement";
import ScrollToTop from "../components/ScrollToTop";

import theme from "../styles/theme";
import media from "../styles/media";
import { socialMedia } from "../config";

import Button from "../components/Button";
import styled from "styled-components";
import { Carousel } from "react-bootstrap/";

import "bootstrap/dist/css/bootstrap.min.css";

const StyledIndexPage = styled.div``;

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

  ${media.phone`
    height: 80vh;
      
  `}/* overflow: hiddden; */
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
  & button {
    margin-right: 15px;
  }
`;

const StyledHeading = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-family: ${theme.fonts.IBMPlexSansLight};
  font-size: 4rem;
  max-width: 80%;

  @media screen and (max-height: 800px) {
    max-width: 100%;
    font-size: 2rem;
  }

  ${media.phone`
      max-width: 100%;
      margin: 20px 0;
      font-size: 2rem;
  `}

  ${media.tablet`
      max-width: 90%;
      margin: 20px 0;
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

  ${media.phone`
    flex-direction: column-reverse;
    max-width: 95%;
    padding: 150px 0;

    
  `}
`;

const StyledBlurbContent = styled.div`
  width: 50%;
  margin-right: 10px;

  ${media.phone`
      width: 100%;
      margin-right: 0px;
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
  width: 48%;

  ${media.phone`
    max-width: 100%;
    width: 100%;
    
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
  width: 100%;
`;

const ProceedingsGatsbyImage = styled(Img)`
  width: 50%;

  ${media.phone`
    width:100%;
  `}
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

const StyledBlurbImg = styled.div`
  width: 50%;

  ${media.phone`
    width: 100%;
  `}
`;

const CityImg = styled.div`
  width: 100vw;
  position: absolute;
  pointer-events: none;

  bottom: -15vh;
  left: 0;

  ${media.phone`
    bottom: -5vh;

  `}
  ${media.tablet`
    bottom: -10vh;

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

  .sponsimg {
    margin: 0 auto;
    max-width: 60%;
  }

  ${media.phone`
    & > div {
      max-width: 100%;
    }
  `}
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

  & h3 {
    font-size: 1rem;
  }
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

const Hero = ({ data, heading, slogan, location, date, cta1, cta2 }) => (
  <StyledHero>
    <Fade bottom distance="80px">
      <StyledHeroContent>
        <StyledHeading>
          <Fade>{heading}</Fade>
        </StyledHeading>
        <StyledSlogan>
          Artificial intelligence, <strong>real change.</strong>
        </StyledSlogan>
        <StyledInfo>
          {location.toUpperCase()} | {date.toUpperCase()}
        </StyledInfo>

        <a href="#sponsors">
          <Button backgroundColour="white">{cta1}</Button>
        </a>
        <a href="mailto:chair@cucai.ca">
          <Button borderStyle="solid" borderColour="#174461">
            {cta2}
          </Button>
        </a>
      </StyledHeroContent>
    </Fade>

    <CityComponent data={data} />
  </StyledHero>
);

const CityComponent = ({ data }) => (
  <CityImg>
    <Img fluid={data.cityImg.childImageSharp.fluid} />
  </CityImg>
);

const BlurbSection = ({ data, blurbtitle, blurbdesc, blurbimg }) => (
  <Fade bottom distance="80px">
    <StyledBlurbSection>
      <StyledBlurbContent>
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
      </StyledBlurbContent>

      <StyledBlurbImg>
        <Img fluid={data.blurbImg.childImageSharp.fluid} />
      </StyledBlurbImg>
    </StyledBlurbSection>
  </Fade>
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
        <Link to="/covidresponse">
          <Button borderStyle="solid" borderColour="white" textColour="white">
            See Our Plans
          </Button>
        </Link>
      </CovidContent>
    </Fade>
  </StyledCovidBanner>
);

const ConferenceEvents = ({ data }) => (
  <StyledConferenceEvents>
    <IdHrefAnchor id="events" />
    <div>
      <Img
        fluid={data.eventsPano.childImageSharp.fluid}
        alt="last years highlights"
      />
      <Fade bottom distance="80px">
        <SectionTitle>Conference Events</SectionTitle>
      </Fade>
    </div>
    <ConferenceEventsList>
      <Fade bottom distance="80px">
        <DesignTeamShowcase data={data} images={DesignImgs} />
      </Fade>
      <Fade bottom distance="80px">
        <IndustryShowcase data={data} />
      </Fade>
      <Fade bottom distance="80px">
        <SpeakersShowcase data={data} />
      </Fade>
      <Fade bottom distance="80px">
        <WorkshopsShowcase data={data} />
      </Fade>
    </ConferenceEventsList>
  </StyledConferenceEvents>
);

const DesignTeamShowcase = ({ data, images }) => {
  return (
    <StyledDesignTeamShowcase>
      <DesignTeamShowcaseContent>
        <EventTitleAndDesc>
          <SectionSubtitle>Design Team Showcase</SectionSubtitle>
          <p>
            The design team showcase was the foundation on which CUCAI was
            started. This event allows the hard work and dedication of Canadian
            undergraduate students working on AI-based design projects to be
            exhibited. The “walk-through” showcase allows industry
            representatives and other delegates to learn about the work
            currently being done in the field of AI at the undergraduate level.
            This event features in-depth presentations for audiences of all
            levels of experience and backgrounds, as well as engaging and
            interactive demonstrations shifted to an online format for 30+
            design teams from across Canada.
          </p>
        </EventTitleAndDesc>
        <EventContent>
          <DesignTeamProceedings>
            <ProceedingsGatsbyImage
              fluid={data.proceedingsImg.childImageSharp.fluid}
              alt="conference proceedings"
            />

            <a href="Proceedings-of-CUCAI-2020.pdf">
              <Button borderStyle="solid" borderColour="#174461">
                2020 Proceedings PDF
              </Button>
            </a>
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

const IndustryShowcase = ({ data }) => (
  <StyledIndustryShowcase>
    <EventContent>
      <Img
        fluid={data.industryShowcaseImg.childImageSharp.fluid}
        alt="industry showcase"
      />
    </EventContent>

    <EventTitleAndDesc>
      <SectionSubtitle>Industry Showcase</SectionSubtitle>

      <p>
        As a compliment to the design team showcase, this event is designed to
        show undergraduate students what the present and future of artificial
        intelligence in industry look like. Breakout rooms for each of our
        industry partners will be set up to allow students to learn about the
        opportunities available to them within industry. Students learn about
        how technological advancements in artificial intelligence are shaping a
        wide variety of industries. The industry showcase is often a favourite
        of both industry reps and delegates due to the phenomenal networking
        opportunities.
      </p>
    </EventTitleAndDesc>
  </StyledIndustryShowcase>
);

const SpeakersShowcase = ({ data }) => (
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
      <Img
        fluid={data.speakerImg.childImageSharp.fluid}
        alt="speakers showcase"
      />
    </EventContent>
  </StyledSpeakersShowcase>
);

const WorkshopsShowcase = ({ data }) => (
  <StyledWorkshopsShowcase>
    <EventContent>
      <Img
        fluid={data.workshopsShowcaseImg.childImageSharp.fluid}
        alt="workshop showcase"
      />
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

const SponsorSection = ({ data }) => (
  <StyledSponsorSection>
    <Fade bottom distance="80px">
      <IdHrefAnchor id="sponsors" />
      <SectionTitle>Sponsors</SectionTitle>
      <p>There are many advantages to becoming a CUCAI sponsor:</p>
      <a href="CUCAI-2021-Sponsorship-Package.pdf">
        <Button borderStyle="solid">View Our Sponsorship Package</Button>
      </a>

      <br></br>
      <br></br>
      <br></br>

      <h3>Past Sponsors & Partners</h3>
      <div className="sponsimg">
        <Img fluid={data.sponsorImg.childImageSharp.fluid} alt="sponsorships" />
      </div>
    </Fade>
  </StyledSponsorSection>
);

const PastSpeakersSection = () => (
  <StyledPastSpeakersSection>
    <h2>Past Speakers and Workshops</h2>
    <CardStack></CardStack>
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
  <Fade bottom distance="80px">
    <StyledContactUsSection>
      <IdHrefAnchor id="contact" />
      <SectionTitle>Contact Us</SectionTitle>
      <h3>Email</h3>

      <a href="mailto:chair@cucai.ca">
        <Button borderStyle="solid">chair@cucai.ca</Button>
      </a>
    </StyledContactUsSection>
  </Fade>
);

export const IndexPageTemplate = ({
  data,
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
    <ScrollToTop />
    <Hero
      data={data}
      heading={heading}
      slogan={slogan}
      location={location}
      date={date}
      cta1={cta1}
      cta2={cta2}
    />
    {/* <ParallaxSkyline /> */}
    <BlurbSection
      data={data}
      blurbimg={Diver}
      blurbdesc={mainpitch.description}
      blurbtitle={mainpitch.title}
    />
    <CovidBanner />
    <ConferenceEvents data={data} />
    <SponsorSection data={data} featuredimage={Highlights} />
    <PastSpeakersSection />
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
        data={data}
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
    cityImg: file(relativePath: { eq: "CIDEE.png" }) {
      childImageSharp {
        fluid(quality: 80, maxWidth: 1500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    blurbImg: file(relativePath: { eq: "diver.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    eventsPano: file(relativePath: { eq: "pano.png" }) {
      childImageSharp {
        fluid(quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    proceedingsImg: file(relativePath: { eq: "proceedings.png" }) {
      childImageSharp {
        fluid(quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    industryShowcaseImg: file(relativePath: { eq: "Showcase_30.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    speakerImg: file(relativePath: { eq: "speakers.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    workshopsShowcaseImg: file(relativePath: { eq: "workshop_k.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sponsorImg: file(relativePath: { eq: "spons.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
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
