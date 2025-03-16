// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Función para agregar un nuevo amigo.
function agregarAmigo(){
    const elementoAmigo = document.getElementById('amigo');
    const nombreDeAmigo = elementoAmigo.value.trim();

    // Validación para que el campo amigo no este vacio
    if (nombreDeAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    // Validación para que no se encuentren duplicados los nombres
    if(amigos.includes(nombreDeAmigo)){
        alert(`El nombre ${nombreDeAmigo} ya se encuentra en la lista`);
        return;
    }

    // Agregar nombre al array
    amigos.push(nombreDeAmigo);
    console.log(amigos);

    // Limpiar la caja de entrada
    let valorCaja = document.querySelector('#amigo').value = '';
}
