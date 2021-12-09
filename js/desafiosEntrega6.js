class Username {
    constructor(events, style, colors) {

        this.events = events;
        this.style = style;
        this.colors = colors;
        this.info = `Ya seleccionaste la opción que más te gusta, repasemos: tu evento es un ${this.events}, elegiste el estilo con ${this.style} y el color ${this.colors},si esto es correcto y quieres continuar ingresa "si", en el caso contrario ingresá "no". ` 

    }

    start() {
        alert(this.info);
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

//array
const persons = [];

//sumamos datos al array
persons.push(new Username("cumpleaños", "flores", "lila"));
persons.push(new Username("cumpleaños", "animales", "amarillo"));
persons.push(new Username("bautismo", "flores", "verde"));


for (person of persons) {

    //lamamos a la primer función
    person.start();

    //pedimos datos
    let choise = (prompt('Marque si o no').toUpperCase());
    
    //lamamos a la segunda función
    person.continue(choise);
    
    //mostramos en consola
    console.log(person);
}

//ordenamos por estilo alfabeticamente
let newOrder = persons.sort(function (a,b) { return (a.style < b.style)? -1 : 1});
console.log(newOrder);
