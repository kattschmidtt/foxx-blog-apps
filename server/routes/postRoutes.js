const { Router } = require('express');

const {createPost, getPosts, getPostById, getPostByCategory, editPost} = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');

const router = Router();

router.post('/', authMiddleware, createPost)
router.get('/', getPosts)
router.get('/:id', getPostById)
router.get('/categories/:category', getPostByCategory)
router.patch('/:id', authMiddleware, editPost)

module.exports = router