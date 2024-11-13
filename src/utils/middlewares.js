const { selectAutorById } = require("../models/autores.model");
const { selectById } = require("../models/posts.model");

const checkPostId = async (req, res, next) => {
    const { postId } = req.params;

    if (isNaN(postId)) {
        return res.status(400).json({ message: 'El id del post es incorrecto' });
    }

    const post = await selectById(postId);
    if (!post) {
        return res.status(404).json({ message: 'El id del post no existe en la BD' });
    }

    next();
}

const checkAutorId = async (req, res, next) => {
    const { autorId } = req.params;

    if (isNaN(autorId)) {
        return res.status(400).json({ message: 'El id del autor es incorrecto' });
    }

    const autor = await selectAutorById(autorId);
    if (!autor) {
        return res.status(404).json({ message: 'El id del autor no existe en la BD' });
    }

    next();
}

module.exports = {checkPostId, checkAutorId }