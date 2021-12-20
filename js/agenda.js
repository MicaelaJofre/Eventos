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
            <div class="persons">
                <input class="persons" form="guestsList__form" type="checkbox">
                <label class="persons">${persons[i].name}</label>
                            
                <span class="material-icons persons__ok">done_outline</span>
                <select class="persons" name="select">
                    <option value="value1" selected>Confirmado</option>
                    <option value="value2">Pendiente</option>
                    <option value="value3">Cancelado</option>
                </select>
                <span class="material-icons persons">edit</span>
                <span class="material-icons persons">delete</span>
            </div>`
            
            personsGuests.appendChild(rowGuest);    


        };    


}

// document.addEventListener('load', () => {
//     cards();
// });

// /* 
// window.onload= function () {
//     persons.forEach(e => {
//         per
//         personsGuests.innerHTML = `
        // <div class="persons__checkbox col-12 col-md-4">
        //     <input form="guestsList__form" type="checkbox">
        //     <label class="persons__name">${e.persons.name}</label>
        // </div>
        // <div class="persons__select col-12 col-md-4">
        //     <img src="https://img.icons8.com/material-outlined/48/000000/checked--v3.png"/>
                            
        //     <select class="cpersons__menu" name="select">
        //         <option value="value1" selected>Confirmado</option>
        //         <option value="value2">Pendiente</option>
        //         <option value="value3">Cancelado</option>
        //     </select>
        // </div>
        // <div class="persons__delet col-12 col-md-4">
        //     <div class="row d-flex justify-content-around">
        //         <p class="col-12 col-md-6"><img src="https://img.icons8.com/wired/64/000000/edit.png"/>Editar</p>

        //         <p class="col-12 col-md-6"><img src="https://img.icons8.com/glyph-neue/30/000000/trash.png"/>Eliminar</p>
        //     </div>
        // </div>
        
//         `
//         document.personsGuests.appendchild(personsGuests);
//     }) 
// }; 