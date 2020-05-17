import React from 'react';
import './LeftSidebar.css';

const LeftSidebar = () => {
    return(
        <div className="left-sidebar">
            <nav className="left--sidebar_nav">
                <a href="#s">Profile</a>
                <a href='#s'>Message</a>
                <a href='#s'>News</a>
                <a href='#s'>Music</a>
            </nav>
            <div className='setting'>
                <a href='#s'>Setting</a> 
            </div>
        </div>
    )
}

export default LeftSidebar;