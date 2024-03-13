import { Chip } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const PostItem = ({postId, thumbnail, title, entryText, app, category, postInfo}) => {

  const chipColors = {
    blog: 'primary',
    programming: 'secondary',
    react: 'success',
    data: 'error',
    app: 'warning',
  };

  return (
    <article className="post">
      <div className="post-thumbnail">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="post-content">
        <Link to={`/posts/${postId}`}>
          <h3>{title.length > 30 ? title.substring(0, 30) + '...' : title}</h3>
        </Link>
        <p>{entryText.length > 145 ? entryText.substring(0, 145) + '...' : entryText}</p>
        <br/>
        <Link to={`posts/categories/${category}`}>
          <Chip 
            sx={{mb:'8px', ml: '8px'}}
            color={chipColors[category] || 'default'} 
            label={category}/>
        </Link>
      </div>
      <div className="post-footer">
        Posted on: {postInfo}
      </div>
    </article>
  )
}

export default PostItem