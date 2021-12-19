class Persons { 
    constructor(name, lastName, address, location, postcard) { 
        this.name = name;
        this.lastName = lastName;
        this.address = address;
        this.location = location;
        this.postcard = postcard;
    }
    
    
}
let persons = [];
let modalGuests = document.getElementById("modalGuests");
let guestsAddBtn = document.getElementById("guestsAdd__btn");



function openModal() {
        let guestsName = document.getElementById("guestsName");
        guestsName.addEventListener("input",validate).value;
        persons.validate(guestsName);
}
function validate(guestsName) {
        if ((guestsName != "") && (typeof value != Number)) { 
            persons.push(guestsName);
            console.log(persons);
        }
    }    

window.addEventListener("load", openModal)