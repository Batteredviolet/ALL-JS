//Recogemos los elemetos del UI
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const taskInput = document.querySelector("#task");
const filter = document.querySelector("#filter");
let list = [];

//Cargar todos los eventos
loadEventListeners();

function loadEventListeners() {
  //evento crear tareas
  form.addEventListener("submit", addTask);
  //Eliminar tarea
  taskList.addEventListener("click", removeTask);
  //Limpiar todas las tareas
  clearBtn.addEventListener("click", clearTasks);
  //filtrar tareas
  filter.addEventListener("keyup", filterTasks);
}

function addTask(e) {
  if (taskInput.value === "") {
    alert("Añade una tarea");
  } else {
    //Cear elemento li
    const li = document.createElement("li");
    //añadimos una clase al li
    li.className = "collection-item";
    //Crear un nodo de texto
    const texto = document.createTextNode(taskInput.value);
    li.appendChild(texto);
    //Crear un elemento a y de las clases delete-item
    // y secondary-content
    const a = document.createElement("a");
    a.className = "delete-item secondary-content";
    //añadir el icono
    a.innerHTML = '<i class="fa fa-remove"></i>';
    //append el a al li
    li.appendChild(a);

    //añadir el li a la lista (ul)
    taskList.appendChild(li);
    list.push(taskInput.value);

    //Limpiamos el input
    taskInput.value = "";
    localStorage.setItem('mylist', JSON.stringify(list))
    
    console.log(li);
  }
  e.preventDefault();
}
const parse = JSON.parse(localStorage.getItem('mylist'))
console.log(parse);
window.addEventListener('DOMContentLoaded', recorrerAndCreate);

function recorrerAndCreate(){
  parse.forEach(element => {
    const li = document.createElement("li");
    //añadimos una clase al li
    li.className = "collection-item";
    //Crear un nodo de texto
    const texto = document.createTextNode(element);
    li.appendChild(texto);
    //Crear un elemento a y de las clases delete-item
    // y secondary-content
    const a = document.createElement("a");
    a.className = "delete-item secondary-content";
    //añadir el icono
    a.innerHTML = '<i class="fa fa-remove"></i>';
    //append el a al li
    li.appendChild(a);

    //añadir el li a la lista (ul)
    taskList.appendChild(li);
    list.push(element);
  });
}



function removeTask(e) {
  console.log(e.target);

  const text = e.target.parentElement.parentElement.textContent;
  const position = list.indexOf(text)
  console.log(position);
  list.splice(position, 1);
  localStorage.setItem('mylist',JSON.stringify(list))
  console.log("eliminar tarea");
  e.target.parentElement.parentElement.remove();
  // if (e.target.parentElement.classList.contains("delete-item")) {
  //   if (confirm("Estas seguro?")) {
      
  //   }
  // }
}

function clearTasks(e) {
  //taskList.innerHTML = '';
  console.log(list.length);
 
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
    
  } 
  list = []
  localStorage.setItem('mylist',JSON.stringify(list))
  
  console.log(list.length);
  console.log("LIMPIAR TAREAS");
}

function filterTasks(e) {
  const lista = document.querySelectorAll(".collection-item");

  lista.forEach(function (task) {
      console.log(task)
    const item = task.firstChild.textContent.toLowerCase();
    console.log(item);
    if (item.includes(filter.value.toLowerCase())) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
