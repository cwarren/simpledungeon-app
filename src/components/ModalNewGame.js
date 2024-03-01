import React, { useEffect, useRef, useState } from 'react';
import { Modal, TextField, Button, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function ModalNewGame({ open, newGameName, handleNewGameNameChange, handleSubmit, handleClose }) {
    const theme = useTheme();
    // Create a ref for the TextField
    const inputRef = useRef(null);

    const [safeToProceed, setSafeToProceed] = useState(false);

    // Use useEffect to set the focus when the modal is opened, because the autofocus attribute on the text field isn't working :(
    useEffect(() => {
        setSafeToProceed(false);
        if (open) {
            // Wait for the modal to be fully open and then focus the input
            const timer = setTimeout(() => {
                inputRef.current?.focus();
            }, 90); // Adjust delay as needed

            return () => clearTimeout(timer);
        }
    }, [open]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Enter' && safeToProceed) {
                event.preventDefault();
                handleSubmit();
            } else if (event.key === 'Escape') {
                event.preventDefault();
                handleClose();
            }
        };

        if (open) {
            document.addEventListener('keydown', handleKeyDown); 
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [open, handleSubmit, handleClose]);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="new-game-modal-title"
            aria-describedby="new-game-modal-description"
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Box sx={{ 
                width: '50vw',
                maxWidth: '600px',
                p: 4, 
                bgcolor: 'background.default',
                color: 'text.primary',
                borderRadius: 1,
                display: 'flex',
                flexDirection: 'column',
            }}>
                <TextField
                    margin="dense"
                    id="name"
                    label="Adventurer's Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={newGameName}
                    onChange={e => {setSafeToProceed(e.target.value.length > 1); handleNewGameNameChange(e);}}
                    InputLabelProps={{
                        style: { color: theme.palette.text.primary },
                    }}
                    inputRef={inputRef}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                    <Button onClick={handleClose} variant="outlined">nevermind...</Button>
                    <Button onClick={handleSubmit} variant="contained" disabled={!safeToProceed}>Set Forth!</Button>
                </Box>
            </Box>
        </Modal>
    );
}

export default ModalNewGame;
