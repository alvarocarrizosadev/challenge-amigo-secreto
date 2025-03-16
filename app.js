// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    // Elimina espacios innecesarios
    let nombreDeAmigo = document.getElementById('amigo').value.trim(); 

    if (nombreDeAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    amigos.push(nombreDeAmigo);
    limpiarCaja();
    console.log(amigos);
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}