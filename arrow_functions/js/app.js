//Arrow functions o funciones flecha ES6
function nombre(pram, param2) {
  //cuerpo de la función
}
nombre(1, 2);

const expresion = function (pram, param2) {
  //cuerpo de la función
};
expresion();

const objeto = {
  propiedad: "1234",
  metodo1: function () {
    //codigo del método
  },
};
objeto.metodo1();

//IIFE
(function () {
  //funcion anónima como expresión auto invocada
})();

// function imprimir() {
//   console.log("Soy una arrow function");
// }

// const imprimir = () => {
//   console.log("Soy una arrow function");
// };

//Si solo es una línea, se pueden omitir los claudators
//y el return es implícito
const imprimir = () => "Soy una arrow function";

console.log(imprimir());

//Parámetros, si solo hay uno se pueden omitir los paréntesis
const aprendiendo = (tema) => console.log(`Aprendiendo ${tema}`);
aprendiendo("Javascript");

const aprendiendo2 = (tema1, tema2) =>
  console.log(`Aprendiendo ${tema1} y ${tema2}`);

aprendiendo2("Javascript", "macramé");
