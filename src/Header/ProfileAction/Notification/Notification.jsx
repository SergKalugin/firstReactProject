import React from 'react';
import s from './Notification.module.css';

const Notification = () => {
    return(
        <div className={`${s.action} mad-dropdown`}>
            <button type="button" className={`${s.action_btn} mad-dropdown-title`} aria-expanded="false">
                <i className="material-icons-outlined">notifications_none</i><span className="mad-numb">5</span>
            </button>  
        </div>
    )
}

export default Notification;