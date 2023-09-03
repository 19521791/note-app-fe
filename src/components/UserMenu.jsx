import React, { useContext} from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Box } from '@mui/system';
import { Typography, Avatar, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';

export default function UserMenu() {
    const { user } = useContext(AuthContext);
    const [anchorEl, setAnchorEl] = useState(null);
    
    const open = Boolean(anchorEl);

    const handleLogout = () => {
        user.auth.signOut();
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    }

    return(
        <>
            <Box 
                sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    cursor: 'pointer'
                }} 
                onClick={handleClick}>
                <Typography>
                    {user.displayName}
                </Typography>
                <Avatar alt="avatar" src={user.photoURL} 
                sx={{ width: 24, height: 24, marginLeft: '7px', marginTop: '-3px'}}/>
            </Box>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </>
    )
}