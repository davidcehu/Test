let bola = document.getElementById("bola");
let vel = 5;
let ultimaPulsacion = "";

function moverBola(evento) {
    let posX = bola.x;
    let posY = bola.y;
    if (ultimaPulsacion == evento.key) {
        vel++;
    } else {
        vel = 5;
    }
    ultimaPulsacion = evento.key;

    //Ancho máximo 800
    //Alto máximo 600
    if (evento.key == "ArrowUp") {
        if (posY > 0) {
            bola.style.top = posY - vel + "px";
        }
    } else if (evento.key == "ArrowDown") {
        if (posY < 550) {
            bola.style.top = posY + vel + "px";
        }
    } else if (evento.key == "ArrowLeft") {
        if (posX > 0) {
            bola.style.left = posX - vel + "px";
        }
    } else if (evento.key == "ArrowRight") {
        if (posX < 750) {
            bola.style.left = posX + vel + "px";
        }
    }
}