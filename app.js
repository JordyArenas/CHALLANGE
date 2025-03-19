// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//TIENES QUE ABRIRLO CON LIVE SERVER :)
console.log("¡El app.js se cargó correctamente!");

let amigos = [];

let amigosSorteados = [];

function agregarAmigo() {
    console.log("Función agregarAmigo ejecutada");
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    console.log("Nombre Ingresado:", nombreAmigo);
    
    if (nombreAmigo !== "") {
        
        if (!amigos.includes(nombreAmigo)) {
            
            amigos.push(nombreAmigo);

            
            inputAmigo.value = "";

            
            actualizarListaAmigos();

            
            mostrarMensaje(`Amigo agregado exitosamente: ${nombreAmigo}`);
        } else {
            
            mostrarMensaje("Este nombre ya esta en la lista, intenta otro");
        }
    } else {
        
        mostrarMensaje("Por favor un nombre correcto.");
    }
}


function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    
    
    listaAmigos.innerHTML = "";

    
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}
function sortearAmigo() {
    
    if (amigos.length > 0) {
        
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);

        
        const amigoSorteado = amigos[indiceAleatorio];

        
        amigosSorteados.push(amigoSorteado);

        
        amigos.splice(indiceAleatorio, 1);

        
        mostrarMensaje(`El amigo secreto es ...: ${amigoSorteado}`);

        
        actualizarListaAmigos();
    } else {
        
        mostrarMensaje("¡Todos nuestros amigos ya fueron sorteados!");
    }
}

function mostrarMensaje(mensaje) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${mensaje}</li>`;
}
