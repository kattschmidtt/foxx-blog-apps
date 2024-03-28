import React, { useContext, useEffect, useState } from 'react';
import { Alert } from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {UserContext} from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Blog');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const {currentUser} = useContext(UserContext);
  const token = currentUser?.token;

  //login redirect if not logged in
  useEffect(() => {
    if(!token) {
      navigate('/login')
    }
  }, [])


  //React quill settings
  const modules = {
    toolbar: [
      [{'header': [1,2,3,4,5,6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }
  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];


  const POST_CATEGORIES = [
    "Blog", "App", "Programming"
  ];

  const createPost = async e => {
    e.preventDefault()

    const postData = new FormData();
    postData.set('title', title)
    postData.set('category', category)
    postData.set('description', description)
    postData.set('thumbnail', thumbnail)

    try {
      const resp = await axios.post(`${process.env.REACT_APP_BASE_URL}/posts`, postData, {withCredentials: true, headers: {Authorization: `Bearer ${token}`}})

      if(resp.status == 201) {
        return navigate('/')
      }

    } catch (err) {
      setError(err.response?.data.message)
    }
  }

  return (
    <section className="create-post">
      <div className="container">
        <h2>Create Post</h2>
          {error && <Alert severity='error'>{error}</Alert>}
          <br/>
          <form action="" className="form create-post-form" onSubmit={createPost}>
            <input type="text" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)}/>
            <select name="category" value={category} onChange={e => setCategory(e.target.value)} id="">
              {
                POST_CATEGORIES.map(category => <option key={category}>{category}</option>)
              }
            </select>
            <ReactQuill modules={modules} formats={formats} value={description} onChange={setDescription}/>
            <input type="file" onChange={e => setThumbnail(e.target.files[0])} accept='png, jpg, jpeg'/>
          <button type="submit" className='btn-register'>Create Post</button>
          </form>
          <br/>
      </div>
    </section>
  )
}

export default CreatePost