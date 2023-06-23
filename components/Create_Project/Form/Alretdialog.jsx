import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const AlertDialog = ({ open, handleClose, handleCloseForSubmit,handleCloseforshowproject ,button1 ,button2,button3 ,description}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{button1}</Button>
        <Button onClick={handleCloseforshowproject}>{button3}</Button>
        <Button onClick={handleCloseForSubmit} autoFocus>
         {button2}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
