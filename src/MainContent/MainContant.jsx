import React from 'react';
import s from './MainContant.module.css';

const MainContant = () => {
    return (
        <div className={`${s.main_content} flex-container`}>
            <div className={s.contant_baners}>
                <img src="https://images.hdqwalls.com/download/kite-colorful-painting-sunset-tree-sj-1600x900.jpg" />
            </div>
            <div className={` ${s.main__info} flex-container `}>
                <img className={s.foto} src="https://99designs-start-assets.imgix.net/images/homepage/testimonials/testimonial-3-artwork-7d873dcf.png?auto=format&ch=Width%2CDPR&w=350&h=347&dpr=1" />
                <div className={s.information}>
                    <h2 className={s.name}>Serg K</h2>
                    <ul className={s.list}>
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