

function iniciar(){
    primeraFuncion();
    miFuncion();
}

function primeraFuncion(){
    console.log("Saludos a todos!")
    miNombre('Toni');
}

function miNombre(nombre) {
    console.log('Me llamo '+ nombre);
}

const miFuncion = function(){
    console.log("función como expresión ")
}

iniciar();