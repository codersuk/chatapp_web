import React, { Component } from "react";
import TextMessage from "./components/Messages/text/textMessage.js";

class Messagewindow extends Component {
  constructor(props) {
    super(props);
    const state = {
      channelid: 0,
      messageList: []
    };

    this.state = state;
  }

  componentDidMount() {
    this.setState({ messageList: this.props.returnMessageList() });
  }

  render() {
    return (
      <>
        {this.state.messageList.map((data) => {
            if(data.type = 'text'){
                return <TextMessage message={data.message} />;
            }
          
        })}
      </>
    );
  }
}
export default Messagewindow;
