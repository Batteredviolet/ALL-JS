//determinar si los angulos forman un triangulo
// const a1 = 100;
// const a2 = 40;
// const a3 = 40;

// const suma = a1 + a2 + a3;

// if(suma === 180){
//     console.log("Es un tiangulo")
//     if(a1 === a2 && a2 === a3){
//         console.log(" y es equilatero ")
//     }
//     else if(a1 === a2 || a2 === a3 || a1 === a3 ){
//         console.log(" y es isósceles ")
//     } else {
//         console.log(" y es escaleno ")
//     }

//     if(a1 === 90 || a2 === 90 || a3 === 90){
//         console.log(" y es rectangulo ");
//     }
// } else {
//     console.log("Esto no es un triangulo");
// }

//Determinar si la primera letra es mayuscula
/*const palabra  = "Gato";
const letra = palabra.charAt(0);

if(letra === letra.toUpperCase()){
    console.log("La primera letra es mayúscula")
} else {
    console.log("La primera letra es minúscula")
}

const codigoLetra = palabra.charCodeAt(0);

if(codigoLetra <= 90){
    console.log("La primera letra es mayúscula")
} else {
    console.log("La primera letra es minúscula")
}*/

// const year = 2025;

// if (year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0)) {
//   console.log(`El año ${year} es bisiesto`);
// } else {
//   console.log(`El año ${year} NO es bisiesto`);
// }

const numRandom = Math.ceil(Math.random() * 2)

const num = +prompt("Introduce un numero del 1 al 10🙂");
if(num === numRandom){
    alert("Has acertado")
}else{
    alert('No has acertado')
}