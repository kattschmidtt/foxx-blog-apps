import { Chip } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const PostItem = ({postId, thumbnail, title, description, app, category, createdAt}) => {

  const chipColors = {
    Blog: 'primary',
    Programming: 'secondary',
    React: 'success',
    Data: 'error',
    App: 'warning',
  };

  const formatDate = dateString => {
    const date = new Date(dateString);
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    const hour = ('0' + date.getHours()).slice(-2);
    const minute = ('0' + date.getMinutes()).slice(-2);
    const second = ('0' + date.getSeconds()).slice(-2);
    
    return `${day}/${month}/${year} ${hour}:${minute}:${second}`;
  }

  return (
    <article className="post">
      <div className="post-thumbnail">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="post-content">
        <Link to={`/posts/${postId}`}>
          <h3>{title.length > 30 ? title.substring(0, 30) + '...' : title}</h3>
        </Link>
        <p>{description.length > 145 ? description.substring(0, 145) + '...' : description}</p>
        <br/>
        <Link to={`posts/categories/${category}`}>
          <Chip 
            sx={{mb:'8px', ml: '8px'}}
            color={chipColors[category] || 'default'} 
            label={category}/>
        </Link>
      </div>
      <div className="post-footer">
        Posted on: {formatDate(createdAt)}
      </div>
    </article>
  )
}

export default PostItem