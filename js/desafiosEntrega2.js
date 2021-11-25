let pay = 0;

let totalBirthday = "15000";

let totalBaptism = "18000";

let totalMarriage = "21000";

let events = parseInt(prompt("Bienvenidos, indique para que evento desea crear su sito web. Marque:\n1-cumpleaño infantil\n2-casamiento\n3-bautismo"));

if (events === 1) { 

    pay = prompt("Escribe la opción de pago: tarjeta o efectivo. Si abonas con tarjeta tiene un recargo del 20%.").toUpperCase();

    if ((pay != "") && (pay === "TARJETA")) {

        totalBirthday = parseFloat(totalBirthday) + parseFloat(totalBirthday * 0.2);

        alert("El saldo total a pagar es: $" + totalBirthday);

    } else if ((pay != "") && (pay === "EFECTIVO")) {

        alert("El saldo total a pagar es: $" + totalBirthday);

    } else {

        alert("Los datos ingresados son incorrectos. Vuelva a intentar.");

    }

} else if (events === 2) {

    pay = prompt("Escribe la opción de pago: tarjeta o efectivo. Si abonas con tarjeta tiene un recargo del 20%.").
    toUpperCase();
    
    if ((pay != "") && (pay === "TARJETA")) {
    
        totalMarriage = parseFloat(totalMarriage) + parseFloat(totalMarriage * 0.2);
    
        alert("El saldo total a pagar es: $" + totalMarriage);
    
    } else if ((pay != "") && (pay === "EFECTIVO")) {
    
        alert("El saldo total a pagar es: $" + totalMarriage);
    
    } else {
    
        alert("Los datos ingresados son incorrectos. Vuelva a intentar.");
    
    }

} else if (events === 3) {

    pay = prompt("Escribe la opción de pago: tarjeta o efectivo. Si abonas con tarjeta tiene un recargo del 20%.").toUpperCase();

    if ((pay != "") && (pay === "TARJETA")) {

        totalBaptism = parseFloat(totalBaptism) + parseFloat(totalBaptism * 0.2);

        alert("El saldo total a pagar es: $" + totalBaptism);

    } else if ((pay != "") && (pay === "EFECTIVO")) {

        alert("El saldo total a pagar es: $" + totalBaptism);

    } else {

        alert("Los datos ingresados son incorrectos. Vuelva a intentar.");

    }

} else {

    alert("La opción indicada no es válida, vuelva a intentar.")

}