// src/routes/categoriaRoutes.js
/**
 * Enrutador 
 * Endpoints
 */

// 1- Importamos el módulo
const express = require("express");

// 2- Instanciamos Router de express
const router = express.Router();

// 3- Importamos el módulo propio categoriaController
const categoriaController = require('../controllers/categoriaController');

// 4- En categoriaController programaremos el módulo junto a métodos GET, POST
// Dejaremos sólo la declaración de las rutas, con sus métodos 
// y el llamado al categoriaController con el método específico para cada opción 

// Ruta de listado en general

//Ruta para crear una categoria
router.post('/', categoriaController.createCategoria);
// Ruta de listado en general
router.get('/', categoriaController.getAllCategorias);

//5- Exportamos el módulo
module.exports = router;

//6- Pasamos a configurar categoriaController.js

