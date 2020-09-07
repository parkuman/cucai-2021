import React from "react";
import styled from "styled-components";


  const Card = ({pic, name, desc, n}) => {
      return(
          <StyledCard>
              <img src={pic}/>
              <h3>{name}</h3>
              <p>{desc}</p>
          </StyledCard>
      )
  }

  const CardStack = () => {
      return(
          <StyledContainer>
                        <Card pic="" name="Geoffrey Hinton" desc="world renowned researcher Geoffrey Hinton, winner of the 2018 ACM A. M. Turing Award (jointly with Yoshua Bengio and Yann LeCun), discussed his most recent research efforts and gave advice to aspiring students. In a technical presentation, Dr. Hinton described his work on model distillation, a process by which the knowledge contained within larger, more complex ensembles of models can be transferred to those which are smaller and require less computation. Dr. Hinton showed that by softening the large models’ outputs, a great deal of information can be extracted from its mistakes." style = {{left: "0px"}}/>
            <Card pic="" name="Geoffrey Hinton" desc="" style = {{left: "20px"}}/>
            <Card pic="" name="Ethics in AI" desc="" style = {{left: "40px"}}/>
            <Card pic="" name="Women in AI" desc="Tania De Gasperis from Over Under Inside Out, Jenny Lemieux from Torstar, and Dr. Amy Wu from Queen’s University discussed using AI as a tool for change. The panel was moderated by our very own, Sam Dunn, a 4th year Mechanical Engineering student and QMIND’s Director of Marketing. The panel discussion revolved around the changing industries of journalism, start ups, and biomechanics, in addition to why these women were driven to pursue careers in STEM despite the societal barriers that they encounter each and every day." style = {{left: "60px"}}/>
            <Card pic="" name="Chatbots" desc="" style = {{left: "80px"}}/>
            <Card pic="" name="NLP x Game Of Thrones" desc="Alexander Scott, an Analytics Instructor at the Smith School of Business, provided an interactive workshop for delegates on natural language processing (NLP) and its importance in various industries. He went through the basic tasks required for NLP projects and explained their importance. The delegates were given the entire script of Game of Thrones as textual data to apply these techniques. The goal was to retrieve all of the lines associated with a specific character from the show. The process involved pulling the lines from a single character, cleaning the text, visualizing the words through a “word cloud” diagram, and determining the importance of each word through text vectorization. The final result was the lines for a single character, the number of lines, and the vectorization of each word.
" style = {{left: "60px"}}/>
            <Card pic="" name="Chatbots" desc="Fernando Hernandez Leiva, Data Analytics Developer at the Centre for Advanced Computing (CAC), discussed the IBM Watson Assistant and its features. CAC uses the Watson Assistant for several applications where a powerful yet easy-to-use virtual assistant is needed. The Watson assistant is able to integrate multiple data sources which creates a dynamic and efficient platform for users. Fernando taught delegates how to set up a Watson Assistant and design a custom chatbot from scratch." style = {{left: "80px"}}/>
            <Card pic="" name="a" desc="" style = {{left: "100px"}}/>
            <Card pic="" name="a" desc="" style = {{left: "120px"}}/>
          </StyledContainer>
        
      );
  }

  export default CardStack;