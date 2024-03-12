import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function GameCard({ game, onDelete }) {
  console.log('GameCard: game:', game)
  console.dir(game)

  const [openDeleteConfirmDialog, setOpenDeleteConfirmDialog] = useState(false);
  const nav = useNavigate();

  function handleContinuePlaying() {
    console.log(`GameCard: handleContinuePlaying ${game.name} (${game._id})`);
    nav(`/game/${game._id}`);
  }

  function handleOpenDeleteConfirmDialog() {
    setOpenDeleteConfirmDialog(true);
  }

  function handleCloseDeleteConfirmDialog() {
    setOpenDeleteConfirmDialog(false);
  }

  async function handleDeleteGame() {
    try {
      console.log('handling game deletion');
      await axios.delete(`http://localhost:3080/games/${game._id}`);
      handleCloseDeleteConfirmDialog();
      if (onDelete) onDelete();
    } catch (error) {
      console.error('Failed to delete the game:', error);
      alert("Could not delete this game");
    }
  }

  return (
    <>
      <Card sx={{ marginBottom: 2, backgroundColor: '#424242', color: '#ffffd8' }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Typography variant="h6" component="div" sx={{color: '#ffc'}}>
                {game.name}
              </Typography>
              <Typography variant="body2" sx={{color: '#bb9', fontSize: '0.6rem'}}>
                Created: {new Date(game.created_at).toLocaleString()} (v {game.version})
              </Typography>
              <Typography variant="body2" sx={{color: '#bb9', fontSize: '0.6rem'}}>
                Last Played: {new Date(game.updated_at).toLocaleString()}
              </Typography>
              <Button label='Delete Game'
                variant="contained"
                onClick={handleOpenDeleteConfirmDialog}
                sx={{ mt: 1, minWidth: 'auto', p: '4px', lineHeight: 1, color: "#c33" }}
              >
                <DeleteIcon />
              </Button>
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

  {/* Delete Confirmation Dialog */}
  <Dialog
    open={openDeleteConfirmDialog}
    onClose={handleCloseDeleteConfirmDialog}
    aria-labelledby="game-delete-confirmation-dialog-title"
    aria-describedby="game-delete-confirmation-dialog-description"
  >
    <DialogTitle id="game-delete-confirmation-dialog-title">
      {"Confirm Game Deletion"}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="game-delete-confirmation-dialog-description">
        Are you sure you want to delete this game? This action cannot be undone.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleCloseDeleteConfirmDialog} sx={{ color: '#000', backgroundColor: '#f0f0f0', '&:hover': { backgroundColor: '#e0e0e0' } }}>
        Cancel
      </Button>
      <Button onClick={handleDeleteGame} autoFocus sx={{ color: '#fff', backgroundColor: '#d32f2f', '&:hover': { backgroundColor: '#9a0007' } }}>
        Delete
      </Button>
    </DialogActions>
  </Dialog>
</>
  );

}

export default GameCard;
