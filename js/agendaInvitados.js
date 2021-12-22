class Guest { 
    constructor(name, lastname,id) { 
        this.name = name;
        this.lastname = lastname;
        this.id = Math.random(1, 100);

    }
    //guardamos en el local storage
    saveGuests() { 
        guests.push(this);
        localStorage.setItem("invitado", JSON.stringify(guests));
    }
}


//llamamos a los elementos del html
let guests = [];
const personsGuests = document.getElementById("personsGuests");
const modalGuests = document.querySelector(".modalGuests");
const textNoGuests = document.querySelector(".textNoGuests");


// carga los datos guardados en el local storage
window.addEventListener("load", () => {
    guests = localStorage.getItem("invitado") == null ? [] : JSON.parse(localStorage.getItem("invitado"));
    list();
});


// llamamos al evento para comenzar con la carga de datos
modalGuests.addEventListener("submit", openModal);



// validamos los datos ingresado por el modal
function openModal(e) {
    e.preventDefault();
    let guestsName = document.getElementById("guestsName").value;
    let guestsLastname = document.getElementById("guestsLastname").value;
    if ((guestsName != "") && (typeof value != Number)) {
        if (((guestsLastname != "") && (typeof value != Number))) {
            
            const newGuests = new Guest(guestsName, guestsLastname);
            newGuests.saveGuests();
            list();
        }
    }   
}


// creamos la ficha de cada uno de los invitados
function list() {
    personsGuests.innerHTML = ``;
    
    for (let guest of guests) {

        let rowGuest = document.createElement("div");
            rowGuest.className = "persons";
            rowGuest.innerHTML = ` 
                <input class="persons pb" form="guestsList__form" type="checkbox">
                <label class="persons">${guest.name} ${guest.lastname}</label>       
                <span class="material-icons pb persons__ok">done_outline</span>
                <select class="persons pb" name="select">
                    <option value="value1" selected>Confirmado</option>
                    <option value="value2">Pendiente</option>
                    <option value="value3">Cancelado</option>
                </select>
                <span class="material-icons pb persons">edit</span>
                <span class="material-icons pb persons" onClick="deleteGuests(${guest.id})">delete</span><br><br>`;
            
            personsGuests.appendChild(rowGuest);  
            textNoGuests.style.display = "none";
    };   
}


// creamos funcion para borrar elementos del html y del local storage
function deleteGuests(id) {
    this.event.target.parentElement.remove();
    let guestSelect = guests.filter((element)=> {
        if (element.id != id) { 
            return element;
        }
    });
    localStorage.setItem("invitado", JSON.stringify(guestSelect));
    textNoGuests.style.display = "block";
}








