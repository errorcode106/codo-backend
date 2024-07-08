/**
 * El controlador hará el tratamiento de la información.
 * En este archivo solo se codifico los métodos
 * .getAllCategorias
 * .createCategoria
 */

//1- Importamos el módulo db.js
// El objeto db posee los métodos para conectar con la base de datos. 
// Es la conexión a la base de datos.

const db = require("../db/db.js");


//1- createCategoria
const createCategoria = (req, res)=>{
    // desestructuramos la req
    const {nombre_categoria} = req.body;

    // creamos la consulta
    const sql = 'INSERT INTO categorias (nombre_categoria) VALUES (?)';

    //Enviamos la consulta a la bbdd
    db.query(sql,[nombre_categoria],(err, result)=>{
        //si sucede algun error
        if(err){throw err}
        //si todo sale bien
        res.json({mensaje:"Categoria creada"})
    });
}

//2- .getAllCategorias
const getAllCategorias = (req, res)=>{
    // creamos una consulta
    const sql = 'SELECT * FROM categorias';

    //Eviamos la consulta a la bbdd
    db.query(sql, (err, result)=>{
        //si sucede algun error
        if(err){throw err}
        //si todo sale bien
        res.json(result)
    });
};


//3- Exportamos los módulos
module.exports = {
    createCategoria,
    getAllCategorias
}

