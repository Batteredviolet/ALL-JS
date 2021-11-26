const users = [
  { nombre: "Pepe", apellido: "Gotera" },
  { nombre: "Lisa", apellido: "Simson" },
  { nombre: "John", apellido: "Rambo" },
  { nombre: "Dartacan", apellido: "Mosqueperro" },
  { nombre: "Emilio", apellido: "Dragón" },
  { nombre: "Dulcinea", apellido: "Del Toboso" },
];

function getNombreCompleto(user) {
  return `user ${user.nombre} ${user.apellido}`;
}

// const nombres = users.map(getNombreCompleto);
// console.log(nombres);

const mapVersion = (arreglo, callback) => {
  const salida = [];
  for (let item of arreglo) {
    const value = callback(item);
    salida.push(value);
  }
  return salida;
};

// const nombres = mapVersion(users, (user) => {
//   return `user ${user.nombre} ${user.apellido}`;
// });

const nombres = mapVersion(users, getNombreCompleto);
console.log(nombres);

//filter
//sort
//reduce
//every
//some
