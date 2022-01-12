class Guest { 
    constructor(name, lastname,age, menu, group, assistance,tel,email,address,location, country,postcard,id) { 
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.menu = menu;
        this.group = group;
        this.assistance = assistance;
        this.tel = tel;
        this.email = email;
        this.address = address;
        this.location = location;
        this.country = country;
        this.postcard = postcard;
        this.id = Math.random(1, 100);
    }

    //guardamos en el local storage
    saveGuests() { 
        guests.push(this);
        localStorage.setItem("invitado", JSON.stringify(guests));
    }
}

// carga los datos guardados en el local storage
window.addEventListener("load", () => {
    list();
});

let checkSelected = [];

//llamamos a los elementos del html
let guests = [];
const modalGuests = document.getElementById("modalGuests");

/* contador de invitados */
const totalConfirmed = document.getElementById("totalConfirmed");
const totalGuest = document.getElementById("totalGuest");

/* selector para ordenar las listas de invitados */
const guestsAddMenu = document.getElementById("guestsAdd__menu");

/* ubicacion asistencia */
const personsGuestsConfirmed = document.getElementById("personsGuestsConfirmed");
const personsGuestsSlopes = document.getElementById("personsGuestsSlopes");
const personsGuestsCanceled = document.getElementById("personsGuestsCanceled");

/* ubicacion menu */
const personsGuestsAdults = document.getElementById("personsGuestsAdults");
const personsGuestsKids = document.getElementById("personsGuestsKids");
const personsGuestsVegetarian = document.getElementById("personsGuestsVegetarian");

/* ubicacion grupo */
const personsGuestsBoyfriends = document.getElementById("personsGuestsBoyfriends");
const personsGuestsFamily = document.getElementById("personsGuestsFamily");
const personsGuestsFriends = document.getElementById("personsGuestsFriends");
const personsGuestsCoworkers = document.getElementById("personsGuestsCoworkers");

/* mensaje de no hay invitados en asistencia */
const textNoGuestsConfirmed = document.querySelector(".textNoGuestsConfirmed");
const textNoGuestsSlopes = document.querySelector(".textNoGuestsSlopes");
const textNoGuestsCanceled = document.querySelector(".textNoGuestsCanceled");

/* mensaje de no hay invitados en menu */
const textNoGuestsAdults = document.querySelector(".textNoGuestsAdults");
const textNoGuestsKids = document.querySelector(".textNoGuestsKids");
const textNoGuestsVegetarian = document.querySelector(".textNoGuestsVegetarian");

/* mensaje de no hay invitados en grupo */
const textNoGuestsBoyfriends = document.querySelector(".textNoGuestsBoyfriends");
const textNoGuestsFamily = document.querySelector(".textNoGuestsFamily");
const textNoGuestsFriends = document.querySelector(".textNoGuestsFriends");
const textNoGuestsCoworkers = document.querySelector(".textNoGuestsCoworkers");


/* mensajes de error del modal */
const error = document.getElementById("error");
const errorName = document.getElementById("errorName");
const errorLastname = document.getElementById("errorLastname");
const errorTel = document.getElementById("errorTel");
const errorEmail = document.getElementById("errorEmail");
const errorPostcard = document.getElementById("errorPostcard");

/* checkbox */
const formGuestSelectTotal = document.getElementById("formGuestSelectTotal");
const openCheckbox = document.getElementById("openCheckbox");
const checkboxSelectionTotalGuest = document.getElementById("checkboxSelectionTotalGuest");


//oculto el botón de eliminar todos - seleccionar todos
openCheckbox.style.display = "none";


//checkbox seleccionar a todos 
checkboxSelectionTotalGuest.addEventListener("click", () => {
    
    const checkboxes = document.getElementsByTagName('input');
    for(i=0; i < checkboxes.length; i++){
        if (checkboxes[i].type == "checkbox") {
            //cambia el estado de los checkbox al estado de del checkbox selecionar todos
            checkboxes[i].checked = checkboxSelectionTotalGuest.checked;

            if (checkboxSelectionTotalGuest.checked) {
                openCheckbox.style.display = "block";
            } else {
                openCheckbox.style.display = "none";
            }
		}
    }
    //si se deselecciona el bton selecionar todos se transforma en un array vacio
    if (!this.event.target.checked) {
        checkSelected = [];
    }
});


// función para detectar el checkbox seleccionado
function checkboxDelet(id) {
    openCheckbox.style.display = "block";
    if (this.event.target.checked) {
        checkSelected.push(id);
    } else {
        checkSelected = checkSelected.filter(x => x != id);
    }
    if (checkSelected.length === 0) {
        openCheckbox.style.display = "none";
    }
}

// borrar los checkbox seleccionados
openCheckbox.addEventListener("click", (e) => {
    e.preventDefault();
    for (let id of checkSelected) {
        deleteGuests(id);
    }
    openCheckbox.style.display = "none";
});


// llamamos al evento para comenzar con la carga de datos
modalGuests.addEventListener("submit", openModal);



// validamos los datos ingresado por el modal
function openModal(e) {
    e.preventDefault();
    
    let guestsName = document.getElementById("guestsName").value;
    let guestsLastname = document.getElementById("guestsLastname").value;

    const guestsAge = document.getElementById("modalGuestsAge").value;
    const guestsMenu = document.getElementById("modalGuestsMenu").value;
    const guestsGroup = document.getElementById("modalGuestsGroup").value;
    const guestsAssistance = document.getElementById("modalGuestsAssistance").value;

    const guestsTel = document.getElementById("modalGuestsTel").value;
    const guestsEmail = document.getElementById("modalGuestsEmail").value;
    const guestsAddress = document.getElementById("modalGuestsAddress").value;
    const guestsLocation = document.getElementById("modalGuestslocation").value;
    const guestsCountry = document.getElementById("modalGuestsCountry").value;
    const guestsPostcard = document.getElementById("modalGuestsPostcard").value;

    /* validacion */
    if ((guestsName != "") && (/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(guestsName))) {
        if ((guestsLastname != "") && (/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(guestsLastname))) {
            if ((guestsTel != "") && (/^\d{1,14}$/.test(guestsTel))) {
                if ((guestsPostcard != "") && (/^\d{4}$/.test(guestsPostcard))) {
                    if ((guestsEmail != "") && (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(guestsEmail))) {
                        if ((guestsLocation != "") && (guestsAddress != "")) {

                            const newGuests = new Guest(guestsName, guestsLastname, guestsAge, guestsMenu, guestsGroup, guestsAssistance, guestsTel, guestsEmail, guestsAddress, guestsLocation, guestsCountry, guestsPostcard);
                            newGuests.saveGuests();
                            list();
                            modalHiddenGuest();
                            modalGuests.reset();
                            errorName.remove()
                            errorLastname.remove();
                            errorTel.remove();
                            errorEmail.remove();
                            errorPostcard.remove();
                            error.remove();

                        } else {
                            error.textContent = ("Completa todos los datos.");
                        }
                    } else {
                        errorEmail.textContent = ("El email no debe contener espacios.");
                    }
                } else {
                    errorPostcard.textContent = ("El código postal debe contener 4 dígitos y deben ser solo números.");
                }
            } else {
                errorTel.textContent = ("El teléfono solo debe contener números y el máximo es de 14 dígitos.");
            }
        } else {
            errorLastname.textContent = ("El apellido no puede contener números.");
        }
    
    } else { 
        errorName.textContent = ("El nombre no puede contener números.");
    }

}


// creamos la ficha de cada uno de los invitados
function list() {
    // Cargo en la variable guest los invitados guardados en el local storage
    guests = localStorage.getItem("invitado") == null ? [] : JSON.parse(localStorage.getItem("invitado"));

    personsGuestsConfirmed.innerHTML = ``;
    personsGuestsSlopes.innerHTML = ``;
    personsGuestsCanceled.innerHTML = ``;


    // Musetra "No hay invitados" en todas las secciones
    textNoGuestsConfirmed.style.display = "block";
    textNoGuestsSlopes.style.display = "block";
    textNoGuestsCanceled.style.display = "block";

    for (let guest of guests) {

        let rowGuest = document.createElement("tr");
        rowGuest.className = "persons";
        rowGuest.innerHTML = ` 
            <td>
            <input class="checkboxGuest" id = "${guest.id}" onClick="checkboxDelet(${guest.id})" form="guestsAdd__form" type="checkbox">
            </td>
            <td>
            <span>${guest.name} ${guest.lastname}</apan>
            </td>
            <td>
            <span class="material-icons persons__icon">done_outline</span>
            <select id="choise" onChange="choise(${guest.id})" class="choise" name="select">
                <option value="Confirmado" ${ guest.assistance == "Confirmado" ? "selected" : ""}>Confirmado</option>
                <option value="Pendiente" ${ guest.assistance == "Pendiente" ? "selected" : ""}>Pendiente</option>
                <option value="Cancelado" ${ guest.assistance == "Cancelado" ? "selected" : ""}>Cancelado</option>
            </select>
            </td>
            <td>
            <span class="material-icons">edit</span>
            </td>
            <td>
            <span class="material-icons" Id = ${guest.id} onClick="deleteGuests(${guest.id})">delete</span><br><br>
            </td>`;
        
        
        // ubicación según el orden del selector asistencia, menu o grupo

        switch (guestsAddMenu.value) {
    
            case "Asistencia":
                // ubicación confirmado, pendiente y cancelado    
                if (guest.assistance === 'Confirmado') {
                    personsGuestsConfirmed.appendChild(rowGuest);
                    textNoGuestsConfirmed.style.display = "none";
                }
                if (guest.assistance === 'Pendiente') {
                    personsGuestsSlopes.appendChild(rowGuest);
                    textNoGuestsSlopes.style.display = "none";
                }
                if (guest.assistance === 'Cancelado') {
                    personsGuestsCanceled.appendChild(rowGuest);
                    textNoGuestsCanceled.style.display = "none";
                }
                break;
        
            case "Menú":
                // ubicación adulto, niño y vegetariano    
                if (guest.menu === 'Adulto') {
                    personsGuestsAdults.appendChild(rowGuest);
                    textNoGuestsAdults.style.display = "none";
                }
                if (guest.menu === 'Niño') {
                    personsGuestsKids.appendChild(rowGuest);
                    textNoGuestsKids.style.display = "none";
                }
                if (guest.menu === 'Vegetariano') {
                    personsGuestsVegetarian.appendChild(rowGuest);
                    textNoGuestsVegetarian.style.display = "none";
                }
                break;
        
            case "Grupo":
                // ubicación novios, familia, amigos, compañeros de trabajo    
                if (guest.group === 'Novios') {
                    personsGuestsBoyfriends.appendChild(rowGuest);
                    textNoGuestsBoyfriends.style.display = "none";
                }
                if (guest.group === 'Familia de los novios') {
                    personsGuestsFamily.appendChild(rowGuest);
                    textNoGuestsFamily.style.display = "none";
                }
                if (guest.group === 'Amigos') {
                    personsGuestsFriends.appendChild(rowGuest);
                    textNoGuestsFriends.style.display = "none";
                }
                if (guest.group === 'Compañeros de trabajo') {
                    personsGuestsCoworkers.appendChild(rowGuest);
                    textNoGuestsCoworkers.style.display = "none";
                }
                break;
            }
    
    };   
    // Mostramos la cantidad de invitados y confirmados
    let total = guests.filter( totals => totals.assistance === 'Confirmado');
    totalConfirmed.textContent = total.length;
    totalGuest.textContent = guests.length;
}



// creamos funcion para borrar elementos del html y del local storage
function deleteGuests(id) { 
    guests = guests.filter((element) => {
        if (element.id != id) {
            return element;
        }
    });
    localStorage.setItem("invitado", JSON.stringify(guests));
    list();
}

function choise(id) { 

    let guestSelect = guests.filter(guest => guest.id == id);
    
    if (this.event.target.value === 'Confirmado') {
        this.event.target.parentElement.parentElement.remove();
        textNoGuestsConfirmed.style.display = "none";
        guestSelect[0].assistance = "Confirmado";
    }
    else if (this.event.target.value === 'Pendiente') {
        personsGuestsSlopes.appendChild(this.event.target.parentElement.parentElement);
        this.event.target.parentElement.parentElement.remove();
        textNoGuestsSlopes.style.display = "none";
        guestSelect[0].assistance = "Pendiente";

    }
    else if (this.event.target.value === 'Cancelado') {
        personsGuestsCanceled.appendChild(this.event.target.parentElement.parentElement);
        this.event.target.parentElement.parentElement.remove();
        textNoGuestsCanceled.style.display = "none";
        guestSelect[0].assistance = "Cancelado";
    }

    localStorage.setItem("invitado", JSON.stringify(guests));
    list();
}



////////////// OCULTAR O MOSTRAS LAS SECCIONES ASISTENCIA, MENU, GRUPO ////////////////


// se toma el valor del selector ordenar por: asistencia, menu o grupo. Y de ahí se despliegan las secciones correspondientes a cada caso.

guestsAddMenu.addEventListener("change", (e) => {


    switch (guestsAddMenu.value) {

        case "Asistencia":
            containerAssistance.className = 'visible';
            containerMenu.className = 'hidden';
            containerGroup.className = 'hidden';
            break;
        
        case "Menú":
            containerMenu.className = 'visible';
            containerAssistance.className = 'hidden';
            containerGroup.className = 'hidden';
            break;
        
        case "Grupo":
            containerGroup.className = 'visible';
            containerAssistance.className = 'hidden';
            containerMenu.className = 'hidden';
            break;
    }
    list();
});

