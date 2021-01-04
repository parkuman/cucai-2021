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
import Highlights from "../img/pano.png";

import PastEventsCarousel from "../components/PastEventsCarousel";
import Layout from "../components/Layout";
import Involved from "../components/Involvement";
import ScrollToTop from "../components/ScrollToTop";
import Button from "../components/Button";
import Socials from "../components/Socials";
import Handshake from "../components/Handshake";
import PremierSpeakers from "../components/PremierSpeakers";
import Particles from 'react-particles-js';

import theme from "../styles/theme";
import media from "../styles/media";

const StyledIndexPage = styled.div``;

const IdHrefAnchor = styled.a`
  display: block;
  position: relative;
  top: -60px; // height of navbar
  visibility: hidden;
`;

const StyledHero = styled(BackgroundImg)`
  min-height: 100vh;
  width: 100%;
  background-size: contain;
  background-color: transparent;
  background-repeat: no-repeat, no-repeat;
  background-position: 50% 100%, top;
`;

const SectionTitle = styled.h2`
  font-family: ${theme.fonts.IBMPlexSansLight};
  font-size: 3rem;
<<<<<<< HEAD

=======
>>>>>>> e430c500e8ccd94c07ba3e6f9e4cc0f6890e1218

  ${media.phone`
    font-size: 2.5rem;
  `}

  &.medium {
    font-family: ${theme.fonts.IBMPlexSansMedium};
    display: inline;
  }
`;

const SectionSubtitle = styled.h3`
  font-family: ${theme.fonts.IBMPlexSansLight};
  color: black;
  font-size: 2.5rem;

  ${media.phone`
    font-size: 2rem;
  `}

  &.medium {
    font-family: ${theme.fonts.IBMPlexSansMedium};
    display: inline;
  }
`;

const StyledHeroContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding-top: 20vh;

  max-width: 80%;
  /* height: 100vh; */

  ${media.tablet`
    height: 80vh;
    padding-top: 120px;
    align-items: center;
    flex-direction: column-reverse;
    justify-content: center;

  `}

  ${media.phone`
    padding-top: 100px;
    max-width: 95%;
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
      margin: 0;
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
    padding-bottom: 15px;
  `}
`;

const StyledHeading = styled.h1`
  margin: 0;
  padding: 0;
  font-family: ${theme.fonts.IBMPlexSansMedium};
  font-size: 3.2rem;
  max-width: 90%;
  margin-bottom: 15px;
  color: black;

  ${media.tablet`
    font-size: 2.8rem;
    margin: 15px 0;
    max-width: 100%;

  `}
  ${media.phone`
    margin: 10px 0;
    font-size: 2rem;
  `}
`;

const StyledSlogan = styled.h2`
  font-family: ${theme.fonts.IBMPlexSansLight};
  font-size: 2rem;
  padding-top: 5px;

  ${media.phone`
      font-size: 1.5rem;
  `}
`;

const StyledInfo = styled.h3`
  font-family: ${theme.fonts.IBMPlexSansLight};
  font-size: 1.5rem;
  padding: 10px 0 20px 0;

  ${media.phone`
      font-size: 1.1rem;
  `}
`;

const HeroButtons = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  ${media.tablet`
    justify-content: center;
    margin-bottom: 20px;

    & button {
      margin: 0 5px;
    }
  `}
`;

const StyledBlurbDive = styled.div`
  margin: 25px auto;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;

  ${media.phone`
    flex-direction: column-reverse;
  `}
`;

const StyledBlurbTheme = styled.div`
  margin: 25px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${media.phone`
    flex-direction: column-reverse;
  `}
`;

const BlurbTitleAndDesc = styled.div`
  max-width: 48%;
  ${media.phone`
    max-width: 90%;
    padding: 20px 0;
  `}
`;

const BlurbContent = styled.div`
  max-width: 40%;
  width: 40%;

  ${media.phone`
    max-width: 50%;
    width: 50%;

  `}
`;

const StyledBlurbSection = styled.section`
  max-width: 80%;
  margin: 0 auto;
  padding: 50px 0;
  display: flex;
  flex-direction: column;

  ${media.tablet`
    max-width: 90%;
  `}
`;

const StyledConferenceEvents = styled.section``;

