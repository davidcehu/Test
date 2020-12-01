// let i = 0;
// let conjunto = [10, 23, "Juan", false];
// console.log(conjunto);
// // while (i < conjunto.length) {
// //     alert("La posición " + i + " es " + conjunto[i]);
// //     i = i + 1;
// // }
// // alert("Hemos acabado");




// let numeros = [3, 4, 5, 6, 3, 5, 75, 7, 6]

// i = 0;
// while (i < numeros.length) {

//     numeros[i]++; //equivalente a numeros[i] = numeros[i] + 1;
//     i++; //equivalente a i=i+1;
// }

// console.log(numeros);




// capturar la lista del HTML
let ls = document.getElementById("lista");

//inicializar la variable de iteración
let i = 0;

//empezar el bucle, desde 0 hasta < length
while (i < ls.children.length) {



    //acceder al contenido children[]
    let hijo = ls.children[i];

    //Añadirle un punto (concatenamos con +);
    hijo.innerHTML += ".";
    //equivalente a hijo.innerHTML = hijo.innerHTML + "."

    //Finalizamos el bucle
    i++;
}


//el mismo bucle con for
for (let i = 0; i < ls.children.length; i++) {
    ls.children[i].innerHTML += ":"
}


for (let i = 0; i < ls.children.length; i++) {
    if (i == 1) {
        ls.children[i].style.color = "red";
    }
    if (i == 3) {
        ls.children[i].style.color = "red";
    }
}

//tabla
let artistas = [
    "Amaral",
    "Estopa",
    "El canto loco",
    "C Tangana",
    "Rosalía",
    "Vetusta Morla",
    "Tatchenko",
    "Pecker",
    "Mago de Oz",
    "Héroes del Silencio",
    "La Polla Records"
];

//Rellenad la tabla "tab" del HTML siguiendo el siguiente 
//patrón:
// +---+----------------------+
// | 1 | Amaral               |
// +---+----------------------+
// | 2 | Estopa               |
// +---+----------------------+
// | 3 | El canto del loco    |
// +---+----------------------+
// | 4 | C Tangana            | 
// +---+----------------------+

// iteramos por array artistas con un for
// para cada valor de i 
// creamos un tr
// creamos un td y le ponemos de contenido i+1
// creamos otro td y le ponemos de contenido el artista que toque
// añadimos los dos td al elemento tr que hemos creado.
// añadimos el elemento tr a la tabla