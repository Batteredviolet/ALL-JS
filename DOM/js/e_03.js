// document.getElementsByClassName
// const items = document.getElementsByClassName('collection-item')
// console.log(items);
// console.log(items[2]);
// items[2].style.color = 'red'
// items[2].textContent = 'Hola'

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems)

// document.getElementsByTagName()

let list = document.getElementsByTagName("li");

list = Array.from(list);
list.reverse();
list.forEach((item, index) => {
  console.log(item);
  console.log(item.textContent);
  item.textContent = `${index} task`;
});

console.log(list);

/* const items = document.querySelectorAll("ul.collection li.collection-item");

items.forEach(function (item, index) {
  item.textContent = `${index}: holaaaa`;
});

console.log(items);

const listOdd = document.querySelectorAll("li:nth-child(odd)");
const listEven = document.querySelectorAll("li:nth-child(even)");

listOdd.forEach((li) => (li.style.background = "#ccc"));
listEven.forEach((li) => (li.style.background = "red"));
 */

document.querySelector