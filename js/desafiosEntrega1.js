//ejercicio n°1

alert('Bienvenidos a "Eventos".\nCreá una web para tu evento a tu gusto, sin esfuerzo y totalmente gratis para que puedas compartir tu gran día con los que más quieres!');

let name1 = prompt("Dime tu nombre: ");
alert("Hola " + name1 + " empecemos!");


//ejercicio n°2

alert("Antes que nada, puedes donar el dinero que desees para que la página continue siendo gratuita.\nEsperamos tu colaboración!");

let donation = parseFloat(prompt("Escribe la cifra que deseas donar: "));
let donations = 1200.3
let total = (donation + donations).toFixed(2);
alert("Gracias por tu donación :)\nCon tu colaboración llevamos recaudado un total de $" + total + " .\nVamos por más!");

//ejercicio n°3

alert("Querémos saber mas de vos!\nElije una opción para saber más de lo que estas buscando.");
let event1 = prompt("Sobre que evento te interesa conocer más: cumpleaños, casamientos o bautismos");
let colors = prompt("Por último, escribe un color para saber más de tus gustos.")
alert("Recibirás en tu email información sobre: " + event1 + ", y te mostraremos plantillas basadas en el color que elegiste: " + colors + ".\nNo olvides que nos puedes encontrar en las redes sociales para más consultas.\nGracias!" );

