////////////animación en la seccion lista de invitados - formulario acordeon//////////////



$(document).ready(function () {

    //abrir formulario
    $('.modalGuests__form').hide();

    $('.guestsAdd__btn').click(function () {

        $('.modalGuests__form').slideToggle(600);
    });

});


//cerrar formulario
$('#modalGuestsBtn').on("click", (e) => {
    openModal(e);
});

function closeFormPersons() {
    console.log("hola")
    $('.modalGuests__form').slideToggle(600);
}


////////////animación en la seccion lista de tereas - formulario acordeon//////////////



$(document).ready(function () {

    //abrir formulario
    $('.taskAddInfo').hide();

    $('.tasksAdd').click(function () {

        $('.taskAddInfo').slideToggle(600);
    });

});


//cerrar formulario
function closeFormGuest(validate) {

    if (validate) {
        $('.taskAddInfo').slideToggle(600);
    }
}




////////////animación en la seccion proveedores - formulario acordeon//////////////



$(document).ready(function () {

    //abrir formulario
    $('.modalProviders').hide();

    $('.providersAdd').click(function () {

        $('.modalProviders').slideToggle(600);
    });

});


//cerrar formulario
function closeForm(validate) {

    if (validate) {
        $('.modalProviders').slideToggle(600);
    }
}


//////////////////////// MODAL LOGIN ////////////////////////////////////

function modalOpenLogin() {


    $('.modalLogin')
        .css({
            "visibility": "visible",
            "opacity": "1"
        });

    $('.modalLoginForm ').toggleClass("modalOpen");

    //boton de cerrar el modal
    $('.imgClose').on("click", () => {
        $('.modalLogin').css({
            "visibility": "hidden",
            "opacity": "0"
        });
        $('modalLoginForm').toggleClass("closeModal");
    });

    // boton para guardar y cerrar el modal
    $('.weddingButton').on("click", () => {
        validate();
    });
}