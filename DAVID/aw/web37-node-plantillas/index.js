const express = require('express');
const app = express();
const puerto = 3000;

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    datos = {
        nombre: "Juan"
    }
    res.render('inicio', datos);
})

app.listen(puerto, iniciaServidor());

function iniciaServidor() {
    console.log('iniciado');
}