//Mostrar todos los números de 1 a n aumentando de 1 en 1 donde n lo ingresa el usuario en un prompt.
//Mostrar todos los números de 1 a N aumentando de 2 en 2 donde n lo ingresa el usuario en un prompt.

/*
const n = prompt("escribe un numero: ");
let i = 1;


while (i <= n) {
  console.log(i);
  //i = i + 1;
  //   i++;

  //   i = i + 2;
  i += 2;
}
*/

//Mostrar todos los números de N a 1 disminuyendo de 1 en 1
//donde n lo ingresa el usuario en un prompt.

/*
let n = Number(prompt("escribe un numero: "));

while (n > 0) {
  console.log(n);
  n--;
}

*/

//Tabla de multiplicar
//Ejemplo hard coded.
/*
let i = 1;
while (i <= 10) {
  const linea = "9 x " + i + " = " + 9 * i;
  console.log(linea);
  i++;
}
*/
/*Refractorizar
let i = 1;
const tabla = +prompt("Que tabla quieres?");
while (i <= 10) {
  const linea = `${tabla} x ${i} = ${tabla * i} <br>`;
  document.write(linea);
  i++;
}
*/

/*Pedir al usuario que ingrese un número en un prompt,
hacer la suma de todos los dígitos, validar que 
el número ingresado no contenga letras y sea entero positivo.*/
//Solucion chunga
/*
let numero = +prompt("Te sumo cifras...");
if (Number.isInteger(numero) && numero > 0) {
  let suma = 0;
  while (numero !== 0) {
    suma += numero % 10;
    numero = Math.floor(numero / 10);
  }
  console.log(suma);
} else {
  console.log("Escribe un numero entero positivo");
}

//Con lo que sabemos
let numero = prompt("Te sumo cifras...");
let i = 0;
let suma = 0;

while (i < numero.length) {
  const cifra = Number(numero.charAt(i));
  suma += cifra;
  i++;
}
if (isNaN(suma)) {
  console.log("Escribe un numero entero positivo");
} else {
  console.log("La suma de las cifras es: " + suma);
}
*/

//Suponemos que el  usuario ingresa numeros
//y el primero es menor que el segundo
let n1 = +prompt("numero1 ");
const n2 = +prompt("numero2 ");
let suma = 0;
while (n1 <= n2) {
  if (n1 % 2 === 0) {
    suma += n1;
  }
  n1++;
}
console.log(suma);
