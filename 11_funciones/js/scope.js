//Scope global
var a = 1;
let b = 2;
const c = 3;

/* function test() {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log("Ámbito de función: ", a, b, c);
}

test(); */

// if(true){
//     //Ámbito de bloque
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log("Ámbito de Bloque: ", a, b, c);
    
// }

for(let a = 0; a < 10; a++){
    console.log('Loop: ' + a)
}

console.log("Ámbito Global: ", a, b, c);
