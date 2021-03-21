import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import { Formik, Form } from 'formik'
import EditForm from './EditForm';

export class EditDialog extends Component {
    state = {
        open: false,
        name: this.props.name,
        email: this.props.email,
        phone: this.props.phone
    }
    handleClickOpen = () => {
        this.setState({open: true})
    };

    handleClose = () => {
        this.setState({open: false})
      };

    handleUpdate = (name, email, phone) => {
        this.state.name = name;
        this.state.email = email;
        this.state.phone = phone;
        this.props.update(this.state.name, this.state.email, this.state.phone)
    }

    render() {
        return (
            <div>
                <Button size="small" variant="outlined" color="primary" onClick={this.handleClickOpen} endIcon={<EditIcon/>}>
                    Edit
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle>
                        Edit Contact
                    <CloseIcon className="cancel" size="small" fontSize="large" onClick={this.handleClose} color="secondary" variant="outlined" />
                    </DialogTitle>
                    <DialogContent>
                        <EditForm update={this.handleUpdate} name={this.state.name} email={this.state.email} phone={this.state.phone}/>
                    </DialogContent>
                </Dialog>
            </div>
        )
    }
}

export default EditDialog
