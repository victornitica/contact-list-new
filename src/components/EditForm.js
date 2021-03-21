import React, { Component } from 'react'
import { Formik, Form } from 'formik'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import List from './List'

export class EditForm extends Component {
    state = {
        name: this.props.name,
        email: this.props.email,
        phone: this.props.phone
    }
    onSubmit = (e) => {
        this.props.update(this.state.name, this.state.email, this.state.phone);
    }

    onChangeName = (e) => this.setState({
        name: e.target.value
    })
    onChangeEmail = (e) => this.setState({
        email: e.target.value
    })
    onChangePhone = (e) => this.setState({
        phone: e.target.value
    })
    render() {
        return (
            <div>
                <Formik 
                    initialValues={{
                    name: this.state.name,
                    email: this.state.email,
                    phone: this.state.phone,
                    }}
                    onSubmit={this.onSubmit}
                >
                <Form className="dForm">
                  <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Name"
                      type="name"
                      variant="outlined"
                      value={this.state.name}
                      onChange={this.onChangeName}
                      fullWidth
                  />
                  <TextField
                      margin="dense"
                      id="name"
                      label="Email Address"
                      type="email"
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                      variant="outlined"
                      fullWidth
                  />
                  <TextField
                      margin="dense"
                      id="name"
                      label="Phone"
                      type="phone"
                      value={this.state.phone}
                      onChange={this.onChangePhone}
                      variant="outlined"
                      fullWidth
                  />
                  <div className="addBtn">
                  <Button type="submit" color="primary" variant="contained">
                    Save
                  </Button> 
                  </div>   
                </Form>
              </Formik>
            </div>
        )
    }
}

export default EditForm