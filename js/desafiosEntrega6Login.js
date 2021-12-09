class Login { 
    constructor(username, password) {
        
        this.username = username;
        this.password = password;

    }
    validate(username, password) { 

        if (username == this.username) {

            if (password == this.password) {

                document.getElementById("show2").textContent = (`El usuario y contraseña son correctos, puedes continuar ${username}!`);
                

            } else {

                document.getElementById("show2").textContent = (`La contraseña es incorrecta`);
                
                
            }
        } else {

            document.getElementById("show2").textContent = (`El usuario es incorrecto`);
            
            
        }

    }

}


// pedimos que ingrese el ususario y contraseña

let username = prompt("Ingresa el nombre de usuario");
let password = prompt("Ingresa la contraseña");

//validamos con los datos almacenados

const persons = [
    new Login("micaela", "12345678"),
    new Login("graciela", "12345678910"),
    new Login("angelito", "123456789"),
];


const cont = (username, password)  =>{
    
    for (person of persons){

        if ((username === person.username) && (password === person.password)) {

            person.validate(username, password);
            break;
        } 

    }
    
    document.getElementById("show2").textContent = (`error`);
}

cont();