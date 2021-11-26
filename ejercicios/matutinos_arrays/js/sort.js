/* Crea una función que devuelva un array con als siguientes compañias ordenadas por el año de más moderno a más antiguo.
const companies = [
{ name: "Apple", ceo: "Tim Cook", year: 1976 },
{ name: "Microsoft", ceo: "Satya Nadella", year: 1975 },
{ name: "Amazon", ceo: "Jeft Bezos", year: 1994 },
{ name: "Google", ceo: "SUndar Pichai", year: 1998 },
{ name: "Netflix", ceo: "Reed Hastings", year: 1997 },
{ name: "Facebook", ceo: "Mark Zuckerberg", year: 2004 }
]
	
	Usa el método sort. */

const companies = [
  { name: "Apple", ceo: "Tim Cook", year: 1976 },
  { name: "Microsoft", ceo: "Satya Nadella", year: 1975 },
  { name: "Amazon", ceo: "Jeft Bezos", year: 1994 },
  { name: "Google", ceo: "SUndar Pichai", year: 1998 },
  { name: "Netflix", ceo: "Reed Hastings", year: 1997 },
  { name: "Facebook", ceo: "Mark Zuckerberg", year: 2004 },
];

/* const ordenadas = companies.sort(function (comp1, comp2) {
  if (comp1.year > comp2.year) {
    return 1;
  } else {
    return -1;
  }
}); */

//Version comprimida
// const ordenadas = companies.sort((a, b) => (a.year < b.year ? 1 : -1));
const ordenadas = [...companies];
ordenadas.sort((a, b) => b.year - a.year);

console.log(ordenadas);
