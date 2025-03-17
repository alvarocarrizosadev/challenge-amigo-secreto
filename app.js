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

    // Actualización de lista
    actualizarListaAmigos();
}

// Función para actualizar lista de amigos
function actualizarListaAmigos(){
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    // Recorrer la lista de amigos
    for(let i = 0; i<amigos.length; i++){
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

// Función para seleccionar un amigo aleatorio 
function sortearAmigo(){
    // Validación para que si existan amigos en la lista
    if(amigos.length === 0){
        alert('No hay amigos disponibles en la lista, agrega al menos 1 para continuar.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Muestra de resultado en HTML
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}
