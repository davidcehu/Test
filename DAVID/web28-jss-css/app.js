let parrafo = document.getElementById("parrafo1");

function ocultarParrafo() {
    console.log(parrafo.className);
    parrafo.classList.add("oculto");
}

function mostrarParrafo() {
    parrafo.classList.remove("oculto");
}

function cambiarVerde() {
    parrafo.style.color = "green";
}