const botonClear = document.querySelector('.clear-tasks');
const input = document.querySelector('#task');

botonClear.addEventListener('click', miFuncion);

function miFuncion(e){
    console.log("Me has clicado!!!!");
    console.log("El valor del input es: " + input.value)
    console.log(e)
    e.preventDefault();
}