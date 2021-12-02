function Cometa(nombre, diametro, temperatura){
    this.nombre = nombre;
    this.diametro = diametro;
    this.temperatura = temperatura;
    // this.definicion = 'Cuerpo celeste blablablablablablabla.'
    
}

// Cometa.prototype.definicion = 'Cuerpo celeste blablablablablablabla.'
// Cometa.prototype.calcRadio = function(){
//     return this.diametro/2;
// }
// Cometa.prototype.getFar = function(){
//     return this.temperatura * 9 / 5 + 32;
// }

const protoCometa = {
    definicion: 'Cuerpo celeste blablablablablablabla.',
    calcRadio: function(){
             return this.diametro/2;
         },
    getFar: function(){
             return this.temperatura * 9 / 5 + 32;
         }
}

Cometa.prototype = protoCometa;


const a = new Cometa('Halley', 900, 1800);
const b = new Cometa('Periquito', 670, 1200);
const c = new Cometa('Jaimito', 460, 1400);
console.log(a.calcRadio(), b, c);