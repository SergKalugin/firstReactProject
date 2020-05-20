import React from 'react';
import s from './Footer.module.css'

// компонента футер
const Footer = () => {
    return(
      <footer className={s.footer}>
        <div className='container'>
          <div className={s.footer_logo}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/1024px-Volkswagen_logo_2019.svg.png' />
          </div>
          <ul className={s.nav}>
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