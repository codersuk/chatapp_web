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

  state = {
    GroupList: [],
    currentGroup: 0,
    channelList: [],
    currentChannel: 0,
    memberList: [],
    messageList: []
  }

  // Message List
  setMessageList = (data) => {
    // data is an array of objects
    this.setState({ messageList: data });
  }

  fetchMessageList = (ChannelId) => {
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
    this.setMessageList(data);
  }

  returnMessageList() {
    //returns the current state list.
    return this.state.messageList;
  }

  // Channel functions
  setCurrentChannel = (ChannelId) => {
    // TODO:
    // start pulling the messages for that channel
    this.fetchMessageList(ChannelId);
    this.setState({ currentChannel: ChannelId });
  }

  // return list of channel of the current group
  returnChannelList = () => {
    return this.state.channelList;
  }

  fetchChannelList = (GroupID) => {
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
  setCurrentGroup = GroupID => {
    // TODO: run a check if you have access to this group or not
    this.fetchChannelList(GroupID);
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
            // setDirectMessage= ENTER VARIABLE HERE
            // groupChannels= this.state.channelList
            // groupMembers= this.state.memberList
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
