const router = require("express").Router();

const { getAllAutores, getById, createAutor, updateAutor, deleteAutor } = require("../../controllers/autores.controller");

router.get('/', getAllAutores);
router.get('/:postId', getById);

router.post('/', createAutor);
router.put('/:postId', updateAutor);
router.delete('/:postId', deleteAutor);

module.exports = router;