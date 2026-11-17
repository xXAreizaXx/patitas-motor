const Nodo = require('../src/Nodo.js');

const atencion1 = new Nodo({
  fecha: '02/02',
  motivo: 'vacunación',
  veterinario: 'Dra. Ríos',
  costo: 85000,
});

const atencion2 = new Nodo({
  fecha: '15/03',
  mtivo: 'control de peso',
  veterinario: 'Dr. Gómez',
  costo: 40000,
});

const atencion3 = new Nodo({
  fecha: '20/05',
  motivo: 'limpieza dental',
  veterinario: 'Dra. Ríos',
  costo: 150000,
});

atencion1.siguiente = atencion2;
atencion2.siguiente = atencion3;
atencion3.siguiente = null;


const cabeza = atencion1;
let actual = cabeza;

while (actual !== null) {
  console.log('Nodo: ', actual);
  actual = actual.siguiente;
}

let acumulador = 0;
actual = cabeza;

while (actual !== null) {
  acumulador += actual.dato.costo;
  actual = actual.siguiente;
}
console.log("Costo total: ", acumulador);
