import React, { useState } from 'react'

import userAvater from '../userAvatar.png';

const userData = [
  {id: 1, avatar: userAvater, name: 'Kat', posts: 3}
]

const UserProfile = () => {
  const [user, setUser] = useState(userData);

  return (
    <section className="user">
      {user.length > 0 ? <div className='container user-container'>
        {
          user.map(({id, avatar, name, posts}) => {
            return(
              <>
              <div className='user-avatar'>
                <img src={avatar} alt={name} />
              </div>
              <div className="user-info">
                <h4>{name}</h4>
                <p>{posts}</p>
              </div>
              </>
            )
          })
        }
      </div>:<h2 className='center'>No user found</h2>}
    </section>
  )
}

export default UserProfile