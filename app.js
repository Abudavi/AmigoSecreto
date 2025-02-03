// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];
let inputNombre = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let amigoSecreto = "";
let resultado = document.getElementById('resultado');

function agregarAmigo() {
    if (inputNombre.value === "") {//si el input esta vacio alerta que debe ingresar un nombre
        alert('Debes ingresar un nombre');

    } else {//si el input tiene un nombre
        nombres.push(inputNombre.value);// se agrega el nombre al array nombres
        actualizarListaAmigos();//actualiza la lista de amigos
        inputNombre.value = "";//limpia el input

    }
}

function actualizarListaAmigos() {//actualiza la lista de amigos
    listaAmigos.innerHTML = "";//limpia la lista de amigos
    nombres.forEach((nombre) => {
        listaAmigos.innerHTML += `<li>${nombre}</li>`;//agrega un li por cada nombre en el array nombres
    });
}

function sortearAmigo() {//sortea un amigo secreto
    if (nombres.length > 0) {//si hay al menos un nombre en el array nombres
        amigoSecreto = nombres[Math.floor(Math.random() * nombres.length)];//selecciona un nombre al azar
        resultado.innerHTML = amigoSecreto;//muestra el nombre seleccionado

    } else {//si no hay nombres en el array nombres se alerta que debe ingresar al menos un nombre
        alert('Debes ingresar al menos un nombre');
    }
}