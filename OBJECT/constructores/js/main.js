// function User(name, age){
//     this.name = name;
//     this.age = age;
// }

// let user = new User('Paco', 24);
// let user1 = new User('Isma', 35);
// console.log(user1);

//Métodos en constructor

 function User(name, age){
     this.name = name;
     this.age = age;
     this.sayHi = function(){
         console.log('Mi nombre es ' + this.name + ' y tengo ' + this.age + ' años.');
     };
 }

 let userIsma = new User('Isma', 25);
 userIsma.sayHi();

 