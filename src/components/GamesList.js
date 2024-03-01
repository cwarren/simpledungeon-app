// GamesList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GameCard from './GameCard';
import { Box } from '@mui/material';

function GamesList() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get('http://localhost:3080/games');
        setGames(response.data);
      } catch (error) {
        console.error('Failed to fetch games:', error);
      }
    };

    fetchGames();
  }, []);

  return (
    <Box sx={{ padding: 3 }}>
      {games.map(game => (
        <GameCard key={game._id} game={game} />
      ))}
    </Box>
  );
}

export default GamesList;
