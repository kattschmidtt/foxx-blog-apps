import React, { useState } from 'react'
import PostItem from '../components/Blog/PostItem';

import { dummy_posts } from '../entry';

const CategoryPosts = () => {
  const [posts, setPosts] = useState(dummy_posts);

  return (
    <section>
      {posts.length > 0 ? <div className='container posts-container'>
        {
          posts.map(({id, thumbnail, category, title, entryText, postInfo, app}) =>
            <PostItem 
              key={id} 
              postId={id} 
              title={title} 
              entryText={entryText} 
              thumbnail={thumbnail} 
              category={category} 
              postInfo={postInfo} 
              app={app} />
          )
        } 
      </div> : <h2 className='center'>Nothing here</h2>}
    </section>
  )
}

export default CategoryPosts