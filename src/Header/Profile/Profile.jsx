import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
    return (
       <div className={s.profile}>
            {/* foto */}
            <div className={s.profile__foto}>
               <img src="https://velikorodnov.com/html/matebook/images/56x56_photo1.png" alt="" />
            </div>
            {/* dropdown */}
            <div className="dropdown">
              <button type="button" className={`${s.profile__name} dropdown-title dropdown_btn`} aria-expanded="false">Serg Kalugin</button>
              <div className="dropdown_element" aria-hidden="true">
                <ul className="ropdown_element__list with-icons">
                  <li>
                    <a href="#">
                      <i className="material-icons-outlined">home</i>
                    Stream
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="material-icons-outlined">account_circle</i>
                    About
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="material-icons-outlined">library_books</i>
                    Blog
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="material-icons-outlined">ballot</i>
                    Classifieds
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="material-icons-outlined">group</i>
                    Friends
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="material-icons-outlined">group_work</i>
                    Groups
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="material-icons-outlined">photo_library</i>
                    Photos
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="material-icons-outlined">video_library</i>
                    Audio &amp; Video
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="material-icons-outlined">settings</i>
                    Preferences
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="material-icons-outlined">meeting_room</i>
                    Log Out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
       </div>
         
    )
}

export default Profile;