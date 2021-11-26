//Foreach y Map con arrow functions
/* 
const users = [
  { nombre: "Pepe", email: "1" },
  { nombre: "Lisa", email: "2" },
  { nombre: "John", email: "3" },
  { nombre: "Dartacan", email: "4" },
  { nombre: "Emilio", email: "5" },
  { nombre: "Dulcinea", email: "6" },
];

const nuevoArray = users.forEach((user, indice, arr) =>
  console.log(`El email de ${user.nombre} es ${user.email}`, indice, arr)
);

const nuevoArray2 = users.map(
  (user, indice) => `El email de ${user.nombre} es ${user.email},  ${indice}`
);

console.log(nuevoArray);
console.log(nuevoArray2); */

//Las funciones flecha no guardan el ambito de la funcion contenedora

const player = {
  name: "Mario",
  edad: 56,
  bigote: true,
  infoFlecha: () => console.log(this /* , arguments */),
  info: function () {
    console.log(this, arguments);
  },
};

player.info();
player.infoFlecha();
