const express = require('express');
const path = require('path');
const app = express();
const puerto = 3000;


app.set('view engine', 'ejs');
let rutaPlantillas = path.join(__dirname, 'plantillas');
app.set('views', rutaPlantillas);

app.get('/', function(req, res) {

    let datos = {
        "prop1": "Monday",
        "prop2": "Tuesday",
        "prop3": "Wednesday"
    };
    res.render('index', datos);

});

app.listen(puerto, iniciaServidor());

function iniciaServidor() {
    console.log('iniciado en http://localhost:3000');
}