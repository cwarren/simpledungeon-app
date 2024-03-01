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

    const /* The `nav` variable in the `WelcomePage` component is using the `useNavigate` hook from the
    "react-router-dom" library. This hook provides a function that allows you to navigate
    programmatically to different routes within your application. In this case, it is likely
    used to navigate to a new game page or another route after a new game is successfully
    created. */
    nav = useNavigate();

    const handleNewGameOpen = () => {
        setNewGameName('');
        setNewGameOpen(true);
    }
    const handleNewGameClose = () => setNewGameOpen(false);
    const handleNewGameNameChange = (event) => setNewGameName(event.target.value);
    const handleNewGameSubmit = async () => {
        console.log('Game name:', newGameName);

        try {
            const response = await axios.post('http://localhost:3080/games', {
                name: newGameName
            });
    
            console.log('Game created successfully', response.data);
            nav(`/game/${response.data.insertedId}`);
            // trigger a refresh of the game list?
            // nav to the new game page? probably this one, once that page exists

        } catch (error) {
            if (error.response) {
                // The server responded with a status code outside the 2xx range
                console.error('Failed to create game', error.response.data);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('No response received', error.request);
            } else {
                // Something else caused the request to fail
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
