import React from 'react';
import './sidebarStyles.scss';
import Groups from './Groups';
import Channels from './Channels';
import DirectMessages from './DirectMessages';

const sidebar = () => (
    <div className='sidebar'>
        <div className='sidebar-items'>
            <Groups/>
            <Channels/>
            <DirectMessages/>
            {/* <div className='sidebar-item sidebar-title'>Group Title</div>
            <div className='sidebar-item sidebar-subtitle'>Available channels:</div>
            <div className='sidebar-item--channel'>#channel-name</div>
            <div className='sidebar-item sidebar-subtitle'>Direct messages</div>
            <div className='sidebar-item--channel'>UserName</div> */}
        </div>
    </div>
);

export default sidebar;