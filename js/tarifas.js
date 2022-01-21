let payBtn = document.getElementsByClassName('payBtn');

for( btn of payBtn) {
    btn.addEventListener("click", (e) => {
        pay();
    });
}

const listOptions = [
    {
        "nombre": "promocional",
        "descripcion": "servicio",
        "img": "../imagenes/fondoAnillos.jpg",
        "id": 1,
        "cantidad": 1,
        "precio": 3000
    },
    {
        "nombre": "premium",
        "descripcion": "servicio",
        "img": "../imagenes/ubicaiones.png",
        "id": 2,
        "cantidad": 1,
        "precio": 5000
    }
];

const pay = () => {
    let weddingWebsite = listOptions.filter(x => x.nombre == this.event.target.id);
    weddingWebsite = weddingWebsite.map((element) => {
            let newweddingWebsite = {
                title: element.nombre,
                description: element.descripcion,
                picture_url: element.img,
                category_id: element.id,
                quantity: element.cantidad,
                currency_id: "ARS",
                unit_price: element.precio,
            };
            return newweddingWebsite;
    });
    
    $.ajax({
        method: "POST",
        url: "https://api.mercadopago.com/checkout/preferences",
        data: JSON.stringify(weddingWebsite),
        headers: {
            Authorization: "Bearer TEST-3680632491483123-011919-fbddd0288ce644f52e2248756ebf243b-127703779",
        },
        data: JSON.stringify({
            items: weddingWebsite,
        }),
        success: function (response) {
            const data = response;
            
            window.open(data.init_point, "_blank");
            
        }
    })
}