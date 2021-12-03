document.querySelector('#button1').addEventListener('click', getText);
document.querySelector('#button2').addEventListener('click', getJson);
document.querySelector('#button3').addEventListener('click', getData);
const salida = document.querySelector('#salida');
const lista = document.querySelector('#lista')
//Archivo de texto local
function getText(){
    fetch('data.txt')
    .then(function(respuesta){
        return respuesta.text();
    })
    .then(function(data){  //este data hace referencia a la respuesta.text
        console.log(data);
        lista.innerHTML = data;
    })
    .catch(function(error){
        console.log('Ha habido un error...')
    })
}

//Desde un .json
function getJson(){
    fetch('pos_ts.json')
    .then(res => {
        console.log(res);
        if(!res.ok){
            console.log('Error...');
            throw new SyntaxError('Error '+res.status)
        }
        return res;

    })
    .then(res => res.json())
    
    .then(function(posts){
        console.log(posts);
        let lis = '';
        posts.forEach(function(post){
            lis += `<li>${post.title} || ${post.body}</li>`
        })
        lista.innerHTML = lis;
    })
    .catch((err) => console.log(err))
    // .catch(function(error){
    //     console.log('Ha habido un error...');
    // })
}

//Desde un API externa
function getData(){
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(res => res.json())
    .then(function(pokemon){
        console.log(pokemon);
        let lis = `${pokemon.name}`;
        pokemon.abilities.forEach(function(skill){
            lis += `<li>${skill.ability.name} </li>`
        })
        lista.innerHTML = lis;
    })
    
}