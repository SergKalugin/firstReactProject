import React from 'react';
import s from './Schoping.module.css';

const Shoping = () => {
    return(
        <div className={`${s.action} mad-dropdown`}>
            <button type="button" className={`${s.action_btn} mad-dropdown-title`} aria-expanded="false">
                <i className="material-icons-outlined">Shoping_outline</i>
                <span className="mad_numb">
                    5
                </span>
            </button>  
        </div>
    )
}

export default Shoping;