const ConferenceEventsBanner = styled.div`
  position: relative;
`;

const ConferenceEventsBannerText = styled.div`
  font-family: ${theme.fonts.IBMPlexSansLight};
  text-align: center;
  color: white;
  position: absolute;
  margin: 0 auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  & h2 {
    font-size: 5rem;
  }
  & p {
    font-style: italic;
    font-size: 1.2rem;
  }

  ${media.tablet`
  & h2 {
    font-size: 3rem;
  }
  & p {
    font-style: italic;
    font-size: 1rem;
  }
  `}

  ${media.phone`
  & h2 {
    font-size: 2rem;
  }
  & p {
    font-style: italic;
    font-size: 0.8rem;
  }
  `}
`;

const ConferenceEventsList = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  & > * {
    padding: 20px 0;
  }
`;

const EventTitleAndDesc = styled.div`
  max-width: 40%;
  ${media.phone`
    max-width: 95%;
    padding: 20px 0;
  `}
`;

const EventContent = styled.div`
  max-width: 30%;
  width: 30%;

  ${media.phone`
    max-width: 90%;
    width: 90%;

  `}
`;

const StyledDesignTeamShowcase = styled.section`
  margin: 0 auto;
  padding: 40px 0;
  display: flex;

  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  ${media.phone`
    flex-direction: column-reverse;
  `}
`;

const StyledNetworkingOpportunities = styled.section`
  margin: 0 auto;
  padding: 40px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f4f4f4;

  ${media.phone`
    flex-direction: column;
  `}
`;

const StyledWorkshopsShowcase = styled.section`
  margin: 0 auto;
  padding: 40px 0;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-evenly;
  align-items: center;

  ${media.phone`
    flex-direction: column;
  `}
`;

const StyledAIPitchComp = styled.section`
  margin: 0 auto;
  padding: 40px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f4f4f4;

  ${media.phone`
    flex-direction: column;
  `}
`;

const StyledPastEventsAndHighlights = styled.section`
  background-color: #f4f4f4;
  padding: 40px 0;
`;

const PastEventsAndHighlightsContent = styled.div`
  max-width: 80%;
  margin: 0 auto;

  ${media.phone`
    max-width: 95%;
  `}
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
  padding: 0 10px;
  margin-bottom: 5vh;
  background: linear-gradient(
      180deg,
      rgba(26, 79, 203, 0.5) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    #1aa9cb;
`;

const SponsorBanner = styled.div`
  margin: 0 auto;
  padding: 50px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  ${media.tablet`
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

  ${media.tablet`
    align-items: center;
    justify-content: center;
    text-align: center;
  `}
`;

const StyledInvolvedSection = styled.section`
  max-width: 80%;
  margin: 0 auto;
  padding: 100px 0;

  ${media.phone`
    max-width: 95%;
  `}
`;

const Hero = ({ data, heading, slogan, location, date, cta1, cta2 }) => {
  const heroBackgroundImages = [
    data.cityImg.childImageSharp.fluid,
    `linear-gradient(0deg, rgba(43,196,238,1) 0%, rgba(255,255,255,1) 100%)`,
  ];

  return (
    <StyledHero fluid={heroBackgroundImages}>
    <Particles
      params={{
        particles: {
          color: "#1aa9cb",
          line_linked: {
            color: "#1aa9cb"
          }
        },
        interactivity: {
          detectson: 'canvas',
          onhover: {
            enable: true,
            mode: 'repulse'
          },
          onclick: {
            enable: true,
            mode: 'push'
          }
        }
      }}
      style={{
        width: '100%',
        position: 'fixed'
      }}
    />
      <StyledHeroContent>
        <HeroText>
          <StyledHeading>{heading}</StyledHeading>
          <StyledSlogan>
            Artificial intelligence, <i>real change.</i>
          </StyledSlogan>
          <StyledInfo>
            March 6 - 7, 2021 |{" "}
            <Link target="_blank" to="https://hopin.com/">
              Online Experience
            </Link>
          </StyledInfo>

          <HeroButtons>
            <Link to="/taster">
              <Button backgroundColour="white">Delegate Applications</Button>
            </Link>
            <a href="#sponsors">
              <Button borderStyle="solid" borderColour="#174461">
                Become a Sponsor
              </Button>
            </a>
          </HeroButtons>

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
  <StyledBlurbSection>
    <Fade bottom distance="80px">
      <StyledBlurbDive>
        <BlurbTitleAndDesc>
          <SectionSubtitle>
            <SectionSubtitle className="medium">Dive into</SectionSubtitle> the
            world of artificial intelligence.
          </SectionSubtitle>
          <p>
            Designed to connect passionate and talented undergraduate students
            with industry trailblazers, the Canadian Undergraduate Conference on
            Artificial Intelligence (CUCAI) is a national-scale conference aimed
            to inspire the future leaders of AI.
          </p>
        </BlurbTitleAndDesc>
        <BlurbContent>
          <Img fluid={data.blurbImg.childImageSharp.fluid} />
        </BlurbContent>
      </StyledBlurbDive>
    </Fade>
    <Fade bottom distance="80px">
      <StyledBlurbTheme>
        <BlurbTitleAndDesc>
          <SectionSubtitle>
            <SectionSubtitle className="medium">Theme Reveal: </SectionSubtitle>
            AI For Good.
          </SectionSubtitle>
          <p>
            As an event geared towards future leaders in this field, we are
            thrilled to announce that our theme for this year will be AI For
            Good: Artificial Intelligence, Real Change! From advancing medical
            research to protecting the environment and aiding in natural
            disaster recovery, the ways in which AI can make the world a better
            place continue to grow. All ticket proceedings this year will go
            toward AI for Good charities.
          </p>
        </BlurbTitleAndDesc>
        <BlurbContent>
          <Img fluid={data.themeImg.childImageSharp.fluid} />
        </BlurbContent>
      </StyledBlurbTheme>
    </Fade>
  </StyledBlurbSection>
);

const ConferenceEvents = ({ data }) => (
  <StyledConferenceEvents>
    <IdHrefAnchor id="events" />
    <ConferenceEventsBanner>
      <Img
        fluid={data.eventsPano.childImageSharp.fluid}
        alt="last year's conference highlights"
      />
      <ConferenceEventsBannerText>
        <SectionTitle>
          Conference <br />
          <SectionTitle className="medium">Highlights</SectionTitle>
        </SectionTitle>
        <p>Reasons to attend the conference this year.</p>
      </ConferenceEventsBannerText>
    </ConferenceEventsBanner>
    <ConferenceEventsList>
      <Fade bottom distance="80px">
        <PremierSpeakerSection data={data} />
      </Fade>
      <Fade bottom distance="80px">
        <NetworkingOpportunities data={data} />
      </Fade>
      <Fade bottom distance="80px">
        <WorkshopsShowcase data={data} />
      </Fade>
      <Fade bottom distance="80px">
        <AIPitchComp data={data} />
      </Fade>
      <Fade bottom distance="80px">
        <DesignTeamShowcase data={data} />
      </Fade>
    </ConferenceEventsList>
  </StyledConferenceEvents>
);

const StyledPremierSpeakerSection = styled.section`
  margin: 0 auto;
  padding: 40px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  ${media.phone`
    flex-direction: column-reverse;
  `}
`;

const PremierSpeakerSection = () => {
  return (
    <>
      <StyledPremierSpeakerSection>
        <EventTitleAndDesc>
          <SectionSubtitle>
            <SectionSubtitle className="medium">
              Premier Speaker{" "}
            </SectionSubtitle>
            <br />
            Presentations
          </SectionSubtitle>
          <p>
            Speaker presentations from leaders in academia and industry have
            been a cornerstone of CUCAI since its inaugural year. These
            components of the conference empower delegates to learn from the
            ideas, experiences and knowledge of these professionals as they
            discuss a variety of fascinating AI topics.
          </p>
        </EventTitleAndDesc>
        <EventContent>
          <PremierSpeakers />
        </EventContent>
      </StyledPremierSpeakerSection>
    </>
  );
};

const DesignTeamShowcase = ({ data }) => {
  return (
    <StyledDesignTeamShowcase>
      <EventTitleAndDesc>
        <SectionSubtitle>
          <SectionSubtitle className="medium">Design Team</SectionSubtitle>
          <br />
          Showcase
        </SectionSubtitle>
        <p>
          The design team showcase was the foundation on which CUCAI was
          started. This event features in-depth presentations for audiences of
          all levels of experience and backgrounds, as well as engaging and
          interactive demonstrations shifted to an online format for 30+ design
          teams from across Canada.
        </p>
        <a href="Proceedings-of-CUCAI-2020.pdf">
          <Button borderStyle="solid" borderColour="#174461">
            Download the 2020 Proceedings
          </Button>
        </a>
      </EventTitleAndDesc>
      <EventContent>
        <Img
          fluid={data.proceedingsImg.childImageSharp.fluid}
          alt="conference proceedings"
        />
      </EventContent>
    </StyledDesignTeamShowcase>
  );
};

const NetworkingOpportunities = ({ data }) => (
  <StyledNetworkingOpportunities>
    <EventContent>
      <Img
        fluid={data.networkingOpportunitiesImg.childImageSharp.fluid}
        alt="student conversing with industry professional"
      />
    </EventContent>

    <EventTitleAndDesc>
      <SectionSubtitle>
        <SectionSubtitle className="medium">
          Exclusive Networking
        </SectionSubtitle>
        <br />
        Opportunities
      </SectionSubtitle>

      <p>
        Exciting events throughout the conference designed to show undergraduate
        students the present and future of AI in industry. New to CUCAI 2021, we
        are hosting a Taster Event on January 23, 2021, to connect students to
        our exclusive recruitment pipeline prior to the March conference.{" "}
        <Link to="/taster">Learn more...</Link>
      </p>
    </EventTitleAndDesc>
  </StyledNetworkingOpportunities>
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
      <SectionSubtitle>
        <SectionSubtitle className="medium">
          Interactive Workshop
        </SectionSubtitle>
        <br />
        Sessions
      </SectionSubtitle>
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

const AIPitchComp = ({ data }) => (
  <StyledAIPitchComp>
    <EventContent>
      <Img
        fluid={data.aiPitchCompImg.childImageSharp.fluid}
        alt="workshop showcase"
      />
    </EventContent>
    <EventTitleAndDesc>
      <SectionSubtitle>
        <SectionSubtitle className="medium">AI Pitch</SectionSubtitle>
        <br />
        Competition
      </SectionSubtitle>
      <p>
        Come see promising early-stage student startups compete for a $10,000
        prize pool! All the student ventures competing in the event leverage the
        power of AI to bring new and exciting business solutions to reality.
      </p>
    </EventTitleAndDesc>
  </StyledAIPitchComp>
);

const SponsorSection = ({ data }) => (
  <StyledSponsorSection>
    <Fade bottom distance="80px">
      <IdHrefAnchor id="sponsors" />
      <SponsorBannerWrapper>
        <SponsorBanner>
          <SponsorBannerContent>
            <SectionTitle className="medium">Become a Sponsor</SectionTitle>
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
  </StyledSponsorSection>
);

const PastEventsAndHighlights = () => (
  <Fade bottom distance="80px">
    <StyledPastEventsAndHighlights>
      <PastEventsAndHighlightsContent>
        <SectionTitle className="medium">Past Events & Highlights</SectionTitle>
        <br />
        <PastEventsCarousel />
      </PastEventsAndHighlightsContent>
    </StyledPastEventsAndHighlights>
  </Fade>
);

const InvolvedSection = () => (
  <StyledInvolvedSection>
    <Fade bottom distance="80px">
      <IdHrefAnchor id="involvement" />
      <SectionTitle className="medium">Get Involved</SectionTitle>
      <Involved />
    </Fade>
  </StyledInvolvedSection>
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
    <BlurbSection data={data} />
    <ConferenceEvents data={data} />
    <PastEventsAndHighlights data={data} />

    <SponsorSection data={data} featuredimage={Highlights} />
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
    themeImg: file(relativePath: { eq: "aiforgood.png" }) {
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
    networkingOpportunitiesImg: file(
      relativePath: { eq: "networkingOpportunitiesImg.png" }
    ) {
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
    workshopsShowcaseImg: file(relativePath: { eq: "workshopImg.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    aiPitchCompImg: file(relativePath: { eq: "aiPitchCompImg.png" }) {
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
