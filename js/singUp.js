class SingUp {
    constructor(username,email, password) {

        this.username = username;
        this.email = email;
        this.password = password;
    }
    // ingresamos los datos al local storage
    save() { 
    
        let usuarios =  localStorage.getItem("persona") == null ? [] : JSON.parse(localStorage.getItem("persona"));
        usuarios.push(this);
        return localStorage.setItem("persona", JSON.stringify(usuarios));
    }
}  


persons = [];


formSingUP.addEventListener("submit", (e) => {
    // pedimos al usuario el nombre de usuario y contraseña
    
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const show = document.getElementById("show");
    const formSingUP = document.getElementById("formSingUP");
    const btnSingUP = document.getElementById("btnSingUP");
    
    e.preventDefault();
    
    if ((username != "") && (username.length >= 6)) {
        if ((password != "") && (password.length >= 8)) {
            repeated(username, email, password, confirmPassword);
        } else {
            show.textContent = ("La contraseña tiene que tener más de 8 caracteres");
        }
    } else {
        show.textContent = ("El usuario tiene que tener más de 6 caracteres");
    }
});

// confirmamos que el email no se repita   
function repeated(username,email, password,confirmPassword) { 
    let person = new Set(username,email, password, confirmPassword);
    if (person.has(email) != true) {
        confirmPass(username,email, password, confirmPassword);
    } else {
        show.textContent = ("El email ya fue registrado");
        return false;
    }
}

// confirmamos que la contraseña coinsida con la confirmacion de la contraseña
function confirmPass(username,email, password,confirmPassword) {
    if (password === confirmPassword) {
        persons = new SingUp(username, email, password, confirmPassword);
        persons.save();
        start();
        
    } else { 
        show.textContent = ("Las contraseñas no coinsiden.");
        return false;
    }
}

function start() {
    window.location.href = "../secciones/login.html";
}