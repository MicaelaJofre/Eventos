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

