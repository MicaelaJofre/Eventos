class Persons { 
    constructor(name) { 
        this.name = name;
    }
    
    
}
let persons = [];
let modalGuests = document.getElementById("modalGuests");
modalGuests.addEventListener("submit",openModal);



function openModal(e) {
    e.preventDefault();
    let guestsName = document.getElementById("guestsName").value;
    if ((guestsName != "") && (typeof value != Number)) {
        persons.push(guestsName);
        console.log(persons);
    } else { 
        console.log("error");
    }   
}
    