let val;

const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item:first-child");

val = list;
val = listItem;

//Obtener nodos hijos

val = list.childNodes;
val = list.childNodes[1].nodeName;
val = list.childNodes[0].nodeType;

//tipos de nodos
//1 - Elemento
//2 - Atributo ( descatalogado)
//3 - Texto
//8 - Comentarios
//10 - Doctype

//Elementos hijos
val = list.children;
val = list.children[1];
val = list.children[1].textContent = "Hola caracola";
//Hijos de los hijos
// val = list.children[3].children[0].children[0].className = "fa fa-address-card";
// val = list.children[3].children[0].children[0].classList.replace("fa-remove","fa-address-card");

//primer nodo
val = list.firstChild;
val = list.firstElementChild;

// val = list.lastChild;
// val = list.lastElementChild

val = list.childElementCount;

//Obtener el elemento padre
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

//Siblings
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling;

val = listItem.previousElementSibling;

console.log(val);
