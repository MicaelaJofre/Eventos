// Cargamos si están en el localStorage, de lo contrario creamos un array vacío
let listTask = localStorage.getItem("listaTareas") == null ? [] : JSON.parse(localStorage.getItem("listaTareas"));

let listSlopes = [];

$(document).ready(() => {
    

    list(listTask);

    // guardamos los elementos insertados en el form
    $('#taskAddInfo').on('submit', function (e) {
        e.preventDefault();


        let taskId = Date.now();
        let taskName = $('.taskName').val();
        let taskDate = $('.taskDate').val().split("/");
        let taskObservations = $('.taskObservations').val();
        let taskCondition = $('.taskCondition').val();

        // eliminamos los errores
        $('#taskAddInfo p').remove();
        // validaciones

        let validate = true;

        //nombre
        if ((taskName === "") || !(/^[a-zA-ZÀ-ÿ\s]{1,20}$/.test(taskName))) {
            validate = false;

            $("<p>El nombre no puede contener más de 20 letras y no puden contener números o simbolos.</p>").insertAfter('.taskDate');
            $('.taskName').css("border-color", "red");
        } else {
            $('.taskName').css("border-color", "");
        }


        //fecha

        let date = Date.now();
        if (taskDate > date) {
            validate = false;

            $("<p>Elije una fecha mayor a la fecha actual</p>").insertAfter('.taskDate');
            $('.taskDate').css("border-color", "red");
        } else {
            $('.taskDate').css("border-color", "");
        }

        //observaciones
        if ((taskObservations === "") || !(/^[a-zA-ZÀ-ÿ\s]{1,30}$/.test(taskObservations))) {
            validate = false;

            $("<p>Ingresa alguna observación de no más de 30 letras</p>").insertAfter('.taskObservations');
            $('.taskObservations').css("border-color", "red");
        } else {
            $('.taskObservations').css("border-color", "");
        }

        // cargamos los datos al localStorage
        if (validate) {
            listTask.push({
                taskName: taskName,
                taskDate: taskDate,
                taskObservations: taskObservations,
                taskCondition: "Pendiente",
                taskId: taskId
            });

            // guardamos los datos en el localStorage
            localStorage.setItem("listaTareas", JSON.stringify(listTask));
            list(listTask);
            $('#taskAddInfo').trigger("reset");
        }
        // funcion para cerrar el modal
        closeForm(validate);
    });


});




// insertamos al html los datos ingresados por el usuario

function list(listTask) {

    $('.tableTask tbody').empty();


    //llamamos a la función para sacar la fecha más próxima a vencer
    if (listTask.length != 0) {

        listSlopes = listTask.filter((x) => {
            if (x.taskCondition === "Pendiente") {
                return x;
            }
        });
        
        // controla si la lista tiene pendientes
        if (listSlopes.length != 0) dateNext(listSlopes);
        else $('.taskSlopes__text').empty();


    } else $('.taskSlopes__text').empty();
    


    // creamos la tabla que se insertará en el html
    if (listTask.length != 0) {

        for (let task of listTask) {

            $('.tableTask tbody').append(`

                <tr id="${task.taskId}">
                    <td>${task.taskName}</td>
                    <td>${task.taskDate}</td>
                    <td>${task.taskObservations}</td>
                    <td>
                        <select class="taskCondition" id= "selectTask" name="select">
                        <option value="Pendiente" ${ task.taskCondition == "Pendiente" ? "selected" : ""} >Pendiente</option>
                        <option value="Completado" ${ task.taskCondition == "Completado" ? "selected" : ""} >Completado</option>
                    </td>
                    <td class = "deleteTask">
                        <span class="material-icons" onClick="deleteTask(${task.taskId})">delete</span><br><br>
                    </td>
                </tr>


            `);
        }
    } else {
        $('.tableTask tbody').append("<p class ='texNoProviders'>No hay tareas</p>");
    }

    // Mostramos la cantidad de tareas pendientes y completadas - contador

    $('#totalSlopes').empty();
    let slopes = listTask.filter(totals => totals.taskCondition === 'Pendiente');
    $('#totalSlopes').append(slopes.length);

    $('#totalcomplete').empty();
    let total = listTask.filter(totals => totals.taskCondition === 'Completado');
    $('#totalcomplete').append(total.length);

    $('.taskCondition').on("change", (e) => {

        let id = this.event.target.parentElement.parentElement.id;

        listTask = listTask.map(x => {
            if (x.taskId == id) {
                x.taskCondition = e.target.value;
            }
            return x;
        });
        localStorage.setItem('listaTareas', JSON.stringify(listTask));
        list(listTask);
    });


}

// función para eliminar
function deleteTask(id) {

    Swal.fire({
        title: 'Estas seguro?',
        text: "No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminarlo!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Borrado!',
                'Su archivo ha sido eliminado',
                'success'
            )
            listTask = listTask.filter((x) => {
                if (x.taskId != id) {
                    return x;
                }
            });
            localStorage.setItem("listaTareas", JSON.stringify(listTask));
            list(listTask);
        }
    });
    
}

// función para obtener las tareas proximas a vencer
function dateNext(listSlopes) {
    listSlopes.sort(function (a, b) {
        a = new Date(a.taskDate);
        b = new Date(b.taskDate);
        return a > b ? -1 : a < b ? 1 : 0;
    });

    let last = listSlopes[listSlopes.length - 1].taskName;

    //mostramos el resultado en el aside
    $('.taskSlopes__text').empty();
    $('.taskSlopes__text').append(`${last}`);
}


// función para cambiar la selección del selest en Pendiente o Completado

/* //llamamos a la función para sacar la fecha más próxima a vencer
if (listTask.length != 0) {

    listSlopes = listTask.map((x) => {
        if (x.taskCondition === "Pendiente") {
            return x;
        }
    }); 
    dateNext(listSlopes)
    
} else {
    $('.taskSlopes__text').empty();
} */