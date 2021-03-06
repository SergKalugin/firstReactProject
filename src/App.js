import React from 'react';
import './App.css';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import LeftSidebar from './LeftSidebar/LeftSidebar';
import MainContant from './MainContent/MainContant';

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
