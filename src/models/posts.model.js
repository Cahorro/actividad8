const pool = require("../config/db");

function selectAll(){
    return pool.query('select * from posts inner join autores on autores_id = autores.id;');
}

async function selectById(postId) {
    const [result] = await pool.query('select * from posts inner join autores on autores_id = autores.id where posts.id = ?;', [postId]);

    if (posts.length === 0) {
        return null;
    }

    return result[0];
}

function selectByAutor(autorId){
    return pool.query('select * from posts inner join autores on autores_id = autores.id where posts.autores_id = ?;', [autorId]);
}

function insertPost({ titulo, descripcion, fecha_creacion, categoria, autor_id }) {
    return pool.query(
        'insert into posts (titulo, descripcion, fecha_creacion, categoria, autor_id) values (?, ?, ?, ?, ?)',
        [titulo, descripcion, fecha_creacion, categoria, autor_id]
    );
}

function updatePostById(postId, { titulo, descripcion, fecha_creacion, categoria, autor_id }) {
    return pool.query(
        'titulo = ?, descripcion = ?, fecha_creacion = ?, categoria = ?, autor_id = ? where id = ?',
        [titulo, descripcion, fecha_creacion, categoria, autor_id, postId]);
}

function deletePostById(postId) {
    return pool.query('delete from posts where id = ?', [postId]);
}

module.exports = {
    selectAll, selectById, selectByAutor, insertPost, updatePostById, deletePostById
}