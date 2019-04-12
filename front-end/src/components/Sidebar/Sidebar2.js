import React, { Component } from "react";

// this is used for a demo explanation
// please delete


class Sidebar2 extends Component {
  constructor(props) {
    super(props);
    const state = {};
    this.state = state;

    this.setChannel = this.setChannel.bind(this);
  }

  setChannel(id){
    //   pass id backup the line
    
    this.props.setCurrentChannel(id);
  }

  render() {
    return (
      <div>
        <ul>
          <li onClick={this.setChannel(2)}>Channels</li>
        </ul>
      </div>
    );
  }
}

export default Sidebar2;
