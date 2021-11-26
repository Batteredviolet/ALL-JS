let timerId = setTimeout(function(pers1){
    console.log(`Hola mi querido ${pers1}`)
}, 2000, 'Carlos')

let timerId2 = setTimeout(function(pers1){
    console.log(`Hola mi querido ${pers1}`)
}, 4000, 'Pedro')
clearTimeout(timerId2)

console.log(timerId);

