import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    background-color: #f5f5f5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
  }

  button {
    outline: none;
    border: none;
    cursor: pointer;
  }

  input, textarea {
    font-family: 'Montserrat', sans-serif;
  }
`;

export default GlobalStyles;
