// Cargamos los valores de los presupuestos si están en el localStorage, de lo contrario creamos un array vacío
let budget = localStorage.getItem("presupuesto") == null ? [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] : JSON.parse(localStorage.getItem("presupuesto"));



// cargamos los valores de los checkbox al local storage
let totalChecked = localStorage.getItem("serviciosPagados") == null ? [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] : JSON.parse(localStorage.getItem("serviciosPagados"));

// gráfica de presupuesto

// Obtener una referencia al elemento canvas del DOM
const $grafica = document.querySelector("#grafica");
// Las etiquetas son las porciones de la gráfica
const etiquetas = ["Cena", "Ceremonia", "Pastel de boda", "Decoración", "Souvenirs", "Auto", "Belleza", "Accesorios", "Música", "Foto y Video", "Invitaciones", "Luna de miel", "Complementos", "Fiesta", "Otros"]
// Podemos tener varios conjuntos de datos. Comencemos con uno
const datosIngresos = {
    data: budget, // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    // Ahora debería haber tantos background colors como datos, es decir, para este ejemplo, 4
    backgroundColor: [
        'rgba(241, 192, 232,0.9)',
        'rgba(251, 248, 204,0.9)',
        'rgba(163, 196, 243,0.9)',
        'rgba(152, 245, 225,0.9)',
        'rgba(207, 186, 240,0.9)',
        'rgba(251, 248, 204,0.9)',
        'rgba(144, 219, 244,0.9)',
        'rgba(207, 186, 225,0.9)',
        'rgba(153, 193, 222,0.9)',
        'rgba(151, 249, 249,0.9)',
        'rgba(255, 207, 210,0.9)',
        'rgba(142, 236, 245,0.9)',
        'rgba(253, 228, 207,0.9)',
        'rgba(207, 186, 225,0.9)',
        'rgba(197, 159, 201,0.9)',

    ], // Color de fondo
    borderColor: [
        'rgba(236, 135, 218, 1)',
        'rgba(241, 234, 128, 1)',
        'rgba(88, 146, 226,1)',
        'rgba(78, 226, 194, 1)',
        'rgba(174, 133, 241, 1)',
        'rgba(247, 240, 150, 1)',
        'rgba(58, 174, 212, 1)',
        'rgba(168, 120, 211, 1)',
        'rgba(104, 174, 224, 1)',
        'rgba(85, 218, 218, 1)',
        'rgba(240, 157, 163, 1)',
        'rgba(84, 202, 212, 1)',
        'rgba(223, 169, 124,1)',
        'rgba(137, 101, 168, 1)',
        'rgba(168, 112, 174, 1)',
    ], // Color del borde
    borderWidth: 1, // Ancho del borde
};



// elementos del DOM
//checkbox pagado
let inputCheck = document.getElementsByClassName("switch-input");
let cardText = document.getElementsByClassName("card-text");

// accedemos al contador
let totalBudget = document.getElementById("totalBudget");
let totalHired = document.getElementById("totalHired");
let totalDisposable = document.getElementById("totalDisposable");


//llamamos al formulario de las cards
let budgetForm = document.getElementById("budgetForm");

// funcion list() al iniciar la página
window.addEventListener('load', list);


//función para cargar todo
function list() {

    //grafico
    new Chart($grafica, {
        type: 'pie', 
        data: {
            labels: etiquetas,
            datasets: [
                datosIngresos,

            ]
        },
    });
    
    showCardMoney(); //función para mostrar los montos en cada tarjeta
    counter(); // contador total presupuesto
    getChecked(); // actualiza los check 
}

// accedemos a los eventos click por separado para insertar lo ingresado por el input
let botones = document.getElementsByClassName("budgetBtn");
for (let boton of botones) {
    boton.addEventListener("click", (e) => {
        getCards(e);
    });
};


// cargamos los datos del input en el localStore

budgetForm.addEventListener("submit", getCards);

function getCards(e) {
    e.preventDefault();


    let cardName = e.target.parentElement.parentElement.parentElement.children[0].innerText;

    for (let i in etiquetas) {
        if (etiquetas[i] == cardName) {
            let value = e.target.parentElement.parentElement.children[0].value;
            if (value != "") budget[i] = value;

        }
    }

    localStorage.setItem("presupuesto", JSON.stringify(budget));
    list();

    //borrar el input
    e.target.parentElement.parentElement.parentElement.getElementsByTagName("input")[0].value = "";
};

//función para mostrar los montos en cada tarjeta
function showCardMoney() {
    for (let i in etiquetas) {
        cardText[i].textContent = `$${budget[i]}`;
    }
}

let checkTotal = 0;

// accedemos a los eventos check por separado para colocar pagado
function getChecked() {

    for (let i in inputCheck) {
        
        if (i == "length") break; // ignoramos el último elemento
        document.getElementsByClassName("switchText")[i].innerHTML = "Pagar"; // cambiamos el texto del checkbox

        //el checkbox esta seleccionado cambiamos el presupuesto
        if (totalChecked[i] == 1) {
            inputCheck[i].checked = true;
            checkTotal += parseFloat(budget[i]);
            document.getElementsByClassName("switchText")[i].innerHTML = "PAGADO"; // cambiamos el texto del checkbox
        }
        totalHired.textContent = checkTotal;

        // cambia el valor entre 0 y 1 en el local storage
        inputCheck[i].addEventListener("click", (e) => {
            
            if (inputCheck[i].checked === true) totalChecked[i] = 1;
            else totalChecked[i] = 0;
            
            localStorage.setItem("serviciosPagados", JSON.stringify(totalChecked));
            list();

        });
    };
    checkTotal = 0;

}


// contador
function counter() {

    // Mostramos el total del presupuesto
    let total = 0;
    budget.forEach((element) => {
        if (element != 0) {
            total += parseFloat(element);
        }

    });
    totalBudget.textContent = total;
}