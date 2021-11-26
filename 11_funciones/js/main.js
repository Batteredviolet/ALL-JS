//Codigo más ordenado
//Se pueden reutilizar

//Hay 2 formas de declarar funciones en JAvascript
// suma();
//1 Declaracion de una función
function suma() {
  console.log(2 + 3);
}

//Llamar a la funcion para que se ejecute
// suma();


//2 Funciones como expresiones
const suma2 = function (){
    console.log(4+4);
}

// suma2();
//Funcones con parámetros

function sumaMejorada(num1, num2){
    console.log(num1 + num2);
}

sumaMejorada(3, 4);
sumaMejorada(5, 7);

//nombre y apellidos són los parametros de la funcion
//son valores que se le pueden pasar a la funcion. Són variables
function saludar(nombre, apellidos = '') {
    if(typeof nombre === 'undefined'){
        nombre = 'desconocido'
    }
    console.log(`Hola ${nombre} ${apellidos}, bienvenido!!`)
}

//Marco y polo són los argumentos de la función. Valores Reales
saludar('Marco', 'Polo');
saludar();