class Login { 
    constructor(newUsername, password) {
        this.newUsername = newUsername;
        this.newPassword = newPassword;
    }
}

// traigo los datos ingresados en el local storage en la seccion singUP
const user = (JSON.parse(localStorage.getItem("persona")) == null ? [] : JSON.parse(localStorage.getItem("persona")));

// pedimos que ingrese el ususario y contraseña
const newUsername = document.getElementById("username");
const newPassword = document.getElementById("password");
const formLogin = document.getElementById("formLogin");

formLogin.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    for(person of user) {
        if ((newUsername.value === person.username) && (newPassword.value === person.password)) {
            window.location.href = "../secciones/bienvenidos.html"
        } else { 
            document.getElementById("show2").textContent = (`Usuario o contraseña incorrectos`);
        }
    }
    
});










//////////////////////MODAL INICIO DE USUARIO///////////////////
/* 
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

let wedding = [];

//llamanos a los elementos del html
const modalLoginError = document.getElementById("modalLoginError");
const modalLoginForm = document.getElementById("modalLoginForm");

// elemento del html de la seccion Bienvenidos 
const weddingBoyfriendsWelcome = document.getElementById("weddingBoyfriendsWelcome");
const weddingDateWelcome = document.getElementById("weddingDateWelcome");
const weddingLocationWelcome = document.getElementById("weddingLocationWelcome");


//llamamos al evento para comenzar con la carga de datos
modalLoginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const boyfriend = document.getElementById("weddingBoyfriend").value;
    const girlfriend = document.getElementById("weddingGirlfriend").value;
    const date = document.getElementById("weddingDate").value;
    const location = document.getElementById("weddingDate").value;

    if ( (boyfriend != "" && /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(boyfriend)) && (girlfriend != "" && /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(girlfriend)) && (location != "" && /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(guestsName)) ) {
        const newWedding = new WeddingData(boyfriend, girlfriend, date, location);
        newWedding.saveDateWedding();
        goWelcome();
    } else { 
        modalLoginError.textContent = "Debes completar todos los datos.";
    }
});

// Avanzamos a la siguiente página

function goWelcome() {
    window.location.href = "../secciones/bienvenidos.html";
    weddingBoyfriendsWelcome.textContent = `${wedding.boyfriend} & ${wedding.girlfriend}`;
    weddingDateWelcome.textContent = `La boda será el ${wedding.date}`;
    weddingLocationWelcome.textContent = `En la ciudad de ${wedding.location}`;

} */