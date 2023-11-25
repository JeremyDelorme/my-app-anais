import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import App from './App';
// import ButtonComponent from '../src/components/ButtonComponent';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Josefin Sans',
      'Raleway',
      'Rubik Bubbles',
      'Tsukimi Rounded',
      'sans-serif',
    ].join(','),
  },
  palette: {
    background: {
      default: '#A2FF7A', // Define the default background color
    },
    text: {
      primary: '#FF8D29', // Set the default text color to dark grey
      secondary: '#FF8D29'
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Add CssBaseline here */}
      <App />
      {/* <ButtonComponent>Click me!</ButtonComponent> */}
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
