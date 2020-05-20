import React from 'react';
import s from './Mail.module.css';

const Mail = () => {
    return(
        <div className={`${s.action} mad-dropdown`}>
            <button type="button" className={`${s.action_btn} mad-dropdown-title`} aria-expanded="false">
                <i className="material-icons-outlined">mail_outline</i><span className="mad-numb">5</span>
            </button>  
        </div>
    )
}

export default Mail;