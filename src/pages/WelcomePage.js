import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Container, Box, Typography, Button } from '@mui/material';
import axios from 'axios';

import AppHeaderBar from '../components/AppHeaderBar';
import GamesList from '../components/GamesList';
import AppFooter from '../components/AppFooter';
import ModalNewGame from '../components/ModalNewGame';

function WelcomePage() {
    const [newGameOpen, setNewGameOpen] = useState(false);
    const [newGameName, setNewGameName] = useState('');

    const nav = useNavigate();

    const handleNewGameOpen = () => {
        setNewGameName('');
        setNewGameOpen(true);
    }
    const handleNewGameClose = () => setNewGameOpen(false);
    const handleNewGameNameChange = (event) => setNewGameName(event.target.value);
    const handleNewGameSubmit = async () => {
        console.log('new game name:', newGameName);
        try {
            const response = await axios.post('http://localhost:3080/games', {
                name: newGameName
            });
    
            console.log('Game created successfully', response.data);
            nav(`/game/${response.data.insertedId}`);

        } catch (error) {
            if (error.response) {
                console.error('Failed to create game', error.response.data);
            } else if (error.request) {
                console.error('No response received', error.request);
            } else {
                console.error('Error', error.message);
            }
        }
        handleNewGameClose();
    };

    return (
        <div>
            <AppHeaderBar />
            <Container>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
                    <Button variant="contained" size="large" onClick={handleNewGameOpen} sx={{ fontSize: '1.25rem', padding: '12px 48px', marginBottom: 2, marginTop: 4 }}>
                        Start A New Adventure
                    </Button>
                </Box>
                <Typography variant="h5" component="h2" gutterBottom sx={{ marginBottom: 2 }}>
                    Your Games:
                </Typography>
                <GamesList />
            </Container>
            <AppFooter />
            
            <ModalNewGame
                open={newGameOpen}
                newGameName={newGameName}
                handleNewGameNameChange={handleNewGameNameChange}
                handleSubmit={handleNewGameSubmit}
                handleClose={handleNewGameClose}
            />
        </div>
    );
}

export default WelcomePage;
