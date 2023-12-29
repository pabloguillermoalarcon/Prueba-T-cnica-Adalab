function UnPockemon(props) {
  return <article>
    <section className="seccion1">
      <img src={props.img}></img>
    </section>
    <section className="seccion2">
      <span className="idPockemon">ID / {props.id}</span>
    </section>
    <section className="seccion3">
      <span className="nombrePockemon">{props.nombre}</span>
      {props.habilidades.map((element) => {
        return <span className="habilidadesPockemon">{element.type.name}</span>
      })}
      <div className="evolucionPokemon">
        <span>Evoluciona de:</span>
        <br></br>
        <span>{props.nombre}</span>
      </div>
    </section>
  </article>;
}

function App() {
  //Traemos el listado de todos los pokemon via api usando el hook effect cuando inicia el proyecto
  const [pokemons, setPokemons] = React.useState([]);
  React.useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then((res) => {
        const listaPokemons = res.data.results;
        return Promise.all(listaPokemons.map((pokemon) => {
          return axios.get(pokemon.url)
            .then((response2) => {
              const datosPokemon = response2.data;
              return {
                imagenPokemon: datosPokemon.sprites.front_default,
                idPokemon: datosPokemon.id,
                nombrePokemon: datosPokemon.name,
                habilidadesPokemon: datosPokemon.types
              };
            })
            .catch((error) => {
              console.error('Error al obtener datos del pokemon:', error);
              throw error; // Rethrow the error to propagate it
            });
        }));
      })
      .then((lisPokemons) => {
        //console.log('Lista final de pokemons:');
        //console.log(lisPokemons);
        setPokemons(lisPokemons);
      })
      .catch((error) => {
        console.error('Error api lista de pokemons:', error);
      });
  }, []);


  const [nombrePokemon, setNombrePokemon] = React.useState('');
  const [pokemonsFiltrados, setPokemonsFiltrados] = React.useState([]);
  React.useEffect(() => {
    if(nombrePokemon!=''){
      // window.console.log('Ingrese aqui por que el input tiene este texto:');
      // window.console.log(nombrePokemon);
      // window.console.log('Lista de pokemons que tengo:');
      // window.console.log(pokemons);
      let lisPokemonsFiltrada = pokemons.filter((pokemon) => {
        //window.console.log(pokemon.nombrePokemon);
        if (pokemon.nombrePokemon.indexOf(nombrePokemon) != -1) {
          //window.console.log('Ingrese aqui');
          return pokemon;
        }
      });
      //window.console.log('Lista de pokemon Filtrada Final:');
      //window.console.log(lisPokemonsFiltrada);
      setPokemonsFiltrados(lisPokemonsFiltrada);
    }else{
      setPokemonsFiltrados(pokemons);
    }
  }, [nombrePokemon]);

  const [detallePokemon, setDetallePokemon] = React.useState(false);

  if (detallePokemon!=false) {
    return <>
      <a id="botonVolver" href="#" onClick={()=>{setDetallePokemon(false)}}>Volver al listado</a>
      <UnPockemon
        key={detallePokemon.idPokemon}
        img={detallePokemon.imagenPokemon}
        id={detallePokemon.idPokemon}
        nombre={detallePokemon.nombrePokemon}
        habilidades={detallePokemon.habilidadesPokemon}>
      </UnPockemon>
    </>
  } else {
    if(pokemonsFiltrados.length > 0){
      let listaPokemonsFinal = pokemonsFiltrados;
      return <>
          <input className="filtro" onChange={(e)=>{filtroPockemon(e)}} type="text" placeholder="Filtra pokemons por nombre..."></input>
          <div id="pockemons">
          {
            pokemonsFiltrados.map((pokemon) => {
              //console.log(pokemon);
              return <a href={pokemon.nombrePokemon} onClick={(e) => { detallePockemon(e,pokemon) }}>
                <UnPockemon
                  key={pokemon.idPokemon}
                  img={pokemon.imagenPokemon}
                  id={pokemon.idPokemon}
                  nombre={pokemon.nombrePokemon}
                  habilidades={pokemon.habilidadesPokemon}>
                </UnPockemon>
              </a>
            })
          }
          </div>
        </>
    }else{
      if (pokemons.length > 0) {
        return <>
          <input className="filtro" onChange={(e)=>{filtroPockemon(e)}} type="text" placeholder="Filtra pokemons por nombre..."></input>
          <div id="pockemons">
            {
              pokemons.map((pokemon) => {
                //console.log(pokemon);
                return <a href={pokemon.nombrePokemon} onClick={(e) => { detallePockemon(e,pokemon) }}>
                  <UnPockemon
                    key={pokemon.idPokemon}
                    img={pokemon.imagenPokemon}
                    id={pokemon.idPokemon}
                    nombre={pokemon.nombrePokemon}
                    habilidades={pokemon.habilidadesPokemon}>
                  </UnPockemon>
                </a>
              })
            }
          </div>
        </>
      } else {
        return <>
          <input onChange={(e)=>{filtroPockemon(e)}} type="text" placeholder="Filtra pokemons por nombre..."></input>
          <h4>No se encontro pockemon...</h4>
        </>
      }
    }
  }

  function filtroPockemon(infoBotonEvento){
    let texto = infoBotonEvento.target.value;
    // window.console.log('Texto captado: ' + texto);
    // window.console.log(texto.length);
    setNombrePokemon(texto);
  }
  function detallePockemon(infoBotonEvento, pokemon){
    infoBotonEvento.preventDefault();
    //console.log(pokemon);
    setDetallePokemon(pokemon);
  }
}

ReactDOM.render(<App />, window.document.getElementById("root"));