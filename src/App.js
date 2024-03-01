import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

import StatusPage from './pages/StatusPage';
import WelcomePage from './pages/WelcomePage';
import GamePage from './pages/GamePage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#244322',
    },
    secondary: {
      main: '#3b3b3b',
    },
    background: {
      // default: '#6b6b6b',
      default: '#999',
    },
    text: {
      primary: '#141414', // Lighter shade of grey for primary text
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          color: '#eee',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#eee',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/status" element={<StatusPage />} />
          <Route path="/" element={<WelcomePage />} />
          <Route path="/game/:gameId" element={<GamePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;


