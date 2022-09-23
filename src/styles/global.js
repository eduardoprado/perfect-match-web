import { createGlobalStyle } from 'styled-components';
import { COLORS } from './colors';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${COLORS.PRIMARY};
    font-family: 
  }
`;

export default GlobalStyle;