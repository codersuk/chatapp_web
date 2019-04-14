import React, { Component } from "react";

//import Bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//import css
import "./App.scss";

//Import components
import MessageWindow from "./components/Messages/MessageWindow/messageWindow";
import Sidebar from "./components/Sidebar/Sidebar";

class App extends Component {
  constructor(props) {
    super(props);
    // Define the state variables
    const state = {
      channelList: [],
      currentChannel: 0,
      GroupList: [],
      currentGroup: 0,
      messageList: []
    };
    // set the state
    this.state = state;

    // register the functions so that we can pass it down the properties
    // bind message functions
    this.setMessageList = this.setMessageList.bind(this);
    this.fetchMessageList = this.fetchMessageList.bind(this);
    this.returnMessageList = this.returnMessageList.bind(this);

    // TODO: pass these functions down into the Sidebar component to manage the channels/groups
    // bind channel functions
    this.setCurrentChannel = this.setCurrentChannel.bind(this);
    this.fetchChannelList = this.fetchChannelList.bind(this); //fetch list from an API
    this.returnChannelList = this.returnChannelList.bind(this);

    // bind the group Functions
    this.setCurrentGroup = this.setCurrentGroup.bind(this); //required for the main app.js
  }


  // Message List
  setMessageList(data) {
    // data is an array of objects
    this.setState({ messageList: data });
  }

  fetchMessageList(ChannelId) {
    // run a fetch data
    // TODO: fetch data from the API using the Channel ID
    // delete the switch in the future
    switch (ChannelId) {
      case 1:
        const data = [
          {
            userid: 22,
            username: "username",
            channelid: 1292,
            message: "hello world",
            type: "text",
            timestamp: 192312031092
          }
        ];
        break;
      default:
        const data = [
          {
            userid: 22,
            username: "username",
            channelid: 1292,
            message: "hello world",
            type: "text",
            timestamp: 192312031092
          },
          {
            userid: 22,
            username: "username",
            channelid: 1292,
            message: "hello world",
            type: "text",
            timestamp: 192312031092
          },
          {
            userid: 22,
            username: "username",
            channelid: 1292,
            message: "hello world",
            type: "text",
            timestamp: 192312031092
          },
          {
            userid: 22,
            username: "username",
            channelid: 1292,
            message: "hello world",
            type: "text",
            timestamp: 192312031092
          },
          {
            userid: 22,
            username: "username",
            channelid: 1292,
            message: "hello world",
            type: "text",
            timestamp: 192312031092
          }
        ];
    }

    // set the message list with the information we have.
    setMessageList(data);
  }

  returnMessageList() {
    //returns the current state list.
    return this.state.messageList;
  }

  // Channel functions
  setCurrentChannel(ChannelId) {
    // TODO: update the title of the application
    // start pulling the messages for that channel
    fetchMessageList(ChannelId);
    this.setState({ currentChannel: ChannelId });
  }

  // return list of channel of the current group
  returnChannelList() {
    return this.state.channelList;
  }

  fetchChannelList(GroupID) {
    // TODO: fetch the channel list for a given group

    // delete the switch below
    switch (GroupID) {
      case 1:
      default:
        const channelList = [
          {
            name: "nameOfGroup",
            groupid: 1,
            description: "if any description here",
            timestamp: 120020200
          },
          {
            name: "nameOfGroup",
            groupid: 1,
            description: "if any description here",
            timestamp: 120020200
          },
          {
            name: "nameOfGroup",
            groupid: 1,
            description: "if any description here",
            timestamp: 120020200
          },
          {
            name: "nameOfGroup",
            groupid: 1,
            description: "if any description here",
            timestamp: 120020200
          },
          {
            name: "nameOfGroup",
            groupid: 1,
            description: "if any description here",
            timestamp: 120020200
          },
          {
            name: "nameOfGroup",
            groupid: 1,
            description: "if any description here",
            timestamp: 120020200
          },
          {
            name: "nameOfGroup",
            groupid: 1,
            description: "if any description here",
            timestamp: 120020200
          },
          {
            name: "nameOfGroup",
            groupid: 1,
            description: "if any description here",
            timestamp: 120020200
          }
        ];
    }

    this.setState({ channelList: channelList });
  }

  // group functions
  // set the current group function
  setCurrentGroup(GroupID) {
    // TODO: run a check if you have access to this group or not
    fetchChannelList(GroupID);
    this.setState({ currentGroup: GroupID });
  }

  render() {
    // TODO: change the template CSS
    return (
      <Row>
        <Col md="3">
          <Sidebar
            setCurrentChannel={this.setCurrentChannel}
            setCurrentGroup={this.setCurrentGroup}
            
          />
        </Col>
        <Col md="9">
          <MessageWindow
            returnMessageList={this.returnMessageList}
            messageList={this.state.messageList}
          />
        </Col>
      </Row>
    );
  }
}

export default App;
