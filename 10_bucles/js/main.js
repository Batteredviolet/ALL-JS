// while loop. Se ejecuta mientra se cumple la condicón
//Se suele usar cuando no conocemos el
//numero de iteraciones
// let i = 0;
// while (i < 10) {
//   console.log(`numero ${i}`);
//   console.log("hola");
//   i += 2;
// }

//Ejercicio
//- genera un numero aleatorio
//- Pide un numero al usuario mientras no lo
//acierte.
//- Si lo acierta enseña un emoji

// const numRandom = Math.ceil(Math.random() * 10);
// console.log(numRandom);
// let num = +prompt("Introduce un numero del 1 al 10🙂");
// while (num !== numRandom) {
//   alert("No has acertado");
//   num = +prompt("Introduce un numero del 1 al 10🙂");
// }
// alert("Has acertado");

// const numRandom = Math.ceil(Math.random() * 10);
// console.log(numRandom);
// let num;
// do {
//   num = +prompt("Introduce un numero del 1 al 10🙂");
// } while (num !== numRandom);
// alert("Has acertado");



//bucle for se usa normalmente cuando concemos
//el numero de iteraciones

//for(contador; comparacion;incremento)
// const numeroDeIteraciones = 10;
// for(let i = 1; i <= numeroDeIteraciones; i += 2){
//     console.log("Numero " + i);
// }
//ejercicio imprimir por consola
//si los numero de 1 a 10 son pares o impares
for(let i = 0; i <= 10; i++){
    if(i % 2 === 0){
        console.log("Numero "+i+" es par" );
    }else{
        console.log("Numero "+i+" es Impar" );
    }
}
