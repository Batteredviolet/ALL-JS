const divContenedor = document.querySelector(".contenedor");
const div2 = document.querySelector(".contenedor2");
const timer = document.querySelector(".time");
let horaInput = document.querySelector("#hour");
let minutoInput = document.querySelector("#minute");
const boton = document.querySelector("button");

function reloj() {
  let hoy = new Date();
  let hora = hoy.getHours();
  let minutos = hoy.getMinutes();
  let segundos = hoy.getSeconds();
  if (hora == horaInput.value && minutos == minutoInput.value) {
    reproducirSonido();
  }
  timer.textContent = `${hora}:${minutos}:${segundos}`;
}
setInterval(reloj, 1000);
boton.addEventListener("click", setAlarma);
function setAlarma() {
  if ((div2.style.display = "block")) {
    div2.style.display = "none";
    const hideDiv = document.querySelector(".hide");
    const h2 = document.createElement("h2");
    h2.textContent = `Tu alarma sonará a las ${horaInput.value}:${minutoInput.value}`;
    hideDiv.appendChild(h2);
  }
}
function reproducirSonido() {
  const song = new Audio("bruh-with-extra-reverb.mp3");
  song.play();
}

// console.log(minutoInput.value);

// boton.addEventListener('click', getValuesAndCompare);

// function getValuesAndCompare(){
//     if(hora === horaInput.value && minutos === minutoInput.value && segundos === 0){
//         alert('ES LA HORA')
//     }
// }
