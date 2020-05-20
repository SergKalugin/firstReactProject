import React from 'react'; 
import Nav from './Nav';
import HeaderSearch from './Search';
import Profile from './Profile';
import './Header.css';

// компонента хедер
const Header = () => {
    return (
      <header className='header'>
        <div className='header-container flex-container'>
          <div className='header__l-col'>
            <img className='header__logo' src='https://velikorodnov.com/html/matebook/images/logo.png' />
            <HeaderSearch />
            <Nav/>
          </div>
          <div className='header__r-col'>
            <Profile/>
          </div>
        </div>
      </header>
    )
  }

  export default Header;