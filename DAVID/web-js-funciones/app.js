function saludar() {
    alert("Hola Clase");
}

saludar();

function saludoPersonalizado(nombre) {
    let mensaje = "Hola ";
    alert(mensaje + nombre);
}

saludoPersonalizado("Pepe");
saludoPersonalizado("Isabel");
saludoPersonalizado("Martin");
let nombre = "Javier";
saludoPersonalizado(nombre);


document.getElementById("parrafo");


function cambiarParrafo(despedida) {
    elemento = document.getElementById("parrafo");
    elemento.innerHTML = despedida
}
cambiarParrafo("Adios Clase");

// Crear una funcion cambiarElemento que me permita cambiar el contenido del elemento con id (1er parámetro( por el segundo parámetro))
function cambiarElemento(idElemento, contElemento) {
    let elemento = document.getElementById(idElemento);
    elemento.innerHTML = contElemento
}
alert();
cambiarElemento("parrafo", "Hola caracola");
alert();
cambiarElemento("parrafo2", "Hola Mundo");
alert();
cambiarElemento("parrafo3", "Adios mundo");

document.getElementById("inputid").value = "Hola"