import React from 'react';
import s from './LeftSidebar.module.css';

const LeftSidebar = () => {
    return(
        <div className={s.left_sidebar}>
            <nav className={s.left__sidebar_nav}>
                <a href="#s">Profile</a>
                <a href='#s'>Message</a>
                <a href='#s'>News</a>
                <a href='#s'>Music</a>
            </nav>
            <div className={s.setting}>
                <a href='#s'>Setting</a> 
            </div>
        </div>
    )
}

export default LeftSidebar;