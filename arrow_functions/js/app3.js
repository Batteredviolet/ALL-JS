//Más métodos de arrays

const meses = ["Febrero", "Marzo", "Enero", "Abril", "Mayo", "Junio", "Julio"];

meses.forEach((mes, indice) => {
  if (mes === "Enero") {
    console.log("Enero existe y está en la posición " + indice);
  }
});

const res = meses.includes("Enero");
console.log(res);

//Some
const numeros = [1, 22, 33, 54, 12];

console.log(numeros.some((num) => num > 10));

const users = [
  { nombre: "Pepe", email: "1" },
  { nombre: "Lisa", email: "2" },
  { nombre: "John", email: "3" },
  { nombre: "Dartacan", email: "4" },
  { nombre: "Emilio", email: "5" },
  { nombre: "Dulcinea", email: "6" },
];

console.log(users.some((user) => user.nombre === "Dartacan"));

const indice = users.findIndex((user) => user.nombre === "Dartacan");
console.log(indice);
