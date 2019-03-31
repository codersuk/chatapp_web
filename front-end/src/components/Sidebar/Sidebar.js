import React from 'react';
import './sidebarStyles.scss';

const sidebar = () => (
    <div className='sidebar'>
        <div className='sidebar__items'>
            <div className='sidebar__item'>
                Workspace Title
            </div>
            <div className='sidebar__item'>
                Available chanels:
                <ul className='sidebar__item--chanel-list'>
                    <li className='sidebar__item--chanel'>#chanel-name</li>
                </ul>
            </div>
        </div>
    </div>
);

export default sidebar;