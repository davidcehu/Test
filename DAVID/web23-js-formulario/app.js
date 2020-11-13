function saludar() {

    // Creamos una variable para guardar el elemento input
    let elInput;
    //rellenamos esa variable con document.getEl..byId con el id del elemento input (esta en el HTML)
    elInput = document.getElementById("idInput");
    // imprimimos esa variable en la consola con console.log
    console.log(elInput);;

    if (elInput.value != "") {
        alert("Hola " + elInput.value);
        //borrar el campo input
        elInput.value = "";
    }



}