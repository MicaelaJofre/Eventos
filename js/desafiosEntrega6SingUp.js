class SingUp {
    constructor(name, password) {

        this.name = name;
        this.password = password;
    }
    
}  

persons = [];

function validate(username, password) {
        
        if ((username != "") && (username.length > 6)) {

            if ((password != "") && (password.length > 8)) {
                
                document.getElementById("show").textContent = (`Ya quedaste registrado ${username}`);

                // ingresamos los datos al objeto
                persons = new SingUp(username, password);
            
            } else {
                
                document.getElementById("show").textContent = ("La contraseña tiene que tener más de 8 caracteres")
            }
        
        } else {
            document.getElementById("show").textContent = ("El usuario tiene que tener más de 6 caracteres")
        }
}

    
// pedimos al usuario el nombre de usuario y contraseña

const username = (prompt("dime el usuario"));
const password = (prompt("dime la contraseña"));


// llamamos a la función para validar lo ingresado por el usuario

validate(username, password);

//imprimos por consola el objeto

console.log(persons)


