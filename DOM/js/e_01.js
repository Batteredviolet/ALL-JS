let val;

/* val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType; */

/* val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action; */

/* val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0]; */

val = document.images;

val = document.scripts;

let links = document.links;
let linksArray = Array.from(links);
console.log(linksArray)

linksArray.forEach((link) => {
    console.log(link.href);
});
console.log(val);

//cambiar por imagenes de gatos random

const imagenes = document.images;
for(let i = 0; i < imagenes.length; i++){
    imagenes[i].src = "https://cataas.com/cat"
}
