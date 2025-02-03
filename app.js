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