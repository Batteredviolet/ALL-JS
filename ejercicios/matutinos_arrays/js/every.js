/* Crea una función que devuelva si todos los items de este array tienen un precio > 1000 o no.
const carrito = [
       { nombre: 'Monitor 20 Pulgadas', precio: 500},
        { nombre: 'Televisión 50 Pulgadas', precio: 700},
        { nombre: 'Tablet', precio: 300},
       { nombre: 'Audifonos', precio: 200},
      { nombre: 'Teclado', precio: 50},
        { nombre: 'Celular', precio: 500},
      { nombre: 'Bocinas', precio: 300},
        { nombre: 'Laptop', precio: 800},
];

Resuélvelo con un for y luego con el método every. */

const carrito = [
  { nombre: "Monitor 20 Pulgadas", precio: 500 },
  { nombre: "Televisión 50 Pulgadas", precio: 700 },
  { nombre: "Tablet", precio: 300 },
  { nombre: "Audifonos", precio: 200 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Celular", precio: 500 },
  { nombre: "Bocinas", precio: 300 },
  { nombre: "Laptop", precio: 800 },
];

/* function resultado(arr) {
  let cumple = true;
  arr.forEach((elemento) => {
    if (elemento.precio < 1000) {
      cumple = false;
      return;
    }
  });
  return cumple;
} console.log(resultado(carrito));
*/

/*
 function sonMayoresMil(array) {
            for (let item of array) {
                if (item.precio < 1000) return false;
            }
            return true
        }
*/
const result = carrito.every((item) => item.precio > 1000);
console.log(result);
