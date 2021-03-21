import './App.css';
import React, { Component } from 'react';
import List from './components/List';
import { v4 as uuidv4 } from 'uuid';

import Dialog from './components/Dialog'

class App extends Component {
  state = {
    items: []
  }

  addContact = (name, email, phone) => {
    const newItem = {
      id: uuidv4(),
      name,
      email,
      phone
    }
    if(name !== '' && email !== '' && phone !== '') 
    {
      this.setState({ items: [...this.state.items, newItem] });
    }
    else {
      alert("Please fill in all fields")
    }
    
  }

  deleteItem = (id) => {
    this.setState( { items: [...this.state.items.filter(item => item.id !== id)] });
  }

  render() {
    return (
      <div className="App">
        
        <Dialog add={this.addContact} />
        <List items={this.state.items} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
