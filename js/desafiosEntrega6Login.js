class Login { 
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

//validamos con los datos almacenados
const persons = [
    new Login("micaela", "12345678"),
    new Login("graciela", "12345678910"),
    new Login("angelito", "123456789"),
];

// pedimos que ingrese el ususario y contraseña
let username = prompt("Ingresa el nombre de usuario");
let password = prompt("Ingresa la contraseña");

const cont = (username, password)  =>{
    for (person of persons){
        if ((username === person.username) && (password === person.password)) {
            document.getElementById("show2").textContent =(`El usuario y contraseña son correctos, puedes continuar ${username}!`);
            return
        } 
    }
    document.getElementById("show2").textContent =(`Usuario o contraseña incorrectos`);
}


cont(username, password);