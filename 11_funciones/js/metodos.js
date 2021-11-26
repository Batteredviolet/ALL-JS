// Las funciones que estan en un objeto se llaman métodos

const mp3 = {
    color: 'rojo',
    reproduciendo: false,
    play: function(id) {
        console.log(' Reproduciendo la pista ' + id);
    },
    pausar: function(id){

    },
    cambiarColor: function(nuevoColor){
        this.color = nuevoColor;
    },
    imprimeThis: function(){
            console.log(this)      
    }
}

mp3.play(1);
console.log(mp3.color);
mp3.cambiarColor('verde');
console.log(mp3.color);
mp3.imprimeThis();
console.log(this)
