import React from 'react';
import s from './ProfileAction.module.css';

import AddPerson from './AddPerson/AddPerson.jsx';
import Mail from './Mail/Mail.jsx';
import Notification from './Notification/Notification.jsx';
import Shoping from './Shoping/Shoping.jsx'

const ProfileAction = () => {
    return (
        <div className={` ${s.conrainer} flex-container `}>
            <AddPerson />
            <Mail />
            <Notification />
            <Shoping />
        </div>
    )
}

export default ProfileAction;