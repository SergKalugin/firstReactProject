import React from 'react';
import s from './AddPerson.module.css';

const AddPerson = () => {
    return(
        <div className={`${s.action} mad-dropdown`}>
            <button type="button" className={`${s.action_btn} mad-dropdown-title`} aria-expanded="false">
                <i className="material-icons-outlined">person_add</i> <span className="mad-numb">2</span>
            </button>  
        </div>
    )
}

export default AddPerson;