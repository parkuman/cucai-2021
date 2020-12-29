import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import BackgroundImg from "gatsby-background-image";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import { Carousel } from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";

//Photos
import DesignImgs from "../img/designteams";
import Diver from "../img/diver1.svg";
import Highlights from "../img/pano.png";

import CardStack from "../components/Cards";
import Layout from "../components/Layout";
import Involved from "../components/Involvement";
import ScrollToTop from "../components/ScrollToTop";
import Button from "../components/Button";
import Socials from "../components/Socials";
import Handshake from "../components/Handshake";

import theme from "../styles/theme";
import media from "../styles/media";

const StyledIndexPage = styled.div``;

const IdHrefAnchor = styled.a`
  display: block;
  position: relative;
  top: -100px;
  visibility: hidden;
`;

const StyledHero = styled(BackgroundImg)`
  width: 100%;
  /* min-height: 100vh; */
  /* You should set a background-size as the default value is "cover"! */
  background-size: contain;
  /* So we won't have the default "lightgray" background-color. */
  background-color: transparent;
  /* Now again, remember the stacking order of CSS: lowermost comes last! */
  background-repeat: no-repeat, no-repeat;
  background-position: 50% 100%, top;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 20vh;
  margin: 0 auto;
  max-width: 80%;
  height: 100vh;

  ${media.tablet`
    padding-top: 0;
    align-items: center;
    flex-direction: column-reverse;
    justify-content: center;
  `}
`;

const HeroText = styled.div`
  max-width: 70%;
  & button {
    display: inline-block;
    margin: 0 15px 15px 0;
  }

  ${media.tablet`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 100%;

    & button {
      margin-right: 0;
    }
  `}
`;

const MobileSocials = styled.div`
  display: none;

  ${media.tablet`
    display: inline-block;
  `}
`;

const HeroLogo = styled.div`
  min-width: 30%;
  min-height: 10vh;

  ${media.tablet`
    min-width: 50%;

  `}
`;

const StyledHeading = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-family: ${theme.fonts.IBMPlexSansLight};
  font-size: 3.5rem;
  max-width: 90%;
  margin-bottom: 10px;

  ${media.tablet`
    font-size: 2.8rem;
    max-width: 100%;

  `}
  ${media.phone`
    margin: 20px 0;
    font-size: 2rem;
  `}
`;

const StyledSlogan = styled.h2`
  font-weight: normal;
  font-size: 2rem;

  ${media.phone`
      font-size: 1.5rem;
  `}
`;

const StyledInfo = styled.h3`
  font-weight: normal;
  font-size: 1.5rem;
  padding: 10px 0;

  ${media.phone`
      font-size: 1.1rem;
  `}
`;

const StyledBlurbSection = styled.section`
  max-width: 80%;
  min-height: 70vh;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  ${media.tablet`
    flex-direction: column-reverse;
    justify-content: center;
    max-width: 100%;
  `}
`;

const StyledBlurbContent = styled.div`
  width: 50%;
  margin-right: 10px;

  ${media.tablet`
    width: 80%;
    margin-right: 0px;
  `}

  ${media.phone`
    padding: 5vh 0;
    width: 80%;
  `}
`;

const StyledBlurbImg = styled.div`
  width: 50%;
  ${media.phone`
    display: none;
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
    width: 80%;
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

const StyledPastSpeakersSection = styled.section`
  margin: 50px 0; 
  width: 100vw;
  background: #f8f8f8;
`;

const PastSpeakersContent = styled.div`
  max-width: 80%;
  margin: 0 auto;
  padding: 50px 0;
`;

const StyledSponsorSection = styled.section`
  & > h3 {
    text-align: center;
  }

  .sponsimg {
    margin: 0 auto;
    max-width: 50%;

    ${media.phone`
      max-width: 95%;
    `}
  }
`;

const SponsorBannerWrapper = styled.div`
  width: 100vw;
  margin-bottom: 5vh;
  background: linear-gradient(
      180deg,
      rgba(26, 79, 203, 0.5) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    #1aa9cb;
`;

const SponsorBanner = styled.div`
  max-width: 80%;
  margin: 0 auto;
  padding: 50px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  ${media.phone`
    & a {
      margin-bottom: 30px;
    }
    flex-direction: column;
    justify-content: space-between;
    max-width: 90%;
  `}
`;

const SponsorBannerContent = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  text-decoration: none;
  font-size: 1.1rem;

  & > h2 {
    margin-bottom: 20px;
  }

  & > a {
    margin-top: 20px;
  }

  ${media.phone`
    align-items: center;
    justify-content: center;
    text-align: center;
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

const Hero = ({ data, heading, slogan, location, date, cta1, cta2 }) => {
  const heroBackgroundImages = [
    data.cityImg.childImageSharp.fluid,
    `radial-gradient(
      189.82% 100% at 50% 0%,
      rgba(26, 79, 203, 0.0001) 0%,
      rgba(29, 85, 205, 0.0459233) 0%,
      rgba(33, 93, 208, 0.0977712) 10.18%,
      #65dafe 100%,
      #65dafe 100%
    ),
    linear-gradient(
      146.77deg,
      rgba(26, 169, 203, 0.25) -3.05%,
      rgba(17, 47, 66, 0.25) 100.39%,
      rgba(17, 47, 66, 0.25) 100.39%
    )`,
  ];

  return (
    <StyledHero fluid={heroBackgroundImages}>
      <StyledHeroContent>
        <HeroText>
          <StyledHeading>{heading}</StyledHeading>
          <StyledSlogan>
            Artificial intelligence, <strong>real change.</strong>
          </StyledSlogan>
          <StyledInfo>
            March 6 - 7, 2021 |{" "}
            <Link to="https://hopin.com/">Online Experience</Link>
          </StyledInfo>

          <a href="#sponsors">
            <Button backgroundColour="white">Become a Sponsor</Button>
          </a>
          <a href="mailto:chair@cucai.ca">
            <Button borderStyle="solid" borderColour="#174461">
              Email Us
            </Button>
          </a>
          <MobileSocials>
            <Socials direction="row" />
          </MobileSocials>
        </HeroText>
        <HeroLogo>
          <Img fluid={data.logo2021.childImageSharp.fluid} />
        </HeroLogo>
      </StyledHeroContent>
    </StyledHero>
  );
};

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
      <SponsorBannerWrapper>
        <SponsorBanner>
          <SponsorBannerContent>
            <SectionTitle>Become a Sponsor</SectionTitle>
            <p>
              We wouldn't be able to host our conference without the help from
              our incredible sponsors.
            </p>
            <p>
              Interested in sponsoring? Please contact our chairs at{" "}
              <u>chair@cucai.ca</u>
            </p>
            <a href="CUCAI-2021-Sponsorship-Package.pdf">
              <Button backgroundColour="white" borderStyle="none">
                View Our Sponsorship Package
              </Button>
            </a>
          </SponsorBannerContent>
          <Handshake />
        </SponsorBanner>
      </SponsorBannerWrapper>
    </Fade>

    <Fade bottom distance="80px">
      <h3>Past Sponsors & Partners</h3>
      <div className="sponsimg">
        <Img fluid={data.sponsorImg.childImageSharp.fluid} alt="sponsorships" />
      </div>
    </Fade>
  </StyledSponsorSection>
);

const PastSpeakersSection = () => (
  <StyledPastSpeakersSection>
    <PastSpeakersContent>
      <SectionTitle>Past Speakers and Workshops</SectionTitle>
      <CardStack></CardStack>
    </PastSpeakersContent>
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
    {/* <CovidBanner /> */}
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
    logo2021: file(relativePath: { eq: "logo2021.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
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
