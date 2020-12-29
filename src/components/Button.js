import React from 'react';
import styled from 'styled-components';

import media from "../styles/media";
import theme from "../styles/theme";

const StyledButton = styled.button`
  border-style: ${props => props.borderStyle ? props.borderStyle : "none"} ;
  border-width: 1px;
  background: ${props => props.backgroundColour ? props.backgroundColour : "none"};
  color: ${props => props.textColour ? props.textColour : "#174461"};
  border-color: ${props => props.borderColour ? props.borderColour : "none"};

  transition: ${theme.transition};

  padding: 0.7rem 1rem;
  border-radius: 35px;
  font-size: 1.2rem;
  cursor: pointer;

  & * {
    color: ${props => props.textColour ? props.textColour : "#174461"};
  }

  &:hover {

    background: ${props => props.backgroundColourHover ? props.backgroundColourHover : props.backgroundColour};
    color: ${props => props.textColourHover ? props.textColourHover : props.textColour};
    transform: scale(1.1,1.1);
    
    & * {
      text-decoration: none;
    }
  }

  ${media.phone`
      font-size: 0.8rem;
  `}
`;

const Button = ({ children, backgroundColour, textColour, backgroundColourHover, textColourHover, borderColour, borderStyle }) => {
  return (
    <StyledButton textColour={textColour} textColourHover={textColourHover} backgroundColourHover={backgroundColourHover} borderStyle={borderStyle} borderColour={borderColour} backgroundColour={backgroundColour} >{typeof children === "string" ? children.toUpperCase() : children}</StyledButton>
  );
}

export default Button;
