import React, { useEffect, useState } from 'react'
import PostItem from '../components/Blog/PostItem';

import { useParams } from 'react-router-dom';
import axios from 'axios';

const CategoryPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const {category} = useParams();

  const fetchPosts = async() => {
    setIsLoading(true);
    try {
      const resp = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/categories/${category}`)
      setPosts(resp?.data)
    } catch(err) {
      setError(err)
    }

    setIsLoading(false)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <section className='posts'>
       {posts.length > 0 ? <div className='container posts-container'>
        {
          posts.map(({_id:id, thumbnail, title, description, app, category, createdAt}) => 
          <PostItem key={id} postId={id} thumbnail={thumbnail} title={title} description={description} app={app} category={category} createdAt={createdAt} />)
        }  
      </div> :<h2 className='center'>No Posts Found For "{category.charAt(0).toUpperCase() + category.slice(1)}"!</h2>}
    </section>
  )
}

export default CategoryPosts
/**
 *  {posts.length > 0 ? <div className='container posts-container'>
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
 */