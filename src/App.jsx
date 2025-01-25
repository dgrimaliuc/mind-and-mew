import { Header, Board } from './components';
import React from 'react';
import './styles/main.scss';
import { Provider } from 'react-redux';
import store from './reduxStore';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { backgroundSecondary } from 'utils';

const theme = createTheme({
  palette: {
    backgroundSecondary: backgroundSecondary,
  },
  components: {
    MuiInput: {
      styleOverrides: {
        underline: {
          '&:before': {
            borderBottomColor: backgroundSecondary, // Default border color
          },
          '&:after': {
            borderBottomColor: backgroundSecondary, // Border color when focused
          },
          '&.Mui-focused:before': {
            borderBottomColor: backgroundSecondary, // Focused border color
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Header />
        <Board />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
