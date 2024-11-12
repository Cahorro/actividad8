const pool = require("../config/db");

function selectAll(){
    return pool.query('select * from posts;');
}

async function selectById(postId) {
    const result = await pool.query('select * from posts where id = ?;', [postId]);
    if (result.length === 0) {
        return null;
    }

    return result[0];
}

function selectByAutor(autorId){
    return pool.query('select * from posts where posts.autores_id = ?;', [autorId]);
}

function insertPost({ titulo, descripcion, fecha_creacion, categoria, autores_id }) {
    return pool.query(
        'insert into posts (titulo, descripcion, fecha_creacion, categoria, autores_id) values (?, ?, ?, ?, ?)',
        [titulo, descripcion, fecha_creacion, categoria, autores_id]
    );
}

function updatePostById(postId, { titulo, descripcion, fecha_creacion, categoria, autores_id }) {
    return pool.query(
        'titulo = ?, descripcion = ?, fecha_creacion = ?, categoria = ?, autores_id = ? where id = ?',
        [titulo, descripcion, fecha_creacion, categoria, autores_id, postId]);
}

function deletePostById(postId) {
    return pool.query('delete from posts where id = ?', [postId]);
}

module.exports = {
    selectAll, selectById, selectByAutor, insertPost, updatePostById, deletePostById
}