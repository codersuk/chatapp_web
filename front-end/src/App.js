import React, { Component } from 'react'
import axios from 'axios'
import Input from './Input/Input'
import Button from './Button/Button'

import './App.css'

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
