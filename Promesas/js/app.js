//USANDO --> Callbacks
/* const posts = [
    {titulo: 'Post 1', texto: 'Esto es el post 1'},
    {titulo: 'Post 2', texto: 'Esto es el post 2'}
]
function creatrPost(post, callback){
    setTimeout(function(){
        posts.push(post)
        callback()
    }, 3000)
}
function getPost(){
    setTimeout(function () {
        let lista = '';
        posts.forEach(function(post){
            lista += `<li>${post.titulo}</li>`;
        })
        document.querySelector('ul').innerHTML = lista;
    }, 2000);
}
creatrPost({titulo: 'Post 3', texto: 'Esto es el post 3'}, getPost) */


//USANDO --> PROMESAS

const posts = [
    {titulo: 'Post 1', texto: 'Esto es el post 1'},
    {titulo: 'Post 2', texto: 'Esto es el post 2'}
]
function creatrPost(post){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            posts.push(post);
            const error = false;
            if(!error){
                resolve()
            } else {
                reject()
            }
        }, 3000)
    })
}
function getPost(){
    setTimeout(function () {
        let lista = '';
        posts.forEach(function(post){
            lista += `<li>${post.titulo}</li>`;
        })
        document.querySelector('ul').innerHTML = lista;
    }, 2000);
}
creatrPost({titulo: 'Post 3', texto: 'Esto es el post 3'}).then(getPost).catch(function(){
    console.log("Ha habido un error");
})

creatrPost({titulo: 'Post 4', texto: 'Esto es el post 4'}).then(getPost).catch(function(){
    console.log('Ha habido un error');
})