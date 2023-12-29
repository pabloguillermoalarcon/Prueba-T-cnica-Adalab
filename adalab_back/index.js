//Importamos la libreria express
const express = require('express');

//Inicializamos express
const api = express();

//Indicamos el computador (ip y puerto) que recibira y respondera los pedidos
api.listen(3000);

//Importamos las rutas de pockemons
const pockemonsRutas = require('./rutas/pockemonsRouter.js');

//Incorporamos a nuestro proyecto dicha ruta anterior
api.use('/', pockemonsRutas);