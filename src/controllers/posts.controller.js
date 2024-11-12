const {
  selectAll,
  selectById,
  selectByAutor,
  insertPost,
  updatePostById,
} = require("../models/posts.model");
const { selectAutorById } = require("../models/autores.model");

const getAllPosts = async (req, res, next) => {
  try {
    const [posts] = await selectAll();
    
      for (let post of posts) {
          const autorId = post.autores_id;
          const [autor] = await selectAutorById(autorId);
          post.autor = autor;
    }
    res.json(posts);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  const { postId } = req.params;
  try {
    const [post] = await selectById(postId);
    if (post) {
        const [autor] = await selectAutorById(post.autores_id);
        post.autor = autor;
    }
    res.json(post);
  } catch (error) {
    next(error);
  }
};

const getByAutor = async (req, res, next) => {
  try {
    const { autorId } = req.params;
    const [autor] = await selectAutorById(autorId);
    const [posts] = await selectByAutor(autorId);
    for (let post of posts) {
      post.autor = autor;
    }

    res.json(posts);
  } catch (error) {
    next(error);
  }
};


const createPost = async (req, res, next) => {
    try {
      //  req.body.autores.id = req.autor.id;
        const [result] = await insertPost(req.body);
        console.log(result.insertId);
        const post = await selectById(result.insertId);

        res.json(post);
    } catch (error) {
        next(error);
    }
};

const updatePost = async (req, res, next) => {
    const { postId } = req.params;

    try {
        const [result] = await updatePostById(postId, req.body);
        const post = await selectById(postId);
        res.json(post);
    } catch (error) {
        next(error);
    }
};

const deletePost = async (req, res, next) => {
    const { postId } = req.params;

    try {
        const post = await selectById(postId);
        await deleteById(postId);
        res.json(post);
    } catch (error) {
        next(error);
    }
};

module.exports = {
  getAllPosts,
  getById,
  getByAutor,
  createPost,
  updatePost,
  deletePost,
};
