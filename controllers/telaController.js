/**
 * El controlador es el que hará el tratamiento de la información.
 * En este archivo tenemos que codificar los métodos
 * .getAllTelas
 * .getTelaById
 * .createTela
 * .updateTela
 * .deleteTela
 */

//1- Importamos el módulo db.js
// El objeto db posee los métodos para conectar con la base de datos. 
// Es la conexión a la base de datos.

const db = require("../db/db.js");

//2- .getAllTelas
const getAllTelas = (req, res) => {
    // creamos una consulta con  para q nos devuelva el nombre de la categoria de la tela
    const sql = `
        SELECT 
            telas.id_tela, 
            telas.nombre_tela, 
            telas.precio_metro, 
            telas.stock, 
            categorias.nombre_categoria 
        FROM telas 
        JOIN categorias ON telas.id_categoria = categorias.id_categoria
    `;

    // Enviamos la consulta a la bbdd
    db.query(sql, (err, result) => {
        // si sucede algún error
        if (err) {
            throw err;
        }
        // si todo sale bien
        res.json(result);
    });
};


//3- .getTelaById
const getTelaById = (req, res)=>{
    //1- Obtenemos la info de id que viene desde el cliente
    // const id = req.params.id;
    // Esta es una notacion de desestructuración {id}
    const {id} = req.params;

    // creamos la consulta
    // Creamos la consulta con marcador de posición ?
    const sql = 'SELECT * FROM telas WHERE id_tela = ?';

    // Enviamos la consulta a la bbdd
    db.query(sql,[id],(err, result)=>{
        //si sucede algun error
        if(err){throw err}
        //si todo sale bien
        res.json(result)
    });
}

//4- createMovie
const createTela = (req, res)=>{
    // desestructuramos la req
    const {nombre_tela, precio_metro, stock, id_categoria} = req.body;

    // creamos la consulta
    const sql = 'INSERT INTO telas (nombre_tela, precio_metro, stock, id_categoria) VALUES (?, ?, ?, ?)';

    //Enviamos la consulta a la bbdd
    db.query(sql,[nombre_tela, precio_metro, stock, id_categoria],(err, result)=>{
        //si sucede algun error
        if(err){throw err}
        //si todo sale bien
        res.json({mensaje:"Tela creada"})
    });
}

//5- updateTela
const updateTela = (req, res)=>{
    // desestructuracion de la consulta
    const {id} = req.params;
    const {nombre_tela, precio_metro, stock, id_categoria} = req.body;

    // creamos la consulta sql
    const sql = 'UPDATE telas SET nombre_tela = ?, precio_metro = ?, stock = ?, id_categoria = ? WHERE id_tela = ?';

    // enviamos consulta a la bbdd
    db.query(sql,[nombre_tela, precio_metro, stock, id_categoria, id],(err, result)=>{
        //si sucede algun error
        if(err){throw err}
        //si todo sale bien
        res.json({mensaje:"Tela actualizada"})
    });
}

//6- Delete
const deleteTela = (req, res)=>{
    // desestructuracion
    const {id} = req.params;

    // consulta sql
    const sql = 'DELETE FROM telas WHERE id_tela = ?';

    // Pasamos la consulta
    db.query(sql,[id], (err, result)=>{
        //si sucede algun error
        if(err){throw err}
        //si todo sale bien
        res.json({mensaje:"Tela borrada"})
    });
}

//7- Exportamos los módulos
module.exports = {
    getAllTelas,
    getTelaById,
    createTela,
    updateTela,
    deleteTela
}

