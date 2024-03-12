import React from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

function GameCard({ game }) {
  console.log('GameCard: game:', game)
  console.dir(game)

  const nav = useNavigate();

  function handleContinuePlaying() {
    console.log(`GameCard: handleContinuePlaying ${game.name} (${game._id})`);
    nav(`/game/${game._id}`);
  }

  return (
    <Card sx={{ 
        marginBottom: 2, 
        backgroundColor: '#424242', // Dark grey background
        color: '#ffffd8', // Light yellow text
        // '&:hover': {
        //   backgroundColor: '#494949', // Lighter grey background on hover
        // },
      }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Typography variant="h6" component="div" sx={{color: '#ffc'}}>
              {game.name}
            </Typography>
            <Typography variant="body2" sx={{color: '#bb9'}}>
              Created: {new Date(game.created_at).toLocaleString()}
            </Typography>
            <Typography variant="body2" sx={{color: '#bb9'}}>
              Last Played: {new Date(game.updated_at).toLocaleString()}
            </Typography>
            <Typography variant="body2" sx={{color: '#bb9'}}>
              Game Version: {game.version}
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <Typography variant="body2" sx={{marginTop: 2, color: '#ffc'}}>
              {game.adventureLog}
            </Typography>
          </Grid>
          <Grid item xs={2} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Button variant="contained" onClick={handleContinuePlaying} sx={{ backgroundColor: '#244322', color: '#eee', '&:hover': { backgroundColor: '#1e2e20' } }}>
              Continue<br/>Playing
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default GameCard;
