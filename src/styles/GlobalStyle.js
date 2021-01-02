import theme from ".//theme";
import FontFaces from "./fonts";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
${FontFaces};

html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

*,
*:before,
*:after {
   box-sizing: inherit;
}
body {
    --bg-color: "white";
    --text-color-primary: black;;
    --text-color-secondary: "gray";
    --accent-color: "blue";
    --cucai-blue: ${theme.colors.cucaiBlue};

    display: flex;
    flex-direction: column;
    margin: 0;
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
    font-family: ${theme.fonts.IBMPlexSans};
    background: var(--bg-color);
    color: var(--text-color-primary);
} 
img {
    max-width: 100%;
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
