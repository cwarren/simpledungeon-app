import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";

function AppHeaderBar() {
    const nav = useNavigate();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography onClick={()=>{nav('/')}} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    simpledungeon
                </Typography>
                <Typography variant="button" component="div">
                    Account Info Placeholder
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default AppHeaderBar;
