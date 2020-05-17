import React from 'react';
import './Footer'

// компонента футер
const Footer = () => {
    return(
      <footer>
        <div className='container'>
          <div className='footer-logo'>
            <a href='#s'><img src='logo.svg' /></a>
          </div>
          <ul className='nav'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About us</a></li>
            <li><a href='#'>Contact</a></li>
            <li><a href='#'>Blog</a></li>
          </ul>
        </div>
      </footer>
    )
  }

  export default Footer;