import React from 'react'; 
import './Header.css';

// компонента хедер
const Header = () => {
    return (
      <header className='header'>
        <div className='container'>
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