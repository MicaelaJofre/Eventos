//calcular costo de los productos seleccionados por el usuario

let colors = "";

let style = "";

let total = 0;

let totalBirthday = "15000";

let totalBaptism = "18000";

let totalMarriage = "21000";


const calc = (events, colors, style) => {
    
    let total = parseInt(events) + parseInt(colors) + parseInt(style);

    alert("El total a pagar con la eleccion del color y el estilo es $" + total);

}

const option = (events) => {

    let colors = parseInt(prompt("Elige la opción que deseas para el color de fondo: 1-azul \n y 2-rojo"));

    if (colors === 1) {

        alert("Elegiste azul tiene un costo adicional de $100");
        
        colors = 100;
        
        style = prompt("Ahora elige un diseño de fondo: animales o floral").toUpperCase();

        if (style === "ANIMALES") {
            
            alert("Elegiste diseño de animales tiene un costo extra de $500");
            
            style = 500;

            calc(events, colors, style);

        } else if (style === "FLORAL") {
            
            alert("Elegiste diseño floral tiene un costo extra de $700");
            
            style = 700;

            calc(events, colors, style);

        } else {

            alert("La opcion ingresada es incorrecta")
        }


    } else if (colors === 2) {

        alert("Elegiste rojo tiene un costo adicional de $200");

        colors = 200;
        
        style = prompt("Ahora elige un diseño de fondo: animales o floral").toUpperCase();

        if (style === "ANIMALES") {
            
            alert("Elegiste diseño de animales tiene un costo extra de $500");
            
            style = 500;

            calc(events, colors, style);

        } else if (style === "FLORAL") {
            
            alert("Elegiste diseño floral tiene un costo extra de $700");
            
            style = 700;

            calc(events, colors, style);

        } else {

            alert("La opcion ingresada es incorrecta");
    
        }


    } else {
        
        alert("La opcion ingresada es incorrecta");
    }
}





let events = prompt("Elige la opción que quieras: cumple, casamiento, bautismo").toUpperCase();

if ((events === "CUMPLE") && (events != " ")) {

    events = totalBirthday;

    option(events);


} else if ((events === "CASAMIENTO") && (events != " ")) {

    events = totalMarriage;

    option(events);

    
} else if ((events === "BAUTISMO") && (events != " ")) {

    events = totalBaptism;

    option(events);


} else {
    
    alert("La opción elegida no existe.")
}
