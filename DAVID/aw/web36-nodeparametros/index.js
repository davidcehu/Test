const express = require('express');
const app = express();
const puerto = 3000;

let datos = {
    "juan": "Juan Martínez",

}


app.get('/saludo/:nombre', function(req, res) {
    let nom = req.params.nombre;
    res.send('Hola ' + nom);
})

app.get('/despedida/:nombre', function(req, res) {
    let bye = req.params.nombre;
    res.send('Adios ' + bye);
})








app.listen(puerto, iniciaServidor());

function iniciaServidor() {
    console.log('Servidor en http://localhost:' + puerto);
}