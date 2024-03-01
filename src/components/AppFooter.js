import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function AppFooter() {
    return (
        <Box sx={{ position: 'fixed', bottom: 20, left: 0, right: 0, display: 'flex', justifyContent: 'center' }}>
            <Button 
                variant="contained" 
                component={Link} 
                to="/status"
                sx={{ 
                    fontSize: '0.7rem', // Smaller font size
                    padding: '4px 8px', // Reduce padding to decrease overall size
                    minWidth: 'auto', // Override minimum width
                    height: 'auto' // Adjust height to make it smaller
                }}>
                Application Status
            </Button>
        </Box>
    );
}

export default AppFooter;


