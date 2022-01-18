////////////////modal proveedores///////////////////////////

//llamamos al evento click al boton de agregar proveedores
$('.providersAdd').on('click', (e) => {
    $('.modalProvidersSection')
    .css({
        "visibility": "visible",
        "opacity": "1"
    })
    
    $('modalProviders').toggleClass("modalOpen");
});

//boton de cerrar el modal
$('.imgClose').on("click", () => {
    $('.modalProvidersSection').css({
        "visibility": "hidden",
        "opacity": "0"
    });
    $('modalProviders').toggleClass("closeModal");
});

// boton para guardar y cerrar el modal
$('.providersBtnModal').on("click", () => {
    list(providers);
});

// funcion para cerrar una vez que verifique los datos del modal
function modalHidden() {
    $('.modalProvidersSection').css({
            "visibility": "hidden",
            "opacity": "0"
    })
        $('modalProviders').toggleClass("closeModal");
};



///////////////////modal invitados/////////////////////////////

//llamamos al evento click al boton de agregar proveedores
$('#guestsAdd__btn').on('click', () => {
    $('.modalGuestsSection').css({
        "visibility": "visible",
        "opacity": "1",
    });
    $('#modalGuests').toggleClass("modalOpen");
}); 

//boton de cerrar el modal
$('.imgClose').on("click", () => {
    $('.modalGuestsSection').css({
        "visibility": "hidden",
        "opacity": "0"
    });
    $('#modalGuests').toggleClass("closeModal");
}); 

// boton para guardar y cerrar el modal
$('.providersBtnModal').on("click", () => {
    openModal();
}); 

// funcion para cerrar una vez que verifique los datos del modal
function modalHiddenGuest() {
    $('.modalGuestsSection').css({
            "visibility": "hidden",
            "opacity": "0"
    });
    $('#modalGuests').toggleClass("closeModal");
};  



////////////animación en la seccion lista de tereas//////////////

//abrir formulario
$('.tasksAdd').click(function () {
    $('.taskAddInfo').toggle(1000);
});

//cerrar formulario
$('.btntask').click(function () {
    $('.taskAddInfo').toggle(1000);
});