   (actual)//se va moviendo por cada nodo
  | cabeza |atencion1|.siguiente(atencion2) | ---> |actual.siguiente |atencion2|.siguiente(atencion3)| -->
  |actual.siguiente |atencion3|null|

-----------"Después “pierde” un enlace a propósito (por ejemplo, asigna null al siguiente del primer nodo) "---------

Al asignar null al primer nodo y recorrer la lista solo se imprime en consola el primer nodo,
asi mismo solo se toma el valor del 'costo' del primer nodo al hacer la sumatoria.
