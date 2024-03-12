import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GameCard from './GameCard';
import { Box, CircularProgress, Typography } from '@mui/material'; 

function GamesList() {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get('http://localhost:3080/games');
        setGames(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to fetch games:', error);
        setError('Could not get games');
        setIsLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', padding: 3 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ padding: 3 }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  if (games.length === 0) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', padding: 3 }}>
        <h3>No games yet - go start an adventure!</h3>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 3 }}>
      {games.map(game => (
        <GameCard key={game._id} game={game} />
      ))}
    </Box>
  );
}

export default GamesList;
