import React from "react";
import styled from "styled-components";
import { Card, CardDeck, Carousel, Row } from 'react-bootstrap'

const StyledCardWrapper = styled.div`
position: relative;
  overflow-x: scroll;
  padding: 2em;
  height: 100vh;
  margin: 0 auto;
  display: -webkit-box;
  display: flex;
}
  `;


const StyledCard = styled(Card)`
  overflow: hidden;
  min-width: 30vw;
  height: 60vh;
  position: -webkit-sticky;
  position: sticky;
  left: 0vw;
  top: 5vh;
  border: 1px solid #ccc;
  box-shadow: 5px -5px 5px rgba(0, 0, 0, 0.1);
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  margin-bottom: 10vw;
  margin-right: 5vw;
  `;

const CardStack = () => {
  return (
    <Carousel>

      <Carousel.Item>
        <CardDeck>

          <Card>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Geoffrey Hinton</Card.Title>
              <Card.Text>World renowned researcher Geoffrey Hinton, winner of the 2018 ACM A. M. Turing Award (jointly with Yoshua Bengio and Yann LeCun), discussed his most recent research efforts and gave advice to aspiring students. In a technical presentation, Dr. Hinton described his work on model distillation, a process by which the knowledge contained within larger, more complex ensembles of models can be transferred to those which are smaller and require less computation. Dr. Hinton showed that by softening the large models’ outputs, a great deal of information can be extracted from its mistakes.
        </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Women in AI</Card.Title>
              <Card.Text>Tania De Gasperis from Over Under Inside Out, Jenny Lemieux from Torstar, and Dr. Amy Wu from Queen’s University discussed using AI as a tool for change. The panel was moderated by our very own, Sam Dunn, a 4th year Mechanical Engineering student and QMIND’s Director of Marketing. The panel discussion revolved around the changing industries of journalism, start ups, and biomechanics, in addition to why these women were driven to pursue careers in STEM despite the societal barriers that they encounter each and every day.
     </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>NLP x Game of Thrones</Card.Title>
              <Card.Text>
                Alexander Scott, an Analytics Instructor at the Smith School of Business, provided an interactive workshop for delegates on natural language processing (NLP) and its importance in various industries. He went through the basic tasks required for NLP projects and explained their importance. The delegates were given the entire script of Game of Thrones as textual data to apply these techniques. The goal was to retrieve all of the lines associated with a specific character from the show. The process involved pulling the lines from a single character, cleaning the text, visualizing the words through a “word cloud” diagram, and determining the importance of each word through text vectorization. The final result was the lines for a single character, the number of lines, and the vectorization of each word.
        </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </Carousel.Item>

      <Carousel.Item>
        <CardDeck>

          <Card>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>How to Build a Chatbot</Card.Title>
              <Card.Text>
                Fernando Hernandez Leiva, Data Analytics Developer at the Centre for Advanced Computing (CAC), discussed the IBM Watson Assistant and its features. CAC uses the Watson Assistant for several applications where a powerful yet easy-to-use virtual assistant is needed. The Watson assistant is able to integrate multiple data sources which creates a dynamic and efficient platform for users. Fernando taught delegates how to set up a Watson Assistant and design a custom chatbot from scratch.
  </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Multifaceted Idea Generation</Card.Title>
              <Card.Text>
                In a Sunday afternoon workshop, William Gilroy-Briand, a Consulting Analyst at Accenture, challenged 50 delegates to tackle several different issues using a variety of AI techniques, including machine vision and sentiment analysis. These issues were topical for students as they primarily pertained to on-campus problems, such as mental health resources and the enhancement of lectures. After a unique idea generation phase, students narrowed down their potential solutions and presented them to the other groups.</Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Ethics in AI</Card.Title>
              <Card.Text>
                Prior to lunch on Sunday, four AI industry experts alongside Jeremy Kulchyk, QMIND’s Director of Research, took the stage to discuss the ethical aspects of artificial intelligence. Rishi Behari, Associate Director of MMAI, Shelley Lineham, Executive Consultant for cShell Consulting Inc., Sheila McIlraith, Computer Science Professor at the University of Toronto, and Behzad Sarmadi, Senior Design Researcher at Element AI, conversed on several topics such as inherent gender and racial bias, and the future of smart cities. The conversations were thought-provoking and controversial, and will certainly be applicable for delegates as they make difficult decisions in their upcoming careers.
  </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </Carousel.Item>

    </Carousel>

  );
}

const Cards = () => {
  return (
    <StyledCardWrapper>

    </StyledCardWrapper>

  );
}

export default CardStack;
