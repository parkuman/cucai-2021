import React from "react";
import styled from "styled-components";

const StyledCard = styled.section`

overflow: hidden;
  min-width: 50vw;
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
  margin-right: 20vw;
  `;

  const StyledContainer = styled.section`
  position: relative;
  overflow-x: scroll;
  left: 40px;
  height: 100vh;
  margin: 0 auto;
  font-family: IBMPlexSans;
  display: flex;
}
  `

  const Card = ({pic, name, desc, n}) => {
      return(
          <StyledCard style = {{left: 20*n}}>
              <img src={pic}/>
              <h3>{name}</h3>
              <p>{desc}</p>
          </StyledCard>
      )
  }

  const CardStack = () => {
      return(
          <StyledContainer>
            <StyledCard pic="" name="" desc="" n="20"/>
          </StyledContainer>
        
      );
  }

  export default CardStack;