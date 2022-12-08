import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface Props {
  dialogBoxOpen: boolean;
  handleDialogBoxClose: () => void;
  handleBasketNameChange: (value : any) => void;
  handleDialogBoxCreate: () => void;
}

export default function DialogBox(props: Props) {
  return (
    <div>
      
      <Dialog open={props.dialogBoxOpen} onClose={props.handleDialogBoxClose}>
        <DialogTitle>Create a new basket</DialogTitle>
        <DialogContent>
          <DialogContentText>
            An online code editor for HTML, CSS, JavaScript code snippets in React.js
            <br/>
            <br/>
            Enter name for the code basket.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="BasketName"
            label="Basket Name"
            fullWidth
            variant="standard"
            onChange={props.handleBasketNameChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleDialogBoxClose}>Cancel</Button>
          <Button onClick={props.handleDialogBoxCreate}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
