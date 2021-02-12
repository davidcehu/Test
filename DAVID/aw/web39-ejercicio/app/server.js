const express = require('express');
const path = require('path');
const app = express();
const puerto = 3034;
const rutaPublic = path.join(__dirname, '..', 'public');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.static(rutaPublic));


app.get('/', function(req, res) {
    res.render('index');
})

app.listen(puerto, iniciaServidor());

function iniciaServidor() {
    console.log('iniciado');
}