import React from 'react'; 
import './Header.css';

// компонента хедер
const Header = () => {
    return (
      <header className='header'>
        <div className='container'>
          <img className='header-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/1024px-Volkswagen_logo_2019.svg.png' />
          <ul className='nav'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About us</a></li>
            <li><a href='#'>Contact</a></li>
            <li><a href='#'>Blog</a></li>
          </ul>
        </div>
      </header>
    )
  }

  export default Header;