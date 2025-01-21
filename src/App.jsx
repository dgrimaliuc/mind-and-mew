import { Header, Card, Board } from './components';
import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import './styles/main.scss';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      {/* <Card /> */}
      <Board />
    </ThemeProvider>
  );
}

export default App;
