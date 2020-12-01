function anyadirTarea() {
    //tomo el valor del input
    let eTarea = document.getElementById("idTarea");


    //compruebo si tiene algo de texto
    if (eTarea.value != "") {

        //Si tiene texto, añado la tarea en la lista 
        anyadirElemento(eTarea.value);
        // despues de añadir borro el elemento input
        eTarea.value = "";

        //si no tiene texto, no hago nada
    }

}

// funcion añadir elemento a la lista
function anyadirElemento(textoTarea) {

    // cojo el elemento de la lista
    let listaTareas = document.getElementById("listaTareas");

    //le añado un elemento de lista con el texto
    //del parámetro textoTarea
    listaTareas.innerHTML += "<li>" + textoTarea + "</li>";
}

function borrarTarea() {
    let numTarea = prompt("Escribe el número de la tarea que quieres borrar")

    let lTareas = document.getElementById("listaTareas");

    if (numTarea >= 1 && numTarea <= lTareas.children.length) {

        let indice = numTarea - 1;

        let eTareaBorrar = lTareas.children[indice];

        lTareas.removeChild(eTareaBorrar);
    } else {
        alert("Número no válido.");
    }
}