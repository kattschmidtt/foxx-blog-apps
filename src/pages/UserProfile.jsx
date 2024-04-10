import React, { useContext, useMemo, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Alert } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import { UserContext } from '../context/userContext';

import { createAvatar } from '@dicebear/core';
import { lorelei } from '@dicebear/collection';
import axios from 'axios';

const UserProfile = () => {
  const avatarGen = useMemo(() => {
    return createAvatar(lorelei, {
      size: 128
    }).toDataUriSync()
  }, [])

  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [error, setError] = useState('');
  const [isAvatarTouched, setIsAvatarTouched] = useState(false);


  const navigate = useNavigate()

  const {currentUser} = useContext(UserContext)
  const token = currentUser?.token;

  useEffect(() => {
    if(!token) {
      navigate('/login')
    }
  }, [])

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/${currentUser.id}`,
      {withCredentials: true, headers: {Authorization: `Bearer ${token}`}})
      const {name, email, avatar} = response.data;
      setName(name);
      setEmail(email);
      setAvatar(avatar);
    }

    getUser();
  }, [])
  
  const changeAvatarHandler = async (e) => {
    e.preventDefault()
    setIsAvatarTouched(false);

    try {
      const postData = new FormData();
      postData.set('avatar', avatar)

      const resp = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/users/change-avatar`, 
        postData, 
        {
          withCredentials: true, 
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      )

      setAvatar(resp?.data.avatar)
      console.log(resp?.data.avatar)

    } catch (err) {
      setError(err)
    }
  }

  return (
    <section className="profile">
      <div className="counter profile-container">
        <div className="profile-details">
          <div className="avatar-wrapper">
            <div className="profile-avatar">
              <img src={`${process.env.REACT_APP_BASE_URL}/uploads/${avatar}`} alt="" />
            </div>
            {/* Form to update avatar */}
            <form className="avatar-form">
              <input 
                type="file" 
                name="avatar" 
                id="avatar"
                onChange={e => setAvatar(e.target.files[0])} 
                accept='png, jpg, jpeg'/>
              <label htmlFor="avatar" onClick={() => setIsAvatarTouched(true)}><EditIcon /></label>
            </form>
            {isAvatarTouched && <button className="profile-avatar-btn" onClick={changeAvatarHandler}><CheckIcon/></button>}
          </div>

          <h1>{currentUser.name}</h1>

          {/* form to update user details */}
          <form className="form profile-form">
            {error && <Alert severity='error'>This is an error message</Alert>}
            <input type="text" placeholder='Full Name' value={name} onChange={e => setName(e.target.value)}/>
            <input type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
            <input type="password" placeholder='Current Password' value={currentPassword} onChange={e => setCurrentPassword(e.target.value)}/>
            <input type="password" placeholder='New Password' value={newPassword} onChange={e => setNewPassword(e.target.value)}/>
            <input type="password" placeholder='Confirm New Password' value={confirmNewPassword} onChange={e => setConfirmNewPassword(e.target.value)}/>
            <button type="button" className='btn-register' onClick={changeAvatarHandler}>Update Details</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default UserProfile