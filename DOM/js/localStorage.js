// const user = {
//     name: 'Pepe',
//     edad: 23
// }

//guardar en localStorage
/* localStorage.setItem('mascota2', 'gato');

localStorage.setItem('edad', 8)

sessionStorage.setItem('name', 'María') */

// const mascota = localStorage.getItem("mascota");
// console.log(mascota);

// localStorage.clear();
const user = [
  {
    name: "Pepe",
    edad: 23,
  },
  {
    name: "Marisol",
    edad: 25,
  },
];

// console.log(typeof user);
// console.log(user);
// const userTojson = JSON.stringify(user);
// console.log(userTojson);
// console.log(typeof userTojson);

// localStorage.setItem("users", JSON.stringify(user));

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
  //recoger el valor del input
  const task = document.querySelector("#task").value;
  let tasks;
  
  if(localStorage.getItem('tasks') === null){
      tasks = [];
  }else{
      tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks',JSON.stringify(tasks))

  console.log(localStorage.getItem('tasks'));

  

  
});

if(teMiro && !noMeMiras){
    console.log('')
    bilirrubuna++;

}