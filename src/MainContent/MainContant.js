import React from 'react';
import './MainContant.css';

const MainContant = () => {
    return (
        <div className="main-content flex-container">
            <div className='contant-baners'>
                <img src="https://images.hdqwalls.com/download/kite-colorful-painting-sunset-tree-sj-1600x900.jpg" />
            </div>
            <div className="main--info flex-container">
                <img className="main--info_foto" src="https://99designs-start-assets.imgix.net/images/homepage/testimonials/testimonial-3-artwork-7d873dcf.png?auto=format&ch=Width%2CDPR&w=350&h=347&dpr=1" />
                <div className="main--info_information">
                    <h2 className="main--info_information--name">Serg K</h2>
                    <ul className="main--info_information--list">
                        <li><span className="bold">Date of Birth:</span> </li>
                        <li><span className="bold">City:</span> Kiev</li>
                        <li><span className="bold">Education:</span> KSU 2001</li>
                        <li><span className="bold">Web Site</span> https:\\site.com</li>
                    </ul>
                </div>   
            </div>
        </div>
    );
};

export default MainContant;