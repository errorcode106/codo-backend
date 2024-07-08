// src/db/db.js
/**
 * Finalmente el archivo db.js será el que cree el objeto que conecta con la base de datos. 
 * Esa conexión utilizará el objeto mysql provisto en en el módulo mysql2
 */

//1- Importación del módulo 
const mysql = require('mysql2');

//2- Configuracion de la conexion
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'balcarceSalta4400', //En mi caso me conecto a mysql-server con estos datos
    port: 3306,
    // database: 'telas_db'
});

connection.connect((err) => {
    // si existe error el objeto err existe por lo tanto activa el mnsje de error
    if (err) {
        console.error('Error de conexion con el servidor:', err);
        return;
    }

    // Mensaje de éxito
    console.log('Estado de conexión: CONECTADA.');

    // Creamos la consulta
    const sqlCreatedb = 'CREATE DATABASE IF NOT EXISTS telas_db';

    // Creamos la base de datos solo si no existe
    connection.query(sqlCreatedb, (err, results) => {
        // error
        if (err) {
            console.error('Error al crear la base de datos:', err);
            return;
        }
        // éxito
        console.log('Base de datos: EXISTENTE/GARANTIZADA');

        // Nos ubicamos en la base de datos creada
        // .changeUser(objeto_a_quien_conectarnos, funcion_callback)
        
        connection.changeUser({ database: 'telas_db' }, (err) => {            
            //error
            if (err) {
                console.error('Error al cambiar a la base de datos telas_db:', err);
                return;
            }
            
            // Queries para crear tablas
            const createCategoriasTable = `
                CREATE TABLE IF NOT EXISTS categorias (
                    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
                    nombre_categoria VARCHAR(255) NOT NULL
                );
            `;

            const createTelasTable = `
                CREATE TABLE IF NOT EXISTS telas (
                    id_tela INT AUTO_INCREMENT PRIMARY KEY,
                    nombre_tela VARCHAR(255) NOT NULL,
                    precio_metro DECIMAL(10,2) NOT NULL,
                    stock INT NOT NULL,
                    id_categoria INT,
                    FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria)
                );
            `;

            // Crear la tabla categorias
            connection.query(createCategoriasTable, (err, results) => {
                // en caso de error
                if (err) {
                    console.error('Error al crear la tabla categorias:', err);
                    return;
                }
                // éxito
                console.log('Tabla categorias: EXISTENTE/GARANTIZADA');

                // Crear la tabla telas
                connection.query(createTelasTable, (err, results) => {
                    // en caso de error
                    if (err) {
                        console.error('Error al crear la tabla telas:', err);
                        return;
                    }
                    // éxito
                    console.log('Tabla telas: EXISTENTE/GARANTIZADA');
                });
            });
        });
    });
});

module.exports = connection;
