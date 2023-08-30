import React, { useState } from 'react';
import { List, Card, CardContent, Typography, IconButton, CardActions } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link, useParams } from 'react-router-dom';
import { Box } from '@mui/system';
import NewFolder from './NewFolder';

export default function FolderList({ folders }) {
    const {folderId} = useParams();
    const [activeFolderId, setActiveFolderId] = useState(folderId);
    
    return (
        <List sx={{
            width: '100%',
            bgcolor: '#7D9D9C',
            height: '100%',
            padding: '10px',
            textAlign: 'left',
            overflowY: 'auto',
            borderRadius: '7px',
        }}
        subheader={
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography sx={{ fontWeight: 'bold', color: 'white' }}>
                    Folders
                </Typography>
                <NewFolder />
            </Box>
        }
        >
            {
            folders.map(({ id, name}) => {
                return (
                    <Link
                        key={id}
                        to={`folders/${id}`}
                        style={{
                            textDecoration: 'none',
                          }}
                        onClick={() => setActiveFolderId(id)}
                    >
                        <Card sx={{
                            mb: '5px',
                            backgroundColor:
                            id === activeFolderId ? 'rgb(255 211 140)' : null,
                            display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                        }}>
                            <CardContent sx={{ '&:last-child': { pb: '10px'}, padding: '10px'}}>
                                <Typography>
                                    {name}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ display: 'flex', alignItems: 'center' }}>
                                <IconButton sx={{ fontSize: '16px', color: 'rgba(0, 0, 0, 0.4)' }}>
                                    <DeleteIcon />
                                </IconButton>
                                <IconButton sx={{ fontSize: '16px', color: 'rgba(0, 0, 0, 0.4)' }}>
                                    <EditIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Link>
                )
            })
            }
        </List>
    )
}