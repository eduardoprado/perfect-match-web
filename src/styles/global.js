import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body, input, button {
    font-family: 'Montserrat', sans-serif;
    color: #f1f1f1
  }
  button {
    cursor: pointer;
  }
`;