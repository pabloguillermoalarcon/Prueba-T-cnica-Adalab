//Importamos el modelo que contiene la lista de pockemons
const coleccionPockemons = require('../modelos/pockemonsModelo.js');

pokemonsControlador = {
    //Muestra la lista de Pokemons
    index: (req, res)=>{
        try {
            coleccionPockemons
                .find()
                .then((result) => {
                    //console.log(result);
                    res.json(result);
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    },
    //Muestra la pantalla para crear un pokemon
    create: ()=>{

    },
    //Alamcena un pokemon
    store: ()=>{

    },
    //Muestra un pokemon
    show: (req, res)=>{
        //console.log(req.params);
        //const pokemon = req.params.pokemon;
        const { pokemon } = req.params;
        try {
            coleccionPockemons
            .findOne({$or: [{id: pokemon}, {nombre: pokemon}] })
            .then((result) => {
                if (result == null) {
                    res.send('Not Found');
                } else {
                    res.json(result);
                }
            })
            .catch((err) => {
                console.log(err);
            });        
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    },
    //Muestra la pantalla para editar un pokemon
    edit: ()=>{

    },
    //Modifica un pokemon
    update: ()=>{

    },
    //Elimina un pokemon
    destroy: ()=>{

    }
}

module.exports = pokemonsControlador;