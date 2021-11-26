/* Dado el siguiente array de pokemons, crear una función que devuelva un nuevo array que contenga solo los pokemons de tipo fire.
let pokemons = [
  { name: "pikachu", type: "electric"},
  { name: "charmander", type: "fire"},
  { name: "bulbasaur", type: "grass"},
  { name: "squirtle", type: "water"},
  { name: "flareon", type: "fire"},
  { name: "jolteon", type: "electric"}
]
Resuelve el ejercicio  con un for y luego con el método filter. */

let pokemons = [
  { name: "pikachu", type: "electric" },
  { name: "charmander", type: "fire" },
  { name: "bulbasaur", type: "grass" },
  { name: "squirtle", type: "water" },
  { name: "flareon", type: "fire" },
  { name: "jolteon", type: "electric" },
];

//con for
/* function getFirePokes(lista) {
  const filtrados = [];
  for (let i = 0; i < lista.length; i++) {
    const currentItem = lista[i].type;
    if (currentItem === "fire") {
      filtrados.push(lista[i].name);
    }
  }

  return filtrados;
} 
console.log(getFirePokes(pokemons));*/

const pokemonsFuego = pokemons.filter(function (pokemon) {
  return pokemon.type === "fire";
});

console.log(pokemonsFuego);
