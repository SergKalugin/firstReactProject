import React from 'react';
import s from './Nav.module.css';

const Nav = () => {
    return (
        <ul className={`${s.nav} flex-container`}>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About us</a></li>
            <li><a href='#'>Contact</a></li>
            <li><a href='#'>Blog</a></li>
        </ul>
    )
}

export default Nav;