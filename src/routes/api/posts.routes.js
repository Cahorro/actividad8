const router = require('express').Router();

const { getAllPosts, getById, getByAutor, createPost, updatePost, deletePost } = require('../../controllers/posts.controller');

router.get('/', getAllPosts);
router.get('/:postId', getById);
router.get('/:autorId', getByAutor);

router.post('/', createPost);
router.put('/:postId', updatePost);
router.delete('/:postId', deletePost);

module.exports = router;