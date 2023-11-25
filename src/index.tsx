import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import App from './App';
import { CartProvider } from './context/CartContext';

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
      default: '#A2FF7A', // Default background color
    },
    text: {
      primary: '#FF8D29', // Default text color (dark grey)
      secondary: '#FF8D29',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Apply CssBaseline for consistent baseline styles */}

        <App />

      </ThemeProvider>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
