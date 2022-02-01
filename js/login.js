class Login {
    constructor(newUsername, password) {
        this.newUsername = newUsername;
        this.newPassword = newPassword;
    }
}

// traigo los datos ingresados en el local storage en la seccion singUP
const user = (JSON.parse(localStorage.getItem("persona")) == null ? [] : JSON.parse(localStorage.getItem("persona")));

// Cargamos si están en el localStorage, de lo contrario creamos un array vacío
let wedding = localStorage.getItem("DatosBoda") == null ? [] : JSON.parse(localStorage.getItem("DatosBoda"));



// pedimos que ingrese el ususario y contraseña
const newUsername = document.getElementById("username");
const newPassword = document.getElementById("password");
const formLogin = document.getElementById("formLogin");

//validación del formulario de usuarios
formLogin.addEventListener("submit", (e) => {
    e.preventDefault();

    for (person of user) {
        if ((newUsername.value === person.username) && (newPassword.value === person.password)) {

            // abrimos el modal con la funcion que esta en animaciones.js
            if (wedding.length === 0) modalOpenLogin();
            else window.location.href = "../secciones/bienvenidos.html";

        } else {
            document.getElementById("show2").textContent = `Usuario o contraseña incorrectos`;
        }
    }

});



//////////////////////MODAL INICIO DE USUARIO///////////////////




class WeddingData {
    constructor(boyfriend, girlfriend, date, location) {
        this.boyfriend = boyfriend;
        this.girlfriend = girlfriend;
        this.date = date;
        this.location = location;
    }
    //guardamos en el local storage
    saveDateWedding() {
        wedding.push(this);
        localStorage.setItem("DatosBoda", JSON.stringify(wedding));

    }
}


//llamanos a los elementos del html
const modalLoginError = document.getElementById("modalLoginError");
const modalLoginForm = document.getElementById("modalLoginForm");

// fecha
let date = new Date();

function zeroFill(number, width) {
    width -= number.toString().length;
    if (width > 0) {
        return new Array(width + (/\./.test(number) ? 2 : 1)).join('0') + number;
    }
    return number + ""; // siempre devuelve tipo cadena
}

document.getElementById("weddingDate").setAttribute("min", `${date.getFullYear()}-${zeroFill(date.getMonth()+1, 2)}-${zeroFill(date.getDate(), 2)}`)

//llamamos al evento para comenzar con la carga de datos
modalLoginForm.addEventListener("submit", validate)


function validate(e) {

    e.preventDefault();
    const boyfriend = document.getElementById("weddingBoyfriend").value;
    const girlfriend = document.getElementById("weddingGirlfriend").value;
    const date = document.getElementById("weddingDate").value;
    const location = document.getElementById("weddingLocation").value;

    /*validaciones*/
    if ((boyfriend != "" && /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(boyfriend)) && (girlfriend != "" && /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(girlfriend)) && (location != "" && /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(girlfriend))) {
        const newWedding = new WeddingData(boyfriend.toUpperCase(), girlfriend.toUpperCase(), date.toUpperCase(), location.toUpperCase());
        newWedding.saveDateWedding();
        //redireccionamos a la seccion de Bienvenidos
        window.location.href = "../secciones/bienvenidos.html";
    } else {
        modalLoginError.textContent = ("Debes completar todos los datos.");
    }
}

