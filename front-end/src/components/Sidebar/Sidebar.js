import React, { Componenet } from "react";
// import "./sidebarStyles.scss";
// import Groups from './Groups';
// import Channels from "./Channels";
// import DirectMessages from './DirectMessages';
// import { Navbar, Col, Row, Nav } from "react-bootstrap";
// import { channelData, messagesData } from "../../mockData";

class Sidebar extends Componenet {
  render() {

    // we will receive groupChannels array as a prop and we will map over that prop outputing individual array elements(channels) as <li> elements 
    const channelList = this.props.groupChannels.map(channel =>
      <li key={channel.id} onClick={ () => this.props.setCurrentChannel(channel.id)}>{channel.name}</li>);
    
    // we will receive groupMembers array as a prop and we will map over that prop outputing individual array elements(members) as <li> elements
    const memberList = this.props.groupMembers.map(member =>
      <li key={member.id} onClick={ () => this.props.setDirectMessage(memberl.id)}>{member.name}</li>);

    return(
      <div>
        <ul>
          {/*Setting the group will lead to getting that groups Channel list and Member list */}
          <li onClick={() => this.props.setCurrentGroup(1)}>Group1</li>
          <li onClick={() => this.props.setCurrentGroup(2)}>Group2</li>
        </ul>
        <br/>
        <ul>
          {channelList}
        </ul>
        <ul>
          {memberList}
        </ul>
      </div>
    )
  }
}


  // <Row>
  //   <Col md="2">
  //     <Navbar bg="dark" variant="dark" className="p-0">
  //       <Nav className="flex-column align-items-start">
  //         <Nav.Link href="#">Groups</Nav.Link>
  //         <Col md={{ offset: 1 }} className="pb-3">
  //           <Nav.Link href="#">GroupList</Nav.Link>
  //         </Col>
  //         <Nav.Link href="#">Channels</Nav.Link>
  //         <Col md={{ offset: 1 }} className="pb-3">
  //           <Channels id="2" />
  //         </Col>
  //         <Nav.Link href="#">DirectMessages</Nav.Link>
  //         <Col md={{ offset: 1 }} className="pb-3">
  //           {messagesData.map(message => {
  //             if (message.channelid === 1292) {
  //               return (
  //                 <Nav.Link href="#" className="username">
  //                   {message.username}
  //                 </Nav.Link>
  //               );
  //             }
  //           })}
  //         </Col>
  //       </Nav>
  //     </Navbar>
  //   </Col>
  // </Row>
// );

export default Sidebar;
