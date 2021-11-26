//Event Bubbling
/* document.querySelector('.card-title').addEventListener('click', function(e){
    console.log('card-title')
})
document.querySelector('.card-content').addEventListener('click', function(e){
    console.log('card-content')
})
document.querySelector('.card').addEventListener('click', function(e){
    console.log('card')
})
document.querySelector('.col').addEventListener('click', function(e){
    console.log('col')
}) */

//Delegacion de eventos

/* const delItem = document.querySelector('.delete-item');

delItem.addEventListener('click', function(e){
    console.log(e.target)
}) */


document.body.addEventListener('click', function(e){
    // if(e.target.className === 'fa fa-remove')
    
    // if(e.target.parentElement.className === 'delete-item secondary-content')

    if(e.target.parentElement.classList.contains('delete-item')){
        console.log(e.target);
        e.target.parentElement.parentElement.remove();
    }
})


const tasksList = document.querySelector('.collection');

document.querySelector('.clear-tasks').addEventListener('click', function(){
    // document.querySelector('ul').textContent = '';
    while(tasksList.firstChild){
        tasksList.removeChild(tasksList.firstChild);
    }
})