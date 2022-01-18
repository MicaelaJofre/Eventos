// Cargamos si están en el localStorage, de lo contrario creamos un array vacío
let listTask = localStorage.getItem("listaTareas") == null ? [] : JSON.parse(localStorage.getItem("listaTareas"));



$(document).ready(() => {

    list(listTask);
    
        // guardamos los elementos insertados en el form
    $('#taskAddInfo').on('submit', function (e) {
        e.preventDefault();
        

        let taskId = Math.random(1, 100);
        let taskName = $('.taskName').val();
        let taskDate = $('.taskDate').val();
        let taskObservations = $('.taskObservations').val();
        let taskCondition = $('.taskCondition').val();
        
        // eliminamos los errores
        $('#taskAddInfo p').remove();
        // validaciones
        
        let validate = true;

        //nombre
        if ((taskName === "") || !(/^[a-zA-ZÀ-ÿ\s]{1,20}$/.test(taskName))) {
            validate = false;

            $("<p>El nombre solo puede contener letras</p>").insertAfter('.taskDate');
            $('.taskName').css("border-color", "red");
        } else {
            $('.taskName').css("border-color", "");
        }

        //fecha
        if (taskDate === "") {
            validate = false;

            $("<p>Elije una fecha</p>").insertAfter('.taskDate');
            $('.taskDate').css("border-color", "red");
        } else {
            $('.taskDate').css("border-color", "");
        }

        //observaciones
        if ((taskObservations === "") || !(/^[a-zA-ZÀ-ÿ\s]{1,30}$/.test(taskObservations))) {
            validate = false;

            $("<p>Ingresa alguna observación</p>").insertAfter('.taskObservations');
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
            localStorage.setItem("listaTareas", JSON.stringify(listTask));
            list(listTask);
            $('#taskAddInfo').trigger("reset");
        }
    });

    
});




// insertamos al html los datos ingresados por el usuario

function list(listTask) {

    $('.tableTask tbody').empty();

    if (listTask.length != 0) {
        
        for (let task of listTask) {
            
            $('.tableTask tbody').append(`

                <tr>
                    <td>${task.taskName}</td>
                    <td>${task.taskDate}</td>
                    <td>${task.taskObservations}</td>
                    <td>
                        <select class="taskCondition" name="select" id="selectOption">
                        <option value="Pendiente" ${ task.taskCondition == "Pendiente" ? "selected" : ""}>Pendiente</option>
                        <option value="Completado" ${task.taskCondition == "Completado" ? "selected" : ""}>Completado</option>
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
    
    dateNext();

}

// función para eliminar
function deleteTask(id) {
    console.log(this.event.target.id)
    listTask = listTask.filter((x) => {
        if (x.taskId != id) {
            return x;
        }
    });
    console.log(listTask)
    localStorage.setItem("listaTareas", JSON.stringify(listTask));
    list(listTask);
}

// función para obtener las tareas proximas a vecer
function dateNext() {
    let newOrder = listTask.filter((x) => {
        return x.taskDate;
    })
    console.log(newOrder)
   /*  console.log(newOrder.sort((a, b) => new Date(a.fechas).getTime() > new Date(b.fechas).getTime())); */
}





/* 
$('#selectOption').on('change', function() {
  $("#selectOption option:selected" ) 
    
    console.log("hola")
    }) */