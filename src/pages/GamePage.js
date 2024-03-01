import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import AppHeaderBar from '../components/AppHeaderBar';

function GamePage() {
    const { gameId } = useParams();
    console.log('GamePage: gameId:', gameId);

    const [game, setGame] = React.useState({});

    const fetchGame = async () => {
        try {
            const response = await axios.get(`http://localhost:3080/games/${gameId}`);
            console.log('GamePage: game fetched successfully', response.data);
            setGame(response.data);
        } catch (error) {
            if (error.response) {
                // The server responded with a status code outside the 2xx range
                console.error('Failed to fetch game', error.response.data);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('No response received', error.request);
            } else {
                // Something else caused the request to fail
                console.error('Error', error.message);
            }
        }
    };

    return (
        <div>
            <AppHeaderBar />
            Game {gameId} Page coming soon...
            <div onClick={fetchGame}>Fetch Game</div>
            {game && game.name && <div>{game.name}</div>}
        </div>
    );
}

export default GamePage;