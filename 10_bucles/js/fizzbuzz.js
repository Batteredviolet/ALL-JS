/*
1
2
fizz
4
buzz
6
7
8
fizz
...
14
fizzbuzz
16
...
*/
// for (let i = 1; i < 100; i++) {
//   if (i % (3*5) === 0) {
//     console.log("Fizz-Buzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }


/********************************
 * Los bucles se pueden anidar  *
 ********************************/

const doble = [
  [1, 2, 3],
  ["a", "b", "c"],
  [11, 22, 33],
];

for (let i = 0; i < doble.length; i++) {
    const arrayPeque = doble[i];
    for (let j = 0; j < arrayPeque.length; j++) {
        const elemento = arrayPeque[j];
        console.log(elemento);
    } 
}

//crear un programa que cuente los 
//enteros positivos inferiores a 1000 que cumplan que 
//su dígito de mayor peso sea igual a la suma de los 
//demás dígitos.
