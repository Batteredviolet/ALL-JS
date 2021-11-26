function sumar(a, b){
    return a + b;
}

const result = sumar(3, 6);

console.log(result)

console.log(sumar(1 , 2))

// console.log(sumar(sumar(4, 4) , sumar(sumar(8, 1), sumar(6, 2))));
sumar(2,3);

const numAlumnos = 0;
let saludar = 33;

console.log(saludar);

if (numAlumnos > 0) {
  saludar = function(texto = 'Hola') {
    return texto + ' queridos alumnos'
  }
}else{
    saludar = function() {
        return "A quien saludas pringao?"
      }
}

console.log(saludar());

//IIFE

(function(parametro){
      console.log("Soy una funcion IIFE autoejecutada " + parametro);
})('hello')

//ejemplo un poco + util
let total = 0;

function addTolist(precio){
    return total += precio;
}

function calcularPrecioFinal(total){
    return 1.5 * total
}

addTolist(200);
addTolist(32)
console.log('El total es: ' + total);

const precioFinal = calcularPrecioFinal(total);
console.log('El precio final es: '+ precioFinal)