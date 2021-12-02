document.getElementById('button')
        .addEventListener('click', loadData);

function loadData(){
    //crear una instancia de XmlHttpRequest
    const xhr = new XMLHttpRequest();
    xhr.open('GET', './js/data.txt', true);
    // xhr.onreadystatechange = function(){
    //     console.log(xhr.readyState);
    //     console.log('STATUS', this.status);
    //     if(this.status === 200 & this.readyState === 4){
    //         console.log(this.responseText);
    //     }else{
    //         console.log('Ha habido un error...');
    //     }
    // }
    xhr.onprogress = function(){
        console.log('READY STATE CHANGE', this.readyState);
        console.log('Procesando la petición');
    }
    xhr.onload = function(){
        console.log(this.readyState);
        if(this.status == 200){
            console.log(this.responseText);
            document.getElementById('salida').innerHTML = `
            <p>${this.responseText}</p>`
        }
    }
    xhr.onerror = function(){
        console.log('Ha ocurrido un error...');
    }
    xhr.send()
    /*Valores de los estados de la petición
    0: no inicializada
    1: se ha establecido la conexión con el servidor
    2: petición recibida
    3: procesando la petición
    4: petición finalizada
    */
}