const express = require('express');
const app = express();
const path = require('path');
const puerto = 3001;

let rutaPublic = path.join(__dirname, 'public');
app.use(express.static(rutaPublic));

app.listen(puerto, iniciaServidor());

function iniciaServidor() {
    console.log(`Servidor a la escucha en http://localhost:${puerto}`);
}