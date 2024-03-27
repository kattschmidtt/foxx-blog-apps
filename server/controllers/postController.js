

const createPost = async (req, res, next) => {
  res.json("Create Post");
}
const getPosts = async (req, res, next) => {
  res.json("Get All Post");
}
const getPostById = async (req, res, next) => {
  res.json("Get Post By ID");
}
const getPostByCategory = async (req, res, next) => {
  res.json("Get Post By Category");
}
const editPost = async (req, res, next) => {
  res.json("Edit Post");
}

module.exports = {createPost, getPosts, getPostById, getPostByCategory, editPost};