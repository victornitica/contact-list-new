import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import '../List.css';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import EditDialog from './EditDialog';

export class List extends Component {

  state = {
    items: this.props.items
  }

  updateState = (newName, newEmail, newPhone) => {
    this.state.items.name = newName;
    this.state.items.email = newEmail;
    this.state.items.phone = newPhone;
    this.forceUpdate();
  }

  render() {
    return (
      <div>
      <TableContainer component={Paper}>
        <Table className="Table">
          <TableHead>
            <TableRow className="tbl">
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.items.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{this.props.items[index].name}</TableCell>
                <TableCell>{this.props.items[index].email}</TableCell>
                <TableCell>{this.props.items[index].phone}</TableCell>
                <TableCell>
                  <EditDialog update={this.updateState} name={this.props.items[index].name} email={this.props.items[index].email} phone={this.props.items[index].phone}/>
                </TableCell>
                <TableCell align="right">
                  <Button onClick={this.props.deleteItem.bind(this, item.id)} size="small" endIcon={<DeleteIcon />} variant="contained" color="secondary">
                      Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    );
  }
}

export default List;
