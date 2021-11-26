document.querySelector("#push").addEventListener("click", crearTarea);

function crearTarea() {
  const textValue = document.querySelector("#newtask input");

  if (textValue.value.length == 0) {
    alert("Please Enter a Task");
  } else {
    const tasks = document.querySelector("#tasks");
    //creo un div de la clase 'task'
    const task = document.createElement("div");
    task.classList.add("task");
    //Creo el span y le añado un texto con el valor del input
    const taskText = document.createElement("span");
    taskText.id = "taskname";
    taskText.appendChild(document.createTextNode(textValue.value));
    //añado el div el span al div
    task.appendChild(taskText);
    //Creo un boton y un icono
    const btn = document.createElement("button");
    btn.className = "delete";
    const papelera = document.createElement("i");
    papelera.className = "fa fa-trash";

    papelera.addEventListener("click", function () {
      this.parentNode.parentNode.remove();
    });

    btn.appendChild(papelera);

    task.appendChild(btn);

    tasks.appendChild(task);

    // const current_tasks = document.querySelectorAll(".delete");
    // for (let i = 0; i < current_tasks.length; i++) {
    //     console.log(current_tasks[i])
    //   current_tasks[i].addEventListener("click", function () {
    //     this.parentNode.remove();
    //   });
    // }
  }
}
