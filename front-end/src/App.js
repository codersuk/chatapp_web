import React, { Component } from 'react'
import './App.scss'
import Input from './components/Input/Input'
import Button from './/components/Button/Button'
import Sidebar from './components/Sidebar/Sidebar';

class App extends Component {
  state = {
    message: ''
  }

  getMessageHandler = e => {
    this.setState({
      message: e.target.value
    })
  }


  sendMessageHandler = () => {}

  render () {
    return (
      <div className='App'>
        <Sidebar/>
        <Input change={this.getMessageHandler} />
        <Button click={this.sendMessageHandler} />
      </div>
    )
  }
}

export default App
