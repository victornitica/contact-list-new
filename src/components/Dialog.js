import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import { Formik, Form } from 'formik';
import ContactForm from './ContactForm';
import '../Dialog.css';
import CloseIcon from '@material-ui/icons/Close';

export default function FormDialog(props) {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className="new" variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleClickOpen}>
        New Contact
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle>
          Add a new contact
          <CloseIcon className="cancel" size="small" fontSize="large" onClick={handleClose} color="secondary" variant="outlined" />
        </DialogTitle>
        <DialogContent>
          <ContactForm add={props.add}/> 
        </DialogContent>
      </Dialog>
    </div>
  );
}
