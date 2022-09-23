import { createTheme, ThemeProvider } from '@mui/material/styles';
import { width } from '@mui/system';
import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';

// import Routes from './routes';

const THEME = createTheme({
  typography: {
    fontFamily: 'Arvo',
    fontSize: 14,
    fontWeightBold: 700,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});


function App() {
  return (
    <GlobalStyle>
      <div style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              flexDirection: 'column',
              background: 'teal',
              width: '100vh',
              height: '100vh',
            }}>
        <h1>Helllo!</h1>
      </div>
    </GlobalStyle>
  );
}

export default App;
