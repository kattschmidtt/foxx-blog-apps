import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import { formatDate } from '../utils';

const PostDetail = () => {

  const {id} = useParams()
  const [post, setPost] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getPost = async () => {
      setIsLoading(true)
      try {
        const resp = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/${id}`)
        setPost(resp.data)
        
      } catch (err) {
        setError(err)
      }
      setIsLoading(false)
    }
    getPost()
  }, [])

  if(isLoading) {
    return <CircularProgress />
  }

  return (
    <section className='post-detail'>
      {error && <p className='error'>{error}</p>}
      {post && <div className="container post-detail-container">
        <div>
          <h1>{post.title}</h1>
          <div className="post-detail-thumbnail">
            <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${post.thumbnail}`}alt="" />
          </div>
          
        </div>
        <p dangerouslySetInnerHTML={{__html: post.description}} />
        <div className="post-footer">
          Posted on: {formatDate(post.createdAt)}
        </div>
      </div>}
    </section>
  )
}

export default PostDetail