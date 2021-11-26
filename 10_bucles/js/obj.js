const users = [
    {id:1, name:'Pepe'},
    {id:2, name:'Jorge'},
    {id:3, name:'Sandra'},
    {id:4, name:'Eulogio'},
    {id:5, name:'Gori'},
    {id:6, name:'Neus'}
]
// console.log(users[0].name);
// console.log(users[1].name);
// console.log(users[2].name);
// console.log(users[3].name);
// console.log(users[4].name);
// console.log(users[5].name);

// for(let i = 0; i < users.length; i++){
//     console.log(users[i].name);
// }

// for(let i = 0; i <= 10; i++) {
//     if(i===5){
//         console.log('Estamos en el 5.....');
//         break;
//     }
//     console.log("numero: "+i)   
// }

// for(let i = 0; i <= 10; i++) {
//     if(i===5){
//         console.log('Estamos en el 5.....Continuar');
//         continue;
//     }
//     console.log("numero: "+i)   
// }

//caso util de continue
const carrito = [
    {name: 'producto 1',precio: 22, descuento:false},
    {name:'producto 2', precio:23, descuento:true},
    {name:'producto 3',precio:24, descuento:false},
    {name:'producto 4',precio:25, descuento:true},
    {name:'producto 5',precio:26, descuento:false}
]

for(let i = 0; i < carrito.length; i++ ){
    if(carrito[i].descuento){
        console.log('El producto' + carrito[i].name + " tiene descuento")
        continue;
    }
    console.log(carrito[i].name)
}