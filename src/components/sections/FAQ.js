import React, { useState } from "react";
import styled from "styled-components";

import theme from "../../styles/theme";
import media from "../../styles/media";

import upArrow from "../../img/up-arrow.svg";

const questions = [
  {
    q: "How much do tickets cost?",
    a: `<p>Tickets cost $10 for ALL delegates. Of this price, half of it will be donated to our selected charity for this year, the
      <a target="_blank" rel="noreferrer" href="https://ai4good.org/">
          AI for Good Foundation.
        </a></p>`,
  },
  {
    q: "When is the conference taking place?",
    a: `<p>CUCAI 2021 is taking place on the weekend of March 6th and 7th. Conference events will run from from 9:00 am to 4:10 pm on Saturday, March 6th, and 9:30 am to 5:30 pm on Sunday, March 7th.</p>`,
  },
  {
    q: "Where is the conference taking place?",
    a: `<p>This year, we will be hosting CUCAI via Hopin, an online events platform, that will enable us to deliver a meaningful and engaging conference, while respecting COVID-19 restrictions on in-person gatherings.</p>`,
  },
  {
    q: "What is included with a ticket?",
    a: `<p>The purchase of a conference ticket includes access to all conference events on March 6th and 7th, as well as <strong>$40 in complimentary meals</strong> distributed via Uber Eats.</p>`,
  },
  {
    q: "When do conference applications close?",
    a: `<p>Conference applications close at 11:59 PM EST on Thursday, February 25th.</p>`,
  },
  {
    q: "How selective is the application process?",
    a: `<p>The application process this year is decided to be as inclusive as possible, in keeping with our mission to increase the accessibility of AI education at an undergraduate level. All applications that show a genuine effort and sincere passion for learning about AI will be accepted.</p>`,
  },
];

const IdHrefAnchor = styled.a`
  display: block;
  position: relative;
  top: -60px; // height of navbar
  visibility: hidden;
`;

const Section = styled.section`
  width: 100vw;
  padding: 80px 0;
  background-color: #f4f4f4;

  a {
    color: ${theme.colors.cucaiBlue};
  }
`;

const Content = styled.div`
  max-width: 80%;
  margin: 0 auto;

  ${media.phone`
    max-width: 95%;
  `}
`;

const Header = styled.h1`
  font-family: ${theme.fonts.IBMPlexSansMedium};
  font-size: 3rem;

  ${media.phone`
    font-size: 2rem;
  `}
`;

const Questions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  ${media.tablet`
    flex-direction: column;
  `}
`;

const QuestionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;

  ${media.tablet`
    width: 100%;
  `}
`;

const StyledAccordion = styled.li`
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  border-color: #cccccc;
  overflow: hidden;
  background-color: white;
  transition: ${theme.transition};

  margin: 5px 0;
  width: 100%;

  &.open {
    border-color: ${theme.colors.cucaiBlue};
  }

  &.closed {
    border-color: #cccccc;
  }

  .topBar {
    cursor: pointer;
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    transition: ${theme.transition};

    & img {
      display: inline;
      transition: ${theme.transition};
    }

    &.open {
      font-weight: bold;

      & img {
        transform: rotate(0);
      }
    }

    &.closed {
      font-weight: normal;

      & img {
        transform: rotate(180deg);
      }
    }
  }

  .topBar:hover {
    background-color: #f4f4f4;
  }

  .answerArea {
    background-color: white;
    transition: height 0.25s ease;

    &.open {
      height: 120px;

      & p {
        display: block;
        margin: 10px 20px;
      }
    }

    &.closed {
      height: 0;

      & p {
        display: none;
      }
    }
  }

  p {
    margin: 0;
    padding: 0;
  }
`;

const Accordion = ({ question }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <StyledAccordion className={`answerArea ${isOpen ? "open" : "closed"}`}>
      <div
        className={`topBar ${isOpen ? "open" : "closed"}`}
        onClick={handleClick}
      >
        <p className="question">{question.q}</p>
        <img src={upArrow} className="arrow"></img>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: question.a }}
        className={`answerArea ${isOpen ? "open" : "closed"}`}
      ></div>
    </StyledAccordion>
  );
};

const FAQ = () => {
  return (
    <>
      <IdHrefAnchor id="faq" />

      <Section>
        <Content>
          <Header>Frequently Asked Questions</Header>
          <p>
            If you have any further questions feel free to reach us at{" "}
            <a href="mailto:chair@cucai.ca">chair@cucai.ca</a>
          </p>
          <Questions>
            <QuestionList>
              {questions
                .slice(0, Math.floor(questions.length / 2))
                .map((question) => (
                  <Accordion key={question.q} question={question} />
                ))}
            </QuestionList>
            <QuestionList>
              {questions
                .slice(Math.floor(questions.length / 2))
                .map((question) => (
                  <Accordion key={question.q} question={question} />
                ))}
            </QuestionList>
          </Questions>
        </Content>
      </Section>
    </>
  );
};

export default FAQ;
