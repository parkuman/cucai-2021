import theme from ".//theme";
import FontFaces from "./fonts";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
${FontFaces};

html {
    box-sizing: border-box;
  }

*,
*:before,
*:after {
   box-sizing: inherit;
}
body {
    --bg-color: "white";
    --text-color-primary: "black";
    --text-color-secondary: "gray";
    --accent-color: "blue";

    display: flex;
    flex-direction: column;
    margin: 0;
    width: 100%;
    min-height: 100%;
    font-family: ${theme.fonts.IBMPlexSans};
    background: var(--bg-color);
    color: var(--text-color-primary);
} 

a {
    text-decoration: none;
    color: var(--text-color-primary);
}

a:hover {
    color: var(--accent-color);
}
`;

export default GlobalStyle;
