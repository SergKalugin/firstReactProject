import React from 'react';

const Profile = () => {
    return (
       <div className='mad-profile'>
           {/* foto */}
           <div className='mad-profile__foto'>
               <img src="https://velikorodnov.com/html/matebook/images/56x56_photo1.png" alt="" />
            </div>
            {/* dropdown */}
            <div class="mad-profile__dropdown">
              <button type="button" class="mad-profile__name dropdown-title" aria-expanded="false">Serg Kalugin</button>
              <div class="mad-profile__dropdown-element" aria-hidden="true">
                <ul class="mad-profile__list with-icons">
                  <li><a href="#"><i class="material-icons-outlined">home</i>Stream</a></li>
                  <li><a href="#"><i class="material-icons-outlined">account_circle</i>About</a></li>
                  <li><a href="#"><i class="material-icons-outlined">library_books</i>Blog</a></li>
                  <li><a href="#"><i class="material-icons-outlined">ballot</i>Classifieds</a></li>
                  <li><a href="#"><i class="material-icons-outlined">group</i>Friends</a></li>
                  <li><a href="#"><i class="material-icons-outlined">group_work</i>Groups</a></li>
                  <li><a href="#"><i class="material-icons-outlined">photo_library</i>Photos</a></li>
                  <li><a href="#"><i class="material-icons-outlined">video_library</i>Audio &amp; Video</a></li>
                  <li><a href="#"><i class="material-icons-outlined">settings</i>Preferences</a></li>
                  <li><a href="#"><i class="material-icons-outlined">meeting_room</i>Log Out</a></li>
                </ul>
              </div>
            </div>
       </div>
         
    )
}

export default Profile;