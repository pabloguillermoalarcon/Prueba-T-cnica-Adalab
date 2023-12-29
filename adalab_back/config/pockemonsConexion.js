nombreBD = 'bdpockemons';
ip = '127.0.0.1';
puerto = '27017';

const mongoose = require('mongoose');
mongoose.connect(`mongodb://${ip}:${puerto}/${nombreBD}`)
    .then(() => console.log('Se conecto correctamente a la bd!'))
    .catch(err => console.log(err));
module.exports = mongoose;