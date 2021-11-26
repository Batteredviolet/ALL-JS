//determinar si un numero es par
//const num = prompt("Escribe un numero");

// if(num % 2 === 0){
//     console.log("Es par");
// }else {
//     console.log("Es impar");
// }

// es divisible entre 5

// if(num % 5 === 0){
//     console.log("Es divisible");
// } else {
//     console.log("No es divisible");
// }

// es divisible entre 11 y 5

// if(num % 11 === 0 && num % 5 === 0){
//     console.log("Es divisible");
// } else {
//     console.log("No es divisible");
// }

// const num1 = prompt("Escribe un numero");
// const num2= prompt("Escribe otro numero");

// if(num1 > num2){
//     alert('El numero ' + num1 + ' es mayor');
// }else{
//     alert('El numero ' + num2 + ' es mayor');
// }

// alert(num1 > num2 ?
//                 'El numero ' + num1 + ' es mayor'
//                 :
//                 'El numero ' + num2 + ' es mayor'
//                 )

const texto = prompt("Escribe un texto: ");
const firstChar = texto.charAt(0);
const esLetra = isNaN(Number(firstChar));

console.log(
            esLetra ? 
            'El primer caracter es una Letra' 
            : 
            'El primer caracter es un Numero'
            )