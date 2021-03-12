const express = require('express');
const app = express();
const path = require('path');
const puerto = 3000;

//Decirle 
app.set('view engine', 'ejs');


let rutaPlantillas = path.join(__dirname, 'plantillas');
app.set('views', rutaPlantillas)

//Esta linea lo que le dice a express es que
//devuelva cualquier fichero econtenido en la 
//carpeta public que sea llamado en la URL
let rutaPublic = path.join(__dirname, 'public');
app.use(express.static(rutaPublic));


app.get('/app1', function(req, res) {
    let respu = "Respuesta: ";
    let dias = ['Lunes', 'Martes', 'Miercoles'];
    for (const dia of dias) {
        respu = respu + " " + dia;
    }
    res.send(respu)
});



app.get('/diaSemana/:numero', function(req, res) {
    let num = req.params.numero;
    if (num == 1) {
        res.send("lunes");
    } else {
        res.send("No es lunes");
    }
})


let usuarios = {
    "user1": "Juanito",
    "user2": "Juanin",
    "user3": "Juanillo",
}
app.get('/usuario/:usr', function(req, res) {
    let u = "user" + req.params.usr;
    res.send(usuarios[u]);
})


app.get('/usuarioPlantilla/:num', function(req, res) {
    let u = "user" + req.params.num;
    let objetoPlantilla = { "dato": usuarios[u] };
    res.render("usuario", objetoPlantilla);
})



app.listen(puerto, iniciaServidor());

function iniciaServidor() {
    console.log(`Servidor a la escucha en http://localhost:${puerto}`);
}