//Encontrar los divisores de un numero con for
// const num = 22;
// let divisores = [];

// for (let i = num; i > 0; i--) {
//   if (num % i === 0) {
//     //he encontrado un divisor
//     divisores.push(i);
//   }
// }
// console.log(divisores);

//numeros primos

const numero = prompt("Escribe un numero: ");
console.log("Has pasado el numero: " + numero);
console.log("Inicio bucle desde 2 hasta " + (numero - 1));

for (var i = 2; i < numero; i++) {
  console.log("Modulo entre " + numero + " y " + i + " = " + (numero % i));

  if (numero % i === 0) {
    console.log(i + " es un multiplo de " + numero);
    console.log(
      numero + " no es un numero primo porque " + i + " es un multiplo"
    );
  }
}

if (numero === 1) {
  console.log("Me has pasado el numero 1, recuerda que NO es un numero primo");
} else {
  console.log(
    "Como el numero ingresado no tuvo mas múltiplos entonces determinamos que SI es un numero primo."
  );
}
