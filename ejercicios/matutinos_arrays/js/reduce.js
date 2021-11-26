//Crea una función que devuelva el resultado de sumar todas las edades de este array.

const edades = [1, 2, 3, 14, 16, 65, 44, 88];

/* function sumaEdades(arr) {
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    suma += item;
  }
  return suma;
}

console.log(sumaEdades(edades)); */

const sumEdades = edades.reduce((total, item) => {
  return total + item;
}, 0);
console.log(sumEdades);
