import React, { useState } from 'react'

import userAvatar from '../userAvatar.png';
import { Link } from 'react-router-dom';
import { Alert } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';

const UserProfile = () => {
  const [avatar, setAvatar] = useState(userAvatar);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  return (
    <section className="profile">
      <div className="counter profile-container">
        <div className="profile-details">
          <div className="avatar-wrapper">
            <div className="profile-avatar">
              <img src={userAvatar} alt="" />
            </div>
            {/* Form to update avatar */}
            <form action="" className="avatar-form">
              <input 
                type="file" 
                name="avatar" 
                id="avatar"
                onChange={e => setAvatar(e.target.files[0])} 
                accept='png, jpg, jpeg'/>
              <label htmlFor="avatar"><EditIcon /></label>
            </form>
            <button className="profile-avatar-btn"><CheckIcon/></button>
          </div>

          <h1>Kat</h1>

          {/* form to update user details */}
          <form action="" className="form profile-form">
            <Alert severity='error'>This is an error message</Alert>
            <input type="text" placeholder='Full Name' value={name} onChange={e => setName(e.target.value)}/>
            <input type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
            <input type="password" placeholder='Current Password' value={currentPassword} onChange={e => setCurrentPassword(e.target.value)}/>
            <input type="password" placeholder='New Password' value={newPassword} onChange={e => setNewPassword(e.target.value)}/>
            <input type="password" placeholder='Confirm New Password' value={confirmNewPassword} onChange={e => setConfirmNewPassword(e.target.value)}/>
            <button type="submit" className='btn-register'>Update Details</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default UserProfile