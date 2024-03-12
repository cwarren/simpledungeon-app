import React from 'react';
import { Box, Grid, Typography, Button, TextField, Card, CardContent } from '@mui/material';


function GamePlay({ game }) {
    console.log('GamePlay: game:', game);

    // placeholder
    const handleAction = () => {
        console.log('Action performed');
    };

    return (
        <Grid container spacing={2} sx={{ padding: 2 }}>
          {/* Location Area */}
          <Grid item xs={8}>
            <Card sx={{ minHeight: 300, marginBottom: 2 }}>
              <CardContent>
                <Typography variant="h6">Location</Typography>
                <Typography variant="body1">
                  You are in a dark, mysterious forest. The moonlight barely penetrates the thick canopy above.
                  {/* Display more location text here. Optionally, include images as needed. */}
                </Typography>
              </CardContent>
            </Card>
    
            {/* Activity Area */}
            <Card sx={{ minHeight: 100, marginBottom: 2 }}>
              <CardContent>
                <Typography variant="h6">Activity</Typography>
                <Typography variant="body2">
                  A rustling sound nearby alerts you to the presence of something unknown...
                  {/* Display activity text here in response to actions. */}
                </Typography>
              </CardContent>
            </Card>
    
            {/* Action Area */}
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2 }}>
              <Button variant="contained" onClick={handleAction}>Perform Action</Button>
              <TextField label="Type your command" variant="outlined" />
            </Box>
          </Grid>
    
          {/* Right Column */}
          <Grid item xs={4}>
            {/* Game Data Area */}
            <Card sx={{ marginBottom: 2 }}>
              <CardContent>
                <Typography variant="h6">Game Data</Typography>
                <Typography variant="body2">Game Name: Adventure Quest</Typography>
                {/* Display more game metadata here as needed. */}
              </CardContent>
            </Card>
    
            {/* Character Area */}
            <Card>
              <CardContent>
                <Typography variant="h6">Character</Typography>
                <Typography variant="body2">Name: Eldric the Brave</Typography>
                <Typography variant="body2">Health: 100/100</Typography>
                {/* Display more character summary information here. */}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      );
}

export default GamePlay;