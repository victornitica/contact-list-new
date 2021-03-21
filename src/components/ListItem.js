import React, { Component } from 'react'
import TableCell from '@material-ui/core/TableCell';
import { Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import '../List.css';

export class ListItem extends Component {
    render() {
        const { id, name, email, phone } = this.props.item;
        return (
            <div className="ListItem">
                <TableCell>{name}</TableCell>
                <TableCell>{email}</TableCell>
                <TableCell>{phone}</TableCell>
                <TableCell>
                    <ButtonGroup variant="contained">
                        <Button className="EditBtn" size="small" endIcon={<EditIcon />} variant="contained" color="primary">
                            Edit
                        </Button>
                        <Button size="small" endIcon={<DeleteIcon />} variant="contained" color="secondary">
                            Delete
                        </Button>
                    </ButtonGroup>
                </TableCell>
            </div>
        )
    }
}

export default ListItem
