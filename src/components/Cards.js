import React from "react";
import styled from "styled-components";

const StyledCard = styled.section`
overflow: hidden;
  min-width: 25vw;
  height: 60vh;
  position: -webkit-sticky;
  position: sticky;
  left: 10vw;
  top: 5vh;
  border: 1px solid #ccc;
  box-shadow: 5px -5px 5px rgba(0, 0, 0, 0.1);
  background-color: white;
  color: #333;
  padding: 40px;
  border-radius: 10px;
  margin-bottom: 10vw;
  margin-right: 2em;
  `;

  const StyledContainer = styled.section`
  position: relative;
  overflow-x: scroll;
  height: 100vh;
  margin: 2em;
  font-family: IBMPlexSans;
  display: flex;
}
  `

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
            <Card pic="../img/aihands.png" name="Geoffrey Hinton" desc="" style = {{left: "20px"}}/>
            <Card pic="../img/designteams/showcase1.jpg" name="Ethics in AI" desc="" style = {{left: "40px"}}/>
            <Card pic="../img/designteams/showcase1.jpg" name="Women in AI" desc="" style = {{left: "60px"}}/>
            <Card pic="../img/designteams/showcase1.jpg" name="Chatbots" desc="" style = {{left: "80px"}}/>
            <Card pic="../img/designteams/showcase1.jpg" name="Natural language processing" desc="" style = {{left: "60px"}}/>
            <Card pic="../img/designteams/showcase1.jpg" name="a" desc="" style = {{left: "80px"}}/>
            <Card pic="../img/designteams/showcase1.jpg" name="a" desc="" style = {{left: "100px"}}/>
            <Card pic="../img/designteams/showcase1.jpg" name="a" desc="" style = {{left: "120px"}}/>
          </StyledContainer>
        
      );
  }

  export default CardStack;