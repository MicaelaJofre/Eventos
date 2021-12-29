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

//llamamos a los elementos del html
let guests = [];
const totalConfirmed = document.getElementById("totalConfirmed");
const totalGuest = document.getElementById("totalGuest");

const personsGuestsConfirmed = document.getElementById("personsGuestsConfirmed");
const personsGuestsSlopes = document.getElementById("personsGuestsSlopes");
const personsGuestsCanceled = document.getElementById("personsGuestsCanceled");
const modalGuests = document.getElementById("modalGuests");

const textNoGuestsConfirmed = document.querySelector(".textNoGuestsConfirmed");
const textNoGuestsSlopes = document.querySelector(".textNoGuestsSlopes");
const textNoGuestsCanceled = document.querySelector(".textNoGuestsCanceled");

const error = document.getElementById("error");
const errorName = document.getElementById("errorName");
const errorLastname = document.getElementById("errorLastname");
const errorTel = document.getElementById("errorTel");
const errorEmail = document.getElementById("errorEmail");
const errorPostcard = document.getElementById("errorPostcard");




// carga los datos guardados en el local storage
window.addEventListener("load", () => {
    guests = localStorage.getItem("invitado") == null ? [] : JSON.parse(localStorage.getItem("invitado"));
    list();
});



// llamamos al evento para comenzar con la carga de datos
modalGuests.addEventListener("submit", openModal);



// contador de invitados y confirmados
const totalGuestsConfirmed =()=>{
    let total = JSON.parse(localStorage.getItem("invitado"));
    total = guests.filter( totals => totals.assistance === 'Confirmado');
    localStorage.setItem('totalConfirmados',total.length);
    return total.length;
}

const totalsGuests =()=>{
    let total = JSON.parse(localStorage.getItem("invitado"));
    localStorage.setItem('total', total.length);
    return total.length;
    
}

const accountant = () => {
    totalConfirmed.textContent = 0;
    totalGuest.textContent = 0;
    
    totalGuestsConfirmed();
    totalsGuests();
    
    localStorage.getItem('totalConfirmados') ?
    totalConfirmed.textContent = localStorage.getItem('totalConfirmados')
    :
    totalConfirmed.textContent = 0;

    localStorage.getItem('total') ?
    totalGuest.textContent = localStorage.getItem('total')
    :
    totalGuest.textContent = 0;
}


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
    personsGuestsConfirmed.innerHTML = ``;
    personsGuestsSlopes.innerHTML = ``;
    personsGuestsCanceled.innerHTML = ``;
    for (let guest of guests) {

        let rowGuest = document.createElement("tr");
        rowGuest.className = "persons";
        rowGuest.innerHTML = ` 
            <td>
            <input form="guestsList__form" type="checkbox">
            </td>
            <td>
            <span>${guest.name} ${guest.lastname}</apan>
            </td>
            <td>
            <span class="material-icons persons__icon">done_outline</span>
            <select name="select">
                <option value="value1" selected>Confirmado</option>
                <option value="value2">Pendiente</option>
                <option value="value3">Cancelado</option>
            </select>
            </td>
            <td>
            <span class="material-icons">edit</span>
            </td>
            <td>
            <span class="material-icons" onClick="deleteGuests(${guest.id})">delete</span><br><br>
            </td>`;
        
            
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
    };   
    accountant();
}



// creamos funcion para borrar elementos del html y del local storage
function deleteGuests(id) { 
    this.event.target.parentElement.remove();
    let guestSelect = guests.filter((element) => {
        if (element.id != id) {
            return element;
        }
    });
    localStorage.setItem("invitado", JSON.stringify(guestSelect));
    location.reload();
    
}




