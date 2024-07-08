// src/routes/telaRoutes.js
/**
 * Enrutador 
 * Endpoints
 */

// 1- Importamos el módulo
const express = require("express");

// 2- Instanciamos Router de express
const router = express.Router();

// 3- Importamos el módulo propio telaController (a realizarlo a futuro)
const telaController = require('../controllers/telaController');

// 4- En telaController programaremos el módulo junto a métodos GET, POST, PUT, DELETE
// Dejaremos sólo la declaración de las rutas, con sus métodos 
// y el llamado al telaController con el método específico para cada opción 

// Ruta de listado en general
router.get('/', telaController.getAllTelas);
//Ruta para la consulta de telas por id
router.get('/:id', telaController.getTelaById);
//Ruta para crear una tela
router.post('/', telaController.createTela);
//Ruta para actualizar una tela
router.put('/:id', telaController.updateTela);
//Ruta para borrar una tela
router.delete('/:id', telaController.deleteTela);



//5- Exportamos el módulo
module.exports = router;

//6- Pasamos a configurar telaController.js

