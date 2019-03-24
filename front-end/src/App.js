import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { subscribeToTimer } from './api';

class App extends Component {
  state = {
    message: ''
  }

  getMessageHandler = e => {
    this.setState({
      message: e.target.value
    })
  }

  sendMessageHandler = () => {
    axios.post('', {}).then(res => console.log(res))
  }

  render () {
    return (
      <div className='App'>
        <Input change={this.sendMessageHandler} />
        <Button click={this.sendMessageHandler} />
      </div>
    )
  }
}

export default App
