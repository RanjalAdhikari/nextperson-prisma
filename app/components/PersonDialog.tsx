//'use client'

import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, FilledTextFieldProps, OutlinedTextFieldProps, StandardTextFieldProps, TextFieldVariants, TextFieldProps } from '@mui/material';
import { Person } from '../lib/person';
import { Input, TextFieldProps as MuiTextFieldProps } from '@mui/material';

interface PersonDialogProps {
  open: boolean;
  handleClose: () => void;
  currentPerson: Person | null;
  setCurrentPerson: React.Dispatch<React.SetStateAction<Person | null>>;
  handleSubmit: () => void;
}

const PersonDialog: React.FC<PersonDialogProps> = ({ open, handleClose, currentPerson, setCurrentPerson, handleSubmit }) => (
  <Dialog open={open} onClose={handleClose}>
    <DialogTitle>{currentPerson ? 'Edit Person' : 'Add Person'}</DialogTitle>
    <DialogContent>
      <TextField
        autoFocus
        margin="dense"
        label="First Name"
        fullWidth
        value={currentPerson?.firstname || ''}
        onChange={e => setCurrentPerson(prev => ({ ...prev!, firstname: e.target.value }))}
      />
      <TextField
        margin="dense"
        label="Last Name"
        fullWidth
        value={currentPerson?.lastname || ''}
        onChange={e => setCurrentPerson(prev => ({ ...prev!, lastname: e.target.value }))}
      />
      <TextField
        margin="dense"
        label="Phone"
        fullWidth
        value={currentPerson?.phone || ''}
        onChange={e => setCurrentPerson(prev => ({ ...prev!, phone: e.target.value }))}
      />
        <TextField
        margin="dense"
        label="Date of Birth"
        fullWidth
        type="date"
        value={currentPerson?.dob || ''} // Provide an empty string when dob is null
        onChange={(e) => setCurrentPerson(prev => ({ ...prev!, dob: e.target.value }))} // Update dob as a string
        InputProps={{ inputProps: { min: '1900-01-01', max: '2100-12-31' } }} // Optionally set min and max values
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color="primary">
        Cancel
      </Button>
      <Button onClick={handleSubmit} color="primary">
        {currentPerson ? 'Update' : 'Add'}
      </Button>
    </DialogActions>
  </Dialog>
);

export default PersonDialog;
