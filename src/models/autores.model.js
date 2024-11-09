const pool = require("../config/db");

function selectAll(){
    return pool.query('select * from autores;')
}

function selectById(autorId) {
    const [result] = await pool.query('select * from autores where id = ?', [autorId]);
    if (result.length === 0) return null;
    return result[0];
}

async function insertAutor({ nombre, email, imagen }) {
    const [result] = await pool.query(
        'insert into autores (nombre, email, imagen) values (?, ?, ?)',
        [nombre, email, imagen]
    );
    return result.insertId;
}

function updateAutorById(autorId, { nombre, email, imagen }) {
    return pool.query(
        'update autores set nombre = ?, email = ?, imagen = ? where id = ?',
        [nombre, email, imagen, autorId]
    );
}

function updateClienteById(clienteId, { nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni }) {
    return pool.query(
        'update clientes set nombre = ?, apellidos = ?, direccion = ?, email = ?, edad = ?, genero = ?, cuota = ?, fecha_nacimiento = ?, dni = ? where id = ?',
        [nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni, clienteId]
    );
}

function deleteAutorById(autorId) {
    return pool.query('delete from autores where id = ?', [autorId]);
} 

module.exports = {
    selectAll, selectById, , insertAutor, updateAutorById, deleteAutorById
}