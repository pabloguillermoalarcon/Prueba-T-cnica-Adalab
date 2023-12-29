//Importamos la libreria express
const express = require('express');

//Inicializamos el enrutador 
// Manejador de rutas
const router = express.Router();

//Importamos el controlador de Pokemons
const pokemonsControlador = require('../controladores/pokemonsControlador');

//Definimos todas las rutas disponibles
router.route('/')
.get(pokemonsControlador.index);

router.route('/:pokemon')
.get(pokemonsControlador.show);

module.exports= router;