const form = document.querySelector("form");
const taskInput = document.querySelector("#task");
const heading = document.querySelector("h5");

taskInput.value = "";

/* form.addEventListener('submit', function(e){
    console.log(e);
    e.preventDefault();
}) */
/*Tipos de eventos: keyup, keydown, keypress, focus, blur
copy, cut, paste....*/
taskInput.addEventListener("copy", function (e) {
  console.log(e.target);
  heading.innerText = e.target.value;
});
