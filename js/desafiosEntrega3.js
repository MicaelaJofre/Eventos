// primer ejercicio

let webMarriage = "21000";
let total = 0;
let next = "";

alert("Dependiendo la opción a agregar que elijas tendrá un recargo en el total a pagar.");

let option = prompt("Elige la opción que quieras: Presupuesto, Menu,  o Videos").toUpperCase();

while ((option === "PRESUPUESTO" || option === "MENU" || option === "VIDEOS") && (option != "ESC") && (option != " ")) {
    
    switch (option) {
        
        case "PRESUPUESTO":

            total = 50;

            alert("El recargo será de: " + total);
            
            break;

        case "MENU":

            total = 80;

            alert("El recargo será de: " + total);
            
            break;
        
        case "VIDEOS":

            total = 150;

            alert("El recargo será de: " + total);
            
            break;
        
        default:

            alert("Error, tienes que eligir una de las tres opciones disponibles.");

    }
    
    option = prompt("ingrese ESC para salir").toUpperCase();
}

if (option === "ESC") {
    
    alert("Gracias");

} else {
    
    alert("La opción ingresada es erronea.");

}

// segundo ejercicio

let final = 0;

let name = prompt("ingesa tu nombre: ");

for (let i = 1; i <= 3; i++) {
    
    if (i === 1) {
        
        final = 100 + 10;

        console.log(name + " " + final);

    }
    if (i === 2) {
        
        final = 100 + 20;

        console.log(name + " " + final);
        
    }
    if (i === 3) {
        
        final = 100 + 30;

        console.log(name + " " + final);
        
    }
}

// tercer ejercicio

let num1 = 100;

let num = parseInt(prompt("ingresa un número: "))

for (let j = 1; j <= 10; j++) {
    
    num = num + num1;

    console.log("Total de la suma: " + num + " ,en la posición: " + j);

}

// cuarto ejercicio

let num2 = parseInt(prompt('Dime la cantidad de veces que quieras que se repita "Hola"'));

for (let x = 1; x <= num2; x++) {
    
    console.log("Hola");
}