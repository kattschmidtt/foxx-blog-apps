import React, { useState } from 'react';
import { Alert } from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState('');

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

  return (
    <section className="create-post">
      <div className="container">
        <h2>Create Post</h2>
          <Alert severity='error'>This is an error message</Alert>
          <br/>
          <form action="" className="form create-post-form">
            <input type="text" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)}/>
            <select name="category" value={category} onChange={e => setCategory(e.target.value)} id="">
              {
                POST_CATEGORIES.map(category => <option key={category}>{category}</option>)
              }
            </select>
            <ReactQuill modules={modules} formats={formats} value={description} onChange={setDescription}/>
            <input type="file" onChange={e => setThumbnail(e.target.files[0])} accept='png, jpg, jpeg'/>
          </form>
          <br/>
          <button type="submit" className='btn-register'>Create Post</button>
      </div>
    </section>
  )
}

export default CreatePost