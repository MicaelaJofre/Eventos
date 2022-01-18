let pay = document.getElementsByClassName("payBtn");

payBtn.addEventListener("click", (e) => {
    pay();
});

const listOptions = [
    {
        "nombre": "promocional",
        "descripcion": "servicio",
        "img": "../imagenes/fondoAnillos.jpg",
        "id": 1,
        "cantidad": "1",
        "precio": 3000
    },
    {
        "nombre": "premium",
        "descripcion": "servicio",
        "img": "../imagenes/ubicaiones.png",
        "id": 2,
        "cantidad": "1",
        "precio": 5000
    }
];

const pay = () => {
    const weddingWebsite = listOptions.map((element) => {
            let newweddingWebsite = {
                title: element.nombre,
                description: element.descripcion,
                picture_url: element.img,
                category_id: element.id,
                quantity: element.cantidad,
                currency_id: "ARS",
                unit_price: element.precio,
            };
            return weddingWebsite;
    });
    
    $.ajax({
        method: "POST",
        url: "https://api.mercadopago.com/checkout/preferences",
        data: JSON.stringify(productosToMp),
        headers: {
            Authorization: "Bearer TEST-680675151110839-052307-64069089337ab3707ea2f547622a1b6a-60191006",
        },
        data: JSON.stringify({
            items: productosToMp,
        }),
        success: function (response) {
            const data = response;
            
            window.open(data.init_point, "_blank");
            
        }
    })
}