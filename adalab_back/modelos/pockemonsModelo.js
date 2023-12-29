const conexion = require('../config/pockemonsConexion.js');

const schemaPockemon = new conexion.Schema({
    id: { type: Number },
    img: { type: Number },
    nombre: { type: String },
    evolucionaDe: { type: String },
    habilidades: [{ type: String }]
});
const coleccionPockemons = conexion.model('coleccionpockemons', schemaPockemon);

module.exports = coleccionPockemons;