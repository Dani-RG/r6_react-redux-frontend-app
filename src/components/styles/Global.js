import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box
  };

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: ${({ theme }) => theme.colors.darkColor}
  }

  ul, ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  button {
    all: unset
  }
`;

export default GlobalStyles;