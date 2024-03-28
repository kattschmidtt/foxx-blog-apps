const Post = require('../models/postModel');
const User = require('../models/userModel');
const fs = require('fs');
const path = require('path');
const {v4: uuid} = require('uuid');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const HttpError = require("../models/errorModel");

const createPost = async (req, res, next) => {
  try {
    let {title, category, description} = req.body;
    if(!title || !category || !description || !req.files) {
      return next(new HttpError("Fill in all fields and choose thumbnail", 422));
    }

    const {thumbnail} = req.files;
    if(thumbnail.size > 2000000) {
      return next(new HttpError("Thumbnail too big. File should be less than 2mb.", 422));
    }

    let fileName = thumbnail.name;
    let splitFileName = fileName.split('.');
    let newFileName = splitFileName[0] + uuid() + '.' + splitFileName[splitFileName.length - 1];
    thumbnail.mv(path.join(__dirname, '..', '/uploads', newFileName), async (err) => {
      if(err) {
        return next(new HttpError(err));
      } else {
        const newPost = await Post.create({title, category, description, thumbnail: newFileName, creator: req.user.id});
        if(!newPost) {
          return next(new HttpError("Post couldn't be created.", 422));
        }

        const currentUser = await User.findById(req.user.id);
        const userPostCount = currentUser.posts + 1;
        await User.findByIdAndUpdate(req.user.id, {posts: userPostCount});

        res.status(201).json(newPost);
      }
    })
  } catch(err) {
    return next(new HttpError(err))
  }
}
const getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find().sort({updateAt: -1})
    res.status(200).json(posts);
  } catch (err) {
    return next(new HttpError(err));
  }
}
const getPostById = async (req, res, next) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId);
    if(!post) {
      return next(new HttpError("Post not found", 404));
    }

    res.status(200).json(post);
  } catch(err) {
    return next(new HttpError(err));
  }
}
const getPostByCategory = async (req, res, next) => {
  try {
    const {category} = req.params;
    const catPosts = await Post.find({category}).sort({createdAt: -1});
    res.status(200).json(catPosts);
  } catch(err) {
    return next(new HttpError(err));
  }
}
const editPost = async (req, res, next) => {
  try {
    let fileName;
    let newFileName;
    let updatedPost;
    const postId = req.params.id;
    let {title, category, description} = req.body;

    if(!title || !category || description.length < 12) {
      return next(new HttpError("Fill in all fields.", 422));
    }
    if(!req.files) {
      updatedPost = await Post.findByIdAndUpdate(postId, {title, category, description}, {new: true});
    } else {
      const oldPost = await Post.findById(postId);
      fs.unlink(path.join(__dirname, '..', 'uploads', oldPost.thumbnail), async err => {
        if(err) {
          return next(new HttpError(err));
        }
      })

      //edit thumbnail
      const {thumbnail} = req.files;
        if(thumbnail.size > 2000000) {
          return next(new HttpError("Thumbnail too big. Should be less than 2mb"));
        }
        fileName = thumbnail.name;
        let splitFileName = fileName.split('.');
        newFileName = splitFileName[0] + uuid() + '.' + splitFileName[splitFileName.length - 1];
        thumbnail.mv(path.join(__dirname, '..', 'uploads', newFileName), async err => {
          if(err) {
            return next(new HttpError(err))
          }
        })

        updatedPost = await Post.findByIdAndUpdate(postId, {title, category, description, thumbnail: newFileName}, {new: true});
    }
    if(!updatedPost) {
      return next(new HttpError("Couldn't update post", 400));
    }

    res.status(200).json(updatedPost);

  } catch(err) {
    return next(new HttpError(err));
  }
}

module.exports = {createPost, getPosts, getPostById, getPostByCategory, editPost};