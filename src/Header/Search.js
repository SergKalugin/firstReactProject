import React from 'react';

const HeaderSearch = () => {
    return (
        <div className='search'>
            <form className="header-search">
                <input type="text" placeholder="Search" />
                <button type="submit" className="mad-search-button">
                    <i className="material-icons-outlined">search</i>
                </button>
            </form>
        </div>    
    )
}

export default HeaderSearch;