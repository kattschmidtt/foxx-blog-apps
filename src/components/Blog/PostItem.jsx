import { Chip } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { formatDate } from '../../utils'

const PostItem = ({postId, thumbnail, title, description, app, category, createdAt}) => {

  const chipColors = {
    Blog: 'primary',
    Programming: 'secondary',
    React: 'success',
    Data: 'error',
    App: 'warning',
  };

  const shortDescription = description.length > 145 ? description.substring(0, 145) + '...' : description;
  
  return (
    <article className="post">
      <div className="post-thumbnail">
        <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${thumbnail}`} alt={title} />
      </div>
      <div className="post-content">
        <Link to={`/posts/${postId}`}>
          <h3>{title.length > 30 ? title.substring(0, 30) + '...' : title}</h3>
        </Link>
        <p dangerouslySetInnerHTML={{__html: shortDescription}}/>
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