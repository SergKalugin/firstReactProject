import React from 'react';
import s from './Search.module.css';

const HeaderSearch = () => {
    return (
        <div className={s.search}>
            <form className="header_search">
                <input type="text" placeholder="Search" />
                <button type="submit" className="search_button">
                    <i className="material-icons-outlined">search</i>
                </button>
            </form>
        </div>    
    )
}

export default HeaderSearch;