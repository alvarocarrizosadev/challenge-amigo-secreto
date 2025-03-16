// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombreDeAmigo = document.getElementById('amigo').value.trim(); // Elimina espacios innecesarios

    if (nombreDeAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return; // Evita que el código siga ejecutándose
    }

    amigos.push(nombreDeAmigo);
    limpiarCaja();
    console.log(amigos); // Imprime el array actualizado
}

function limpiarCaja() {
    document.getElementById('amigo').value = ''; // No es necesario asignarlo a una variable
}