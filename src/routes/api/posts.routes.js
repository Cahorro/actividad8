const router = require('express').Router();

const { getAllPosts, getById, getByAutor, createPost, updatePost, deletePost } = require('../../controllers/posts.controller');
const { checkPostId, checkAutorId } = require('../../utils/middlewares');

router.get('/', getAllPosts);
router.get('/:postId', checkPostId, getById);
router.get('/autor/:autorId', checkAutorId, getByAutor);

router.post('/', createPost);
router.put('/:postId', checkPostId, updatePost);
router.delete('/:postId', checkPostId, deletePost);

module.exports = router;