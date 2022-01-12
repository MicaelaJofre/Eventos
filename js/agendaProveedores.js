// Cargamos los valores de los proveedores si están en el localStorage, de lo contrario creamos un array vacío
let providers = localStorage.getItem("proveedores") == null ? [] : JSON.parse(localStorage.getItem("proveedores"));

let table = $('#table tbody')

const list = (listOfProviders) => {

    // Borramos los contenidos de la tabla (por si hay que agregar algo)
    table.empty();

    if (listOfProviders.length != 0) {

        // Cargamos los contenidos de la tabla leyendo el contenido de providers que le pasemos
        for (provider of listOfProviders) {

            table.append(` 
                <tr id=${provider.id}>
                    <td>
                        ${provider.category}
                    </td>
                    <td>
                        ${provider.name}
                    </td>
                    <td>
                        ${provider.email}
                    </td>
                    <td>
                        ${provider.tel}
                    </td>
                    <td>
                        ${provider.address}
                    </td>
                    <td>
                        ${provider.radioBudget}
                    </td>
                    <td>
                        ${provider.radioContract}
                    </td>
                    <td>
                        <span class="material-icons" onClick="deleteProvider(${provider.id})">delete</span><br><br>
                    </td>
                </tr>`
            );
        }
    }

    // Si la lista está vacía
    else {
        table.append("<p class ='texNoProviders'>No hay proveedores que mostrar</p>");
    }

    // Mostramos la cantidad de proveedores - contador
    $('#totalHired').empty();
    let total = providers.filter(totals => totals.radioContract === 'Sí');
    $('#totalHired').append(total.length);

    $('#totalBudget').empty();
    let budget = providers.filter(totals => totals.radioBudget === 'Sí');
    $('#totalBudget').append(budget.length);

    $('#totalSlopes').empty();
    let slopes = providers.filter(totals => totals.radioBudget === 'No');
    $('#totalSlopes').append(slopes.length);
    
}


// función para eliminar 
const deleteProvider = (id) => {

    providers = providers.filter((x) => {
        if (x.id != id) {
            return x;
        }
    });

    localStorage.setItem("proveedores", JSON.stringify(providers));
    list(providers);
}

$(document).ready(() => {

    list(providers);

    // Tomamos los datos del modal para ordenarlos en el array de objetos 
    $('#modalProviders').on('submit', (e) => {

        e.preventDefault();

        // Declaración de variables
        let name = $('#providersName').val();
        let email = $('#providersEmail').val();
        let tel = $('#providersTel').val();
        let address = $('#providersAddress').val();
        let category = $('#modalProvidersCategory').val();
        let radioBudget = $('input[name="providersRadio"]:checked').val();
        let radioContract = $('input[name="providersRadioContract"]:checked').val(); 

        // Eliminamos los errores
        $('#modalProviders p').remove();
    
        // Validación de datos ingresados
        let validate = true;

        // Nombre
        if ((name == "") || !(/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(name))) {
            validate = false;
            $("<p>El nombre solo puede contener letras</p>").insertAfter('#providersName');
            $('#providersName').css("border-color", "red");
        } else {
            $('#providersName').css("border-color", "");
        }

        // Teléfono
        if ((tel == "") || !(/^\d{1,14}$/.test(tel))) {
            validate = false;
            $("<p>El nombre solo puede contener números</p>").insertAfter('#providersTel');
            $('#providersTel').css("border-color", "red");

        } else {
            $('#providersTel').css("border-color", "");
        }

        // Si los datos son válidos cargamos el proveedor en en local storage y actualizamos la lista
        if (validate) {

            // Agregamos el nuevo proveedor al array providers
            providers.push(
                {
                    name: name,
                    email: email,
                    tel: tel,
                    address: address,
                    category: category,
                    radioBudget: radioBudget,
                    radioContract : radioContract,
                    id: Date.now()
                }
            );
            localStorage.setItem("proveedores", JSON.stringify(providers));
            list(providers);
            modalHidden();
            $('#modalProviders').trigger("reset");
        }
    });

});








