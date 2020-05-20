import React from 'react'; 
import s from './Header.module.css';

import Nav from './Nav/Nav.jsx';
import HeaderSearch from './Search/Search.jsx';
import Profile from './Profile/Profile.jsx';
import ProfileAction from './ProfileAction/ProfileAction.jsx';

// компонента хедер
const Header = () => {
    return (
      <header className={s.header}>
        <div className={` ${s.header_container} flex-container `}>
          <div className={` ${s.header__l_col} flex-container `}>
            <img className={s.header__logo} src='https://velikorodnov.com/html/matebook/images/logo.png' />
            <HeaderSearch />
            <Nav />
          </div>
          <div className={` ${s.header__r_col} flex-container `}>
            <Profile />
            <ProfileAction />
          </div>
        </div>
      </header>
    )
  }

  export default Header;