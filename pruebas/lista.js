const ListaEnlazada = require('../src/ListaEnlazada.js');

const lista = new ListaEnlazada();

console.log('--- CASO BORDE: Lista Vacia ---');
console.log('¿Esta vacia?', lista.estaVacia());
console.log('Cabeza:', lista.cabeza);
console.log('Cola:', lista.cola);
console.log('Tamaño:', lista.obtenerTamanio());
