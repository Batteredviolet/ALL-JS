//Constructor de libros

// function Book(title, author, isbn){
//     this.title = title;
//     this.author = author;
//     this.isbn = isbn;
// }

//CON CLASE DE LIBROS

// let listLocal = [];

class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//Local Storage clase

class Store {
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        }else{
            books = JSON.parse(localStorage.getItem('books'))
        }
        return books;
    }
    static addBook(book){
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }
    static displayBooks(){
        const books = Store.getBooks();
        const ui = new Ui()
        books.forEach(book => {
            ui.addBooktoList(book);
        });
    }
    static deleteBook(isbn){
        const books = Store.getBooks();
        books.forEach((book, index) => {
            if(book.isbn === isbn){
                books.splice(index, 1)
            }
        })
        localStorage.setItem('books', JSON.stringify(books));
    }
}

document.addEventListener('DOMContentLoaded', Store.displayBooks)

//Constructor UI

// function Ui(){}

// Ui.prototype.addBooktoList = function(book){
//     const list = document.querySelector('#book-list');
//     //Crear un nuevo elemento tr
//     const row = document.createElement('tr');
//     row.innerHTML = `
//     <td>${book.title}</td>
//     <td>${book.author}</td>
//     <td>${book.isbn}</td>
//     <td><a href = "#" class = "delete"> X </a></td>
//     `;
//     list.appendChild(row);
// };

// Ui.prototype.deleteBook = function(target){
//         target.parentElement.parentElement.remove();
// };


// Ui.prototype.clearFields = function(){
//     document.querySelector('#title').value = '';
//     document.querySelector('#author').value = '';
//     document.querySelector('#isbn').value = '';
    
// };

// Ui.prototype.showAlert = function(msg, className){
//     //Crear un div para los mensajes
//     const div = document.createElement('div');
//     //Añadir la clase
//     div.className = `alert ${className}`;
//     //Añadir texto del mensaje que saldrá
//     div.textContent = msg;
//     //Recoger el contenedor
//     const contenedor = document.querySelector('.container');
//     //Recoger el formulario
//     const form = document.querySelector('#book-form');
//     //Div principal (padre), quien (div creado ahora), antes del form
//     contenedor.insertBefore(div, form);

//     //Esconder el alert
//     setTimeout(function (){
//         document.querySelector('.alert').remove();
//     }, 2000);
// }


//CON CLASE UI Y SUS MÉTODOS

class Ui{
    addBooktoList(book){
        const list = document.querySelector('#book-list');
    //Crear un nuevo elemento tr
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href = "#" class = "delete"> X </a></td>
        `;
        list.appendChild(row);
        
    }
    deleteBook(target){
        target.parentElement.parentElement.remove();
    }
    clearFields(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
    showAlert(msg, className){
            //Crear un div para los mensajes
        const div = document.createElement('div');
        //Añadir la clase
        div.className = `alert ${className}`;
        //Añadir texto del mensaje que saldrá
        div.textContent = msg;
        //Recoger el contenedor
        const contenedor = document.querySelector('.container');
        //Recoger el formulario
        const form = document.querySelector('#book-form');
        //Div principal (padre), quien (div creado ahora), antes del form
        contenedor.insertBefore(div, form);

        //Esconder el alert
        setTimeout(function (){
            document.querySelector('.alert').remove();
        }, 2000);
    }
}



const form = document.querySelector('#book-form');
form.addEventListener('submit', function(e){
    const title = document.querySelector('#title');
    const titleValue = title.value;
    const authorValue = document.querySelector('#author').value;
    const isbnValue = document.querySelector('#isbn').value;
    
    

    //Instanciar la UI
    const ui = new Ui();

    if(titleValue === '' || authorValue === '' || isbnValue === ''){
        ui.showAlert('Revisa que todos los campos estén rellenados', 'error')

    } else{
        //Instanciamos un libro
        const book = new Book(titleValue, authorValue, isbnValue);
       //Añadir el libro a la UI
        ui.addBooktoList(book);
        Store.addBook(book);
        // listLocal.push(book);
        // localStorage.setItem('Books', JSON.stringify(listLocal));
        //Mostramos el alert
        ui.showAlert('¡Añadido con éxito', 'success');
        //Limpiar campos
        ui.clearFields();
        title.focus(); 
    }
    

    e.preventDefault();

})

// //Local storage
// const parse = JSON.parse(localStorage.getItem('Books'))
// console.log(parse);
// window.addEventListener('DOMContentLoaded', localStorageToTable);
// function localStorageToTable (){
//     parse.forEach(element => {
//         const list = document.querySelector('#book-list');
//     //Crear un nuevo elemento tr
//         const row = document.createElement('tr');
//         row.innerHTML = `
//         <td>${element.title}</td>
//         <td>${element.author}</td>
//         <td>${element.isbn}</td>
//         <td><a href = "#" class = "delete"> X </a></td>
//         `;
//         list.appendChild(row);
//         listLocal.push(element)
//     });
// }

//Evento para eliminar

document.getElementById('book-list').addEventListener('click', function(e){
    if(e.target.className === 'delete'){
    
    // const text = e.target.parentElement.parentElement.textContent;
    // console.log(text);
    // const position = listLocal.findIndex()
    // console.log(position);
    // localStorage.setItem('Books',JSON.stringify(listLocal))
    const ui = new Ui()
    ui.deleteBook(e.target)
    //Eliminar también del Storage
    Store.deleteBook(e.target.parentElement.previousElementSibling.textContent)
    ui.showAlert('El libro se ha eliminado correctamente', 'success');
    
    }
})




