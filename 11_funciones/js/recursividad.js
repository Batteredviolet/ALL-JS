//Calculo del factorial de un numero

//con un for
const dato = 7; // Número del que queremos calcular el factorial
let resultado = 1;
for (let i = dato; i > 0; i--) {
  resultado *= i;
}
console.log(resultado);

//Con una función rcursiva
//Sacado de este hilo
//https://stackoverflow.com/questions/43426769/javascript-factorial-with-recursion
var fact = 5;
function calfact(num) {
  if (num != 1) {
    fact = fact * (num - 1);
    num = num - 1;
    return calfact(num); // ***
  } else {
    return fact;
  }
}
