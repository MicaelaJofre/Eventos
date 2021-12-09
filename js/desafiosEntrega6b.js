class Login {
    constructor(name, password) {
        this.name = name;
        this.password = password;
    }
    
    validateName(name) {
        
        if ((this.name != "") && (this.name.length > 6)) {
            document.getElementById("show").textContent = (`${this.name}, ya quedó guardado tu usuario`);
        } else {
            document.getElementById("show").textContent = ("El usuario tiene que tener más de 6 caracteres")
        }
    }
    validatePassword(password) {
        if ((this.password != "" )&& (this.password.length >8)) {
            document.getElementById("show2").textContent = (`Ya quedó guardado tu contraseña`);
        } else {
            document.getElementById("show2").textContent = ("La contraseña tiene que tener más de 8 caracteres")
        }
    }
}


const person1 = new Login("Micaela", "1234568558");
const person2 = new Login("Manu", "123456");

console.log(person1.name);

person1.validateName(person1.name);
person1.validatePassword(person1.password);

/* console.log(person2.name);

person2.validateName(person2.name);
person2.validatePassword(person2.password); */

