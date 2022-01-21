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