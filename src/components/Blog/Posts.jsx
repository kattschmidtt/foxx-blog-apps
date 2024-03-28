import React, { useEffect, useState, useContext } from 'react'
import PostItem from './PostItem';
import { useNavigate } from 'react-router-dom';
import { dummy_posts } from '../../entry';
import { UserContext } from '../../context/userContext';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';


const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {currentUser} = useContext(UserContext);
  const token = currentUser?.token;

  //login redirect if not logged in
  useEffect(() => {
    if(!token) {
      navigate('/login')
    }

    const fetchPosts = async () => {
      setIsLoading(true)

      try{
        const resp = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts`)
        //console.log(resp)
        setPosts(resp?.data)
      } catch (err) {
        console.log(err)
      }
      setIsLoading(false)
    }
    
    if(isLoading) {
      return <CircularProgress />
    }

    fetchPosts();
  }, [])

  return (
    <section className='posts'>
      {posts.length > 0 ? <div className='container posts-container'>
        {
          posts.map(({id, thumbnail, title, description, app, category, createdAt}) => 
          <PostItem key={id} postId={id} thumbnail={thumbnail} title={title} description={description} app={app} category={category} createdAt={createdAt} />)
        }  
      </div> :<h2 className='center'>No Posts Found!</h2>}
    </section>
  )
}

export default Posts

/**
 *        {
          posts.length > 0 ? (posts.map(
            ({id, thumbnail, title, entryText, app, category, postInfo}) => 
              <PostItem 
                key={id} 
                postId={id} 
                thumbnail={thumbnail} 
                title={title}
                entryText={entryText}
                app={app}
                category={category}
                postInfo={postInfo}/>
          ))
        :
        <div className='center'>nothing here</div>
        }
 */