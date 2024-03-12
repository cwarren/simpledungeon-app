import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, CircularProgress, Typography } from '@mui/material'; 

import AppHeaderBar from '../components/AppHeaderBar';
import GamePlay from '../components/GamePlay';

function GamePage() {
    const { gameId } = useParams();
    console.log('GamePage: gameId:', gameId);

    const [game, setGame] = useState({});
    const [isLoading, setIsLoading] = useState(false); 
    const [error, setError] = useState(null);

    const fetchGame = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await axios.get(`http://localhost:3080/games/${gameId}`);
            console.log('GamePage: game fetched successfully', response.data);
            setGame(response.data);
        } catch (error) {
            if (error.response) {
                console.error('Failed to fetch game', error.response.data);
                setError(`Failed to fetch game ${error.response.data}`);
            } else if (error.request) {
                console.error('No response received', error.request);
                setError(`No response received ${error.request}`);
            } else {
                console.error('Error', error.message);
                setError(`Error fetching game: ${error.message}`);
            }
        }
        setIsLoading(false);
    }, []);
    
    useEffect(() => {
        fetchGame();
    }, [fetchGame]);

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
    
    // Game {gameId} Page coming soon...
    // <div onClick={fetchGame}>Fetch Game</div>
    // {game && game.name && <div>{game.name}</div>}

    return (
        <div>
            <AppHeaderBar />
            <Box sx={{ padding: 1 }}>
                <GamePlay game={game} />
            </Box>
        </div>
    );
}

export default GamePage;