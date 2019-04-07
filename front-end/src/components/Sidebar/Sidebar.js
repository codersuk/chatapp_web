import React from "react";
import "./sidebarStyles.scss";
// import Groups from './Groups';
import Channels from './Channels';
// import DirectMessages from './DirectMessages';
import { Navbar, Col, Row, Nav } from "react-bootstrap";
import { channelData, messagesData } from "../../mockData";

const sidebar = () => (
  <Row>
    <Col md="2">
      <Navbar bg="dark" variant="dark" className="p-0">
        <Nav className="flex-column align-items-start">
          <Nav.Link href="#">Groups</Nav.Link>
          <Col md={{ offset: 1 }} className="pb-3">
            <Nav.Link href="#">GroupList</Nav.Link>
          </Col>
          <Nav.Link href="#">Channels</Nav.Link>
          <Col md={{ offset: 1 }} className="pb-3">
            <Channels id="2"/>
          </Col>
          <Nav.Link href="#">DirectMessages</Nav.Link>
          <Col md={{ offset: 1 }} className="pb-3">
            {messagesData.map(message => {
              if (message.channelid === 1292) {
                return (
                <Nav.Link href="#" className="username">{message.username}</Nav.Link>
                );
              }
            })}
          </Col>
        </Nav>
      </Navbar>
    </Col>
  </Row>
);

export default sidebar;
