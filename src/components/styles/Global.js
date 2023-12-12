import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box
  };

  body {
    font-family: 'Poppins', sans-serif;
    background-color: ${({ theme }) => theme.colors.midColor}
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
