import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  background: ${props => props.backgroundColour ? props.backgroundColour : "lightBlue"};
  color: ${props => props.textColour ? props.textColour : "black"};
  border-color: ${props => props.borderColour ? props.borderColour : "none"};

  padding: 10px;
`;

const Button = ({ children, backgroundColour, textColour, borderColour }) => {
  return (
    <StyledButton>{children}</StyledButton>
  );
}

export default Button;
