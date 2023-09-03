import { IconButton, Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Delete } from '@mui/icons-material';
import { deleteFolder } from '../utils/folderUtils';
import { useParams } from 'react-router-dom';

export default function UpdateFolder() {
    const { noteId, folderId } = useParams();

    const handleDeleteFolder = async () => {    
        const data = await deleteFolder(folderId, noteId);
        console.log(`Console from DeleteFolder.jsx: `, {data});
    };

    return (
        <div>
            <Tooltip title="Delete Folder" onClick={handleDeleteFolder}>
                <IconButton 
                    sx={{
                        fontSize: '10px',
                        width: '10px',
                        color: 'white',
                        marginRight: '-4px'
                    }}
                    >
                    <Delete />
                </IconButton>
            </Tooltip>
        </div>
    )
};
