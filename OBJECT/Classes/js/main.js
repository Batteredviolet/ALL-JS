class Persona {
    constructor(nombre, apellidos, cumple){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.cumple = new Date(cumple);
    }
    saludar(){
        return `Hola me llamo ${this.nombre} ${this.apellidos} y nací en el año ${this.cumple}`
    }
    calcularEdad(){
        const diff = Date.now() - this.cumple.getTime();
        const fechaEdad = new Date(diff);
        return Math.abs(fechaEdad.getFullYear() - 1970);
    }
};

const paco = new Persona('Paco', 'García Gutierrez', '12-01-1992');
console.log(paco.calcularEdad());


//HERENCIA CON CLASES



class Mutante extends Persona {
    constructor(nombre, apellidos, cumple, nick, superpower){
        super(nombre, apellidos, cumple);
        this.nick = nick;
        this.superpower = superpower;
    }
}

const lobezno = new Mutante('Logan', 'Martínez', 1998, 'Lobezno', 'No se corta las uñas');
console.log(lobezno);