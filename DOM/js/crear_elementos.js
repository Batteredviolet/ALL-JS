function creaItems(miTexto){
    //Crear un elemento
const li = document.createElement('li');
//le añadimos una clase
li.className = 'collection-item'

li.id = 'new-item';

li.setAttribute('title', 'Nuevo Item');
// li.textContent = "Nuevo item";
//Usando template strings
// let tarea = "Tarea 6";
// li.innerHTML = `${tarea}
//                 <a href="#" class="delete-item secondary-content">
//                     <i class="fa fa-remove"></i>
//                 </a>`

//.......
//Creamos un nodo de texto
const texto = document.createTextNode(miTexto);
//Insertamos el nodo de texto en el li
li.appendChild(texto);

//creamos un enlace
const a = document.createElement('a');
a.href = '#';
a.className = 'delete-item secondary-content'

//Añadimos el icono
a.innerHTML = '<i class="fa fa-remove"></i>';

//Insertamos el enlaceen el li
li.appendChild(a);


//insertar el elemento li en el DOM

const ul = document.querySelector('ul.collection');
ul.appendChild(li)
console.log(li)

}

/* creaItems("Peito");
creaItems("jamon");
creaItems("caracol");
creaItems("limpiar el coche");
creaItems("lavar la ropa"); */


