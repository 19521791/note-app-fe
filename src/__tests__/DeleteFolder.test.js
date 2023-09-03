import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { deleteFolder } from '../utils/folderUtils';

jest.mock('../utils/folderUtils', () => ({
    deleteFolder: jest.fn(),
  }));

  test('should call deleteFolder when delete button is clicked', async () => {
    const { getByTitle } = render(<DeleteFolder />);
  
    // Simulate a click on the delete button
    fireEvent.click(getByTitle('Delete Folder'));
  
    // Wait for the deleteFolder function to be called
    await waitFor(() => {
      expect(deleteFolder).toHaveBeenCalledTimes(1);
    });
  });
