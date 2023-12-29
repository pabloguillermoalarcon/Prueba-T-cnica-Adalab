Carpeta adalab_front: Contiene la interfaz visual de la prueba tecnica. Lista de pockemon con su respectivo campo de filtrado e ingreso de detalle del mismo.
Requisitos previos: Tener instalado Visual Estudio Code y al extension live server.
Instalación: 
1- Una vez descargado el archivo completo alojar o ubicar la carpeta adalab_front en un sector o lugar del pc.
2- Abrir visual estudio code y desde el mismo programa abrir la carpeta adalab_front.
3- Dirigirse al archivo index.html, darle clic derecho y buscar la opcion "Open with Live Server".
4- Probar el proyecto abierto en el navegador.



Carpeta adalab_front: Contiene la API de la prueba tecnica.
Requisitos previos: Tener instalado Nodejs, MognoDBCompas(o GUI similar), Visual Estudio Code.
Instalación:
1- Una vez descargado el archivo completo alojar o ubicar la carpeta adalab_back en un sector o lugar del pc.
2- Abrir MongoDBCompas, conectarse con la URI: mongodb://localhost:27017 y crear una nueva base de datos (nombre bd: bdpockemons y coleccion: coleccionpockemons).
3- Hacer click en ADD DATA o importar los siguiente documentos:
{
  "_id": {
    "$oid": "658509e98f41db0a83ef5348"
  },
  "img": 1,
  "id": 1,
  "nombre": "bulbasaur",
  "evolucionaDe": "",
  "habilidades": [
    "grass",
    "poison"
  ]
}

{
  "_id": {
    "$oid": "6585065e8f41db0a83ef5340"
  },
  "img": 2,
  "id": 2,
  "nombre": "ivysaur",
  "evolucionaDe": "bulbasaur",
  "habilidades": [
    "grass",
    "poison"
  ]
}
4- Dentro de dicha carpeta se encontrara el archivo 
