
  //Reemplazar elementos

  //Crear un elento
  const newHeading = document.createElement("h2");
  newHeading.id = "task-title";
  newHeading.appendChild(document.createTextNode("Super Lista de tareas"));

  //Seleccionar el elemento viejo
  const oldHeading = document.getElementById("task-title");

  //seleccionar el Padre
  const card = document.querySelector(".card-action");

  //Reemplazar
  console.log(newHeading, oldHeading);
  card.replaceChild(newHeading, oldHeading);

  //Eliminar un hijo

  const lis = document.querySelectorAll("li");
  const lista = document.querySelector("ul");
  lis[0].remove();

  lista.removeChild(lis[3]);

  // lis[1].parentElement.removeChild(lis[1]);

