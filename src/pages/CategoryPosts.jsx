import React, { useState } from 'react'
import PostItem from '../components/Blog/PostItem';

import { dummy_posts } from '../entry';

const CategoryPosts = () => {

  const [posts, setPosts] = useState(dummy_posts);

  return (
    <section className='posts'>
      <div className="container posts-container">
        {
          posts.length > 0 ? (posts.map(
            ({id, thumbnail, title, entryText, app, tags, postInfo}) => 
              <PostItem 
                key={id} 
                postId={id} 
                thumbnail={thumbnail} 
                title={title}
                entryText={entryText}
                app={app}
                tags={tags}
                postInfo={postInfo}/>
          ))
        :
        <div className='center'>nothing here</div>
        }
      </div>
    </section>
  )
}

export default CategoryPosts