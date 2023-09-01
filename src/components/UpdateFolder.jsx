import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField, Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Edit } from '@mui/icons-material';
import { Button } from '@mui/base';
import { updateFolder } from '../utils/folderUtils'; // Assuming you have an updateFolder function
import { useSearchParams, useNavigate, useParams } from 'react-router-dom';

export default function UpdateFolder() {
    const [updatedFolderName, setUpdatedFolderName] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const {folderId} = useParams();

    const popupName = searchParams.get('popup');

    const handleOpenPopup = () => {
        setSearchParams({ popup: 'update-folder' });
    };

    const handleUpdatedFolderNameChange = (e) => {
        setUpdatedFolderName(e.target.value);
    };

    const handleClose = () => {
        setSearchParams((params) => {
          params.delete('popup'); 
          return params;
        });
        setUpdatedFolderName('');
        navigate(-1);
      };

      const handleUpdateFolder = async () => {
        const { updatedFolder } = await updateFolder(folderId, { name: updatedFolderName });
        handleClose();
      };

    useEffect(() => {
        if (popupName === 'update-folder') {
            setIsOpen(true);
            return;
        }

        setIsOpen(false);
    }, [popupName]);

    return (
        <div>
            <Tooltip title="Update Folder" onClick={handleOpenPopup}>
                <IconButton size='small'>
                    <Edit sx={{ color: 'white' }}/>
                </IconButton>
            </Tooltip>
            <Dialog open={isOpen} onClose={handleClose}>
                <DialogTitle>Update Folder</DialogTitle>
                <DialogContent>
                    <TextField 
                        autoFocus
                        margin='dense'
                        id='name'
                        label='Updated Folder Name'
                        fullWidth
                        size='small'
                        variant='standard'
                        sx={{ width: '400px' }}
                        autoComplete='off'
                        value={updatedFolderName}
                        onChange={handleUpdatedFolderNameChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleUpdateFolder}>Update</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
};
