const express = require('express');
const app = express();
const puerto = 3000;
const path = require('path');

app.get('/:num1/mas/:num2', function(req, res) {
    let num1 = req.params.num1;
    let num2 = req.params.num2;
    let resultado = parseInt(num1) + parseInt(num2);
    res.send(resultado.toString());
})


app.listen(puerto, iniciaServidor());

function iniciaServidor() {
    console.log(
        `Servidor iniciado en http://localhost:3000`
    )
}