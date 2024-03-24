import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

import StatusPage from './pages/StatusPage';
import WelcomePage from './pages/WelcomePage';
import GamePage from './pages/GamePage';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';

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
        <Routes>
          <Route path="/status" element={<StatusPage />} />
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/game/:gameId" element={<GamePage />} />
        </Routes>
    </ThemeProvider>
  );
}

export default App;


