let totalBirthday = "15000";

let totalBaptism = "18000";

let totalMarriage = "21000";

let res = 0;

class Options {
    
    constructor(events, style, colors) {

        this.events = events;
        this.style = style;
        this.colors = colors;
        this.info = `Ya seleccionaste la opción que más te gusta, repasemos: tu evento es un ${this.events}, elegiste el estilo con ${this.style} y el color ${this.colors}\nSi esto es correcto y quieres continuar ingresa "SI", en el caso contrario ingresá "NO". ` 

    }

    start() {
        alert(this.info);
    }

    continue(a){

        if (a === "SI") {

            alert("Espectacular! Continuemos...");

            //implementamos el método total
            this.total();

        } else if (a === "NO") {

            alert("Gracias por tu visita, esperamos verte pronto ;)");

        } else {

            alert("la opción ingresa es inválida");
        }
    }
    total() {
        
        if (this.events == "cumpleaños") {
            
            res = parseInt(totalBirthday) + parseInt(totalBirthday * 0.21);

            alert(`El total a pagar con iva es $${res}`);

        } else if (this.events == "boda") {
            
            res = parseInt(totalMarriage) + parseInt(totalMarriage * 0.21);

            alert(`El total a pagar con iva es $${res}`);

        }else if (this.events == "bautismo") {parseInt
            
            res = parseInt(totalBaptism) + parseInt(totalBaptism * 0.21);

            alert(`El total a pagar con iva es $${res}`);

        }
    }
    
}

//array
const persons = [];

//sumamos datos al array
persons.push(new Options("cumpleaños", "flores", "azul"));
persons.push(new Options("cumpleaños", "animales", "rojo"));
persons.push(new Options("bautismo", "flores", "azul"));



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