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
/* 
    //llamamos a la función para sacar la fecha más próxima a vencer
    if (listTask.length != 0) {
        dateNext()
        
    } else {
        $('.taskSlopes__text').empty();
    }  */

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

    

}

// función para eliminar
function deleteTask(id) {
    listTask = listTask.filter((x) => {
        if (x.taskId != id) {
            return x;
        }
    });
    localStorage.setItem("listaTareas", JSON.stringify(listTask));
    list(listTask);
}

// función para obtener las tareas proximas a vencer
function dateNext() {
    listTask.sort(function (a, b) {
        a = new Date(a.taskDate);
        b = new Date(b.taskDate);
        return a > b ? -1 : a < b ? 1 : 0;
    });

    let last = listTask[listTask.length - 1].taskName;

    //mostramos el resultado en el aside
    for (let list of listTask) {
        if (list.taskCondition === "Pendiente") {
        $('.taskSlopes__text').empty();
            $('.taskSlopes__text').append(`${last}`);
            localStorage.setItem("listaTareas", JSON.stringify(listTask));
        }
    }
    
    
    
}


// función para cambiar la selección del selest en Pendiente o Completado
$(document).ready(() => {
    $('.taskCondition').on("change", (e) => {

        let id = this.event.target.parentElement.parentElement.id;
        console.log(id)
        listTask = listTask.map(x => {
            if (x.taskId == id) {
                x.taskCondition = e.target.value;
            }
            return x;
        });
        localStorage.setItem('listaTareas', JSON.stringify(listTask));
    });

    
});
/* //llamamos a la función para sacar la fecha más próxima a vencer
if (listTask.length != 0) {

    listTask = listTask.map((x) => {
        if (x.taskCondition === "Pendiente") {
            return x;
        }
    }); 
    dateNext()
    
} else {
    $('.taskSlopes__text').empty();
} */