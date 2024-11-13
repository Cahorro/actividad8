const router = require("express").Router();

const { getAllAutores, getById, createAutor, updateAutor, deleteAutor } = require("../../controllers/autores.controller");
const { checkAutorId } = require("../../utils/middlewares");

router.get('/', getAllAutores);
router.get('/:autorId', checkAutorId, getById);

router.post('/', createAutor);
router.put('/:autorId', checkAutorId, updateAutor);
router.delete('/:autorId', checkAutorId, deleteAutor);

module.exports = router;