class Persons { 
    constructor(name) { 
        this.name = name;
    }
    
    
}
let persons = [];
let personsGuests = document.getElementById("personsGuests");
let modalGuests = document.querySelector(".modalGuests");
modalGuests.addEventListener("submit", openModal);


function openModal(e) {
    e.preventDefault();
    let guestsName = document.getElementById("guestsName").value;

    if ((guestsName != "") && (typeof value != Number)) {
        persons.push(guestsName);
        console.log(persons);
        modalGuests.addEventListener("click", list);
    }   
}

function list() {
    
    personsGuests.innerHTML = ``;
    
    for (let i of persons) {

        let rowGuest = document.createElement("div");
            rowGuest.className = "persons";
            rowGuest.innerHTML = ` 
                <input class="persons" form="guestsList__form" type="checkbox">
                <label class="persons">${persons[i].name}</label>
                            
                <span class="material-icons persons__ok">done_outline</span>
                <select class="persons" name="select">
                    <option value="value1" selected>Confirmado</option>
                    <option value="value2">Pendiente</option>
                    <option value="value3">Cancelado</option>
                </select>
                <span class="material-icons persons">edit</span>
                <span class="material-icons persons">delete</span>`;
            
            personsGuests.appendChild(rowGuest);    


        };    


}