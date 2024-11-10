const { selectAutorById, selectAll, insertAutor, updateAutorById } = require("../models/autores.model");

const getAllAutores = async (req, res, next) => {
    try {
        const [result] = await selectAll();
        res.json(result);
      } catch (error) {
        next(error);
      }
}

const getById = async (req, res, next) => {
    const { autorId } = req.params;
  try {
    const [autor] = await selectAutorById(autorId);
    res.json(autor);
  } catch (error) {
    next(error);
  }
}

const createAutor = async (req, res, next) =>{
    try {
        const result = await insertAutor(req.body);
        console.log(result);
        const autor = await selectAutorById(result);

        res.json(autor);
    } catch (error) {
        next(error);
    }
}

const updateAutor = async (req, res, next) =>{
    const { autorId } = req.params;

    try {
        const [result] = await updateAutorById(autorId, req.body);
        const autor = await selectAutorById(autorId);
        res.json(autor);
    } catch (error) {
        next(error);
    }
}

const deleteAutor = async (req, res, next) =>{
    const { autorId } = req.params;

    try {
        const autor = await selectById(autorId);
        await deleteById(autorId);
        res.json(autor);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllAutores, getById, createAutor, updateAutor, deleteAutor
}