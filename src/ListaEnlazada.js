class ListaEnlazada {
  constructor() {
    this.cabeza = null;
    this.cola = null;
    this.tamanio = 0;
  }

  agregarAlfinal(dato) {
    if (this.estaVacia) return;

    const newnodo = new Nodo(dato);
    this.cola.siguiente = newnodo;
    this.cola = newnodo;
    this.cola.siguiente = null;
    this.tamanio++;
  }

  agregarAlInicio(dato) {
    if (this.estaVacia) return;

    const newnodo1 = new Nodo(dato);
    newnodo1.siguiente = this.cabeza;
    this.cabeza = newnodo1;
    this.tamanio++;
  }

  recorrer(callback) {
    let actual = this.cabeza;
    let indice = 0;
    while (actual !== null) {
      callback(actual.dato, indice);
      actual = actual.siguiente;
      indice++;
    }
  }

  aArreglo() {
    const resultado = [];
    this.recorrer((data) => resultado.push(data));
    return resultado;
  }

  estaVacia() {
    return this.cabeza === 0;
  }

  obtenerTamanio() {
    return this.tamanio;
  }
}

module.exports = ListaEnlazada;
