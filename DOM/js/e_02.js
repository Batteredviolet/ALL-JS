// console.log(document.getElementById('task-title'))
console.log(document.getElementById("task-title").id);
console.log(document.getElementById("task-title").className);

const taskTitle = document.getElementById("task-title");
//cambiar estilos
/* taskTitle.style.backgroundColor = "#333";
taskTitle.style.color = "#fff";
taskTitle.style.padding = "5px"; */
// taskTitle.style.display = 'none';

//Cambiar el contenido
// taskTitle.textContent = "<h2>Lista de tareas</h2>";
// taskTitle.innerText  = "<h2>Mis tareas</h2>";
// console.log(taskTitle.textContent);
// console.log(taskTitle.innerText);
// taskTitle.innerHTML = "<h2>Mis tareas</h2>";

// document.querySelector()
console.log(document.querySelector('#task-title'))
console.log(document.querySelector('.card-title'))
console.log(document.querySelector('h5'))

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

document.querySelector('ul li:last-child').style.color = 'red';
document.querySelector('ul > li:nth-child(3)').style.color = 'yellow';
document.querySelector('ul > li:nth-child(odd)').style.color = '#ccc';
document.querySelector('ul > li:nth-child(even)').style.color = 'green';

