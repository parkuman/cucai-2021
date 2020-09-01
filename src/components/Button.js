import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  
  border-style: ${props => props.borderStyle ? props.borderStyle : "none"} ;
  border-width: 1px;
  background: ${props => props.backgroundColour ? props.backgroundColour : "none"};
  color: ${props => props.textColour ? props.textColour : "#174461"};
  border-color: ${props => props.borderColour ? props.borderColour : "none"};

  padding: 10px 20px;
  margin-right: 15px;
  border-radius: 7px;
  font-size: 1.2rem;
  cursor: pointer;
`;

const Button = ({ children, backgroundColour, textColour, borderColour, borderStyle }) => {
  return (
    <StyledButton textColour={textColour} borderStyle={borderStyle} borderColour={borderColour} backgroundColour={backgroundColour} >{typeof children === 'string' ? children.toUpperCase() : children}</StyledButton>
  );
}

export default Button;
