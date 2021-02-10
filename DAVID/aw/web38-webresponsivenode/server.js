const express = require('express');
const app = express();
const port = 3034;
const path = require('path');

let rutaPublic = path.join(__dirname, 'public');
app.use(express.static(rutaPublic));








app.listen(port, serverStart());

function serverStart() {
    console.log("Servidor iniciado eh http://localhost:" + port)
};