class Options {
    constructor(events, style, colors) {

        this.events = events;
        this.style = style;
        this.colors = colors;

    }
    start() {

        alert(`Ya seleccionaste la opción que más te gusta, repasemos: tu evento es un ${this.events}, elegiste el estilo con ${this.style} y el color ${this.colors},si esto es correcto y quieres continuar ingresa "si", en el caso contrario ingresá "no".  `);
    }

    continue(a){

        if (a === "SI") {

            alert("Espectacular! Continuemos...");

        } else if (a === "NO") {

            alert("Gracias por tu visita, esperamos verte pronto ;)");

        } else {

            alert("la opción ingresa es inválida");
        }
    }
    
}

const person1 = new Options("cumpleaños", "animales", "rosa");
const person2 = new Options("casamiento", "flores", "azul");
const person3 = new Options("bautismo", "animales", "verde");

//mostramos en consola los tres objetos
console.log(person1, person2, person3);

//lamamos a la primer función
person2.start();

//pedimos datos
let choise = (prompt('Marque si o no').toUpperCase());

//lamamos a la segunda función
person2.continue(choise);
