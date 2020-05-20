import React from 'react';
import './App.css';

import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';

import LeftSidebar from './LeftSidebar/LeftSidebar.jsx';
import MainContant from './MainContent/MainContant.jsx';

const App = () => {
  return ( 
    <div className='app-wrapper'>      
      <Header />   
      <div className='container flex-container'>
        <LeftSidebar />  
        <MainContant /> 
      </div>  
      <Footer />
    </div> 
  );
}

export default App;
