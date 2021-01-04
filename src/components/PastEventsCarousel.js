import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";

import media from "../styles/media";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cards = [
  {
    title: "Geoffrey Hinton",
    text:
      "World renowned researcher Geoffrey Hinton, winner of the 2018 ACM A. M. Turing Award (jointly with Yoshua Bengio and Yann LeCun), discussed his most recent research efforts and gave advice to aspiring students. In a technical presentation, Dr. Hinton described his work on model distillation, a process by which the knowledge contained within larger, more complex ensembles of models can be transferred to those which are smaller and require less computation. Dr. Hinton showed that by softening the large models’ outputs, a great deal of information can be extracted from its mistakes.",
  },
  {
    title: "Women in AI",
    text:
      "Tania De Gasperis from Over Under Inside Out, Jenny Lemieux from Torstar, and Dr. Amy Wu from Queen’s University discussed using AI as a tool for change. The panel was moderated by our very own, Sam Dunn, a 4th year Mechanical Engineering student and QMIND’s Director of Marketing. The panel discussion revolved around the changing industries of journalism, start ups, and biomechanics, in addition to why these women were driven to pursue careers in STEM despite the societal barriers that they encounter each and every day.",
  },
  {
    title: "NLP x Game of Thrones",
    text:
      " Alexander Scott, an Analytics Instructor at the Smith School of Business, provided an interactive workshop for delegates on natural language processing (NLP) and its importance in various industries. He went through the basic tasks required for NLP projects and explained their importance. The delegates were given the entire script of Game of Thrones as textual data to apply these techniques. The goal was to retrieve all of the lines associated with a specific character from the show. The process involved pulling the lines from a single character, cleaning the text, visualizing the words through a “word cloud” diagram, and determining the importance of each word through text vectorization. The final result was the lines for a single character, the number of lines, and the vectorization of each word. ",
  },
  {
    title: "How to Build a Chatbot",
    text:
      "Fernando Hernandez Leiva, Data Analytics Developer at the Centre for Advanced Computing (CAC), discussed the IBM Watson Assistant and its features. CAC uses the Watson Assistant for several applications where a powerful yet easy-to-use virtual assistant is needed. The Watson assistant is able to integrate multiple data sources which creates a dynamic and efficient platform for users. Fernando taught delegates how to set up a Watson Assistant and design a custom chatbot from scratch.",
  },
  {
    title: "Multifaceted Idea Generation",
    text:
      "In a Sunday afternoon workshop, William Gilroy-Briand, a Consulting Analyst at Accenture, challenged 50 delegates to tackle several different issues using a variety of AI techniques, including machine vision and sentiment analysis. These issues were topical for students as they primarily pertained to on-campus problems, such as mental health resources and the enhancement of lectures. After a unique idea generation phase, students narrowed down their potential solutions and presented them to the other groups.",
  },
  {
    title: "Ethics in AI",
    text:
      "Prior to lunch on Sunday, four AI industry experts alongside Jeremy Kulchyk, QMIND’s Director of Research, took the stage to discuss the ethical aspects of artificial intelligence. Rishi Behari, Associate Director of MMAI, Shelley Lineham, Executive Consultant for cShell Consulting Inc., Sheila McIlraith, Computer Science Professor at the University of Toronto, and Behzad Sarmadi, Senior Design Researcher at Element AI, conversed on several topics such as inherent gender and racial bias, and the future of smart cities. The conversations were thought-provoking and controversial, and will certainly be applicable for delegates as they make difficult decisions in their upcoming careers.",
  },
];

const StyledCard = styled.div`
  padding: 2em;
  background-color: white;
  margin: 1.5em;
  border-radius: 10px;
  -webkit-box-shadow: 4px 5px 8px -4px rgba(186, 186, 186, 1);
  -moz-box-shadow: 4px 5px 8px -4px rgba(186, 186, 186, 1);
  box-shadow: 4px 5px 8px -4px rgba(186, 186, 186, 1);

  ${media.tablet`
    margin: 1.5em 0.3em 0 0.3em;

  `}
`;

const Card = ({ event }) => {
  return (
    <StyledCard>
      <h3>{event.title}</h3>
      <p>{event.text}</p>
    </StyledCard>
  );
};

class PastEventsCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      speed: 500,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          {cards.map((event, i) => (
            <Card event={event} key={i} />
          ))}
        </Slider>
      </div>
    );
  }
}

export default PastEventsCarousel;
