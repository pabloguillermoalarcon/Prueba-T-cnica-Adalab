Carpeta adalab_front: Contiene la interfaz visual de la prueba tecnica. Lista de pockemon con su respectivo campo de filtrado e ingreso de detalle del mismo.
Requisitos previos: Tener instalado Visual Estudio Code y al extension live server.
Instalación: 
1- Una vez descargado el archivo completo alojar o ubicar la carpeta adalab_front en un sector o lugar del pc.
2- Abrir visual estudio code y desde el mismo programa abrir la carpeta adalab_front.
3- Dirigirse al archivo index.html, darle clic derecho y buscar la opcion "Open with Live Server".
4- Probar el proyecto abierto en el navegador.



Carpeta adalab_back: Contiene la API de la prueba tecnica.
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
4- Abrir visual estudio code y desde el mismo programa abrir la carpeta adalab_back.
5- Abrir la terminar de visual estudio code (powershell) y ejecutar el primer comando mongod o bien dirigirse a la carpeta C:\Program Files\MongoDB\Server\7.0\bin y ejecutar el programa que se llama asi mongod (la version 7.0 es la que tengo instalado en mi si tienes otra, saldra otro numero)
6- Abrir nuevamente la terminar de visual estudio code (powershell) una nueva y ejecutar el comando node index.js o bien nodemon index.js(recordar que para este ultimo debes tener instalado nodemon de manera global o bien instalarlo con npm i -g nodemon).
7- Ingresar al navegador y colocar la siguiente url http://localhost:3000/, como se vera ya te muestra la lista de pockemons y si se desea ingresar a ver uno en particular colocar la siguiente url http://localhost:3000/1 o http://localhost:3000/bulbasaur
