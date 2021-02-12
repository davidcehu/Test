const express = require('express');
const path = require('path');
const app = express();
const puerto = 3034;
const rutaPublic = path.join(__dirname, '..', 'public');

app.set('views', path.join(__dirname, 'plantillas'));
app.set('view engine', 'ejs');


app.use(express.static(rutaPublic));


app.get('/', function(req, res) {
    res.render('index');
})

app.get('/pagina2', function(req, res) {
    res.render('pagina3');
})

app.listen(puerto, iniciaServidor());

function iniciaServidor() {
    console.log('iniciado');
}