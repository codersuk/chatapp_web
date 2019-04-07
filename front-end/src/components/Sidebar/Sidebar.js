import React from 'react';
import './sidebarStyles.scss';
// import Groups from './Groups';
// import Channels from './Channels';
// import DirectMessages from './DirectMessages';
import { Navbar, Col, Row, Nav } from 'react-bootstrap';

const sidebar = () => (
    // <div className='sidebar'>
    //     <div className='sidebar-items'>
    //         <Groups/>
    //         <Channels/>
    //         <DirectMessages/>
    //         {/* <div className='sidebar-item sidebar-title'>Group Title</div>
    //         <div className='sidebar-item sidebar-subtitle'>Available channels:</div>
    //         <div className='sidebar-item--channel'>#channel-name</div>
    //         <div className='sidebar-item sidebar-subtitle'>Direct messages</div>
    //         <div className='sidebar-item--channel'>UserName</div> */}
    //     </div>
    // </div>

    <Row>
        <Col md='2'>
            <Navbar bg='dark' variant='dark' className='p-0'>
                <Nav className='flex-column align-items-start'>
                    <Nav.Link>Chat</Nav.Link>
                    <Nav.Link href='#'>Groups</Nav.Link>
                    <Nav.Link href='#'>Channels</Nav.Link>
                    <Nav.Link href='#'>DirectMessages</Nav.Link>
                </Nav>
            </Navbar>
        </Col>
    </Row>
);

export default sidebar;