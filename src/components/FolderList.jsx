import { useState } from 'react';
import { List, Card, CardContent, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { Box } from '@mui/system';
import NewFolder from './NewFolder';
import UpdateFolder from './UpdateFolder';
import DeleteFolder from './DeleteFolder';

export default function FolderList({ folders }) {
    const {folderId} = useParams();
    const [activeFolderId, setActiveFolderId] = useState(folderId);
    const [updateDialogOpen, setUpdateDialogOpen] = useState(false);
 
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
                    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <Link
                        key={id}
                        to={`folders/${id}`}
                        style={{
                            textDecoration: 'none',
                          }}
                        onClick={() => { 
                            setActiveFolderId(id); 
                        }} 
                    >
                        <Card sx={{
                            mb: '5px',
                            backgroundColor:
                            id === activeFolderId ? 'rgb(255 211 140)' : null,
                            width: '230px'
                        }}>
                            <CardContent sx={{ '&:last-child': { pb: '10px'}, padding: '10px'}}>
                                    <Typography>
                                        {name}
                                    </Typography>
                                </CardContent>
                        </Card>
                    </Link>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px'}}>
                        <UpdateFolder/>
                        <DeleteFolder />
                    </Box>
                    </Box>
                )
            })
            }
            
        </List>
    )
}