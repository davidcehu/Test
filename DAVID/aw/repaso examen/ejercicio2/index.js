const express = require('express');
const app = express();
const puerto = 3000;
const path = require('path');

app.get('/', function(req, res) {
    res.send('Hola mundo');
})

app.get('/imagen', function(req, res) {
    res.sendFile(path.join(__dirname, '/img1.png'));
})

app.listen(puerto, iniciaServidor());

function iniciaServidor() {
    console.log(
        `Servidor iniciado en http://localhost:3000`
    )
}