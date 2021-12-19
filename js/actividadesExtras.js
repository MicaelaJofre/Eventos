/* 
Crear tres(3) variables para asignar el nombre, apellido y edad de Homero, respectivamente.
Es indistinto el empleo de var o  let en la declaración.
*/
// let nameHomer = "Homero";
// let lastNameHomer = "Simpson";
// let age = 38;
// console.log("Nombre: " + nameHomer + "\nApellido: " + lastNameHomer + "\nEdad: " + age);

/* 
Crear cinco(5) variables constantes, asignando a cada una de ellas diferentes nombres de ciudades.
Generalmente, dichas variables se declaran con const.
*/
// const citie1 = "Mendoza";
// const citie2 = "Maipú";
// const citie3 = "Godoy Cruz";
// const citie4 = "Lujan de Cuyo";
// const citie5 = "Las Heras";
// console.log("Ciudad n°1: " + citie1 + "\nCiudad n°2: " + citie2 + "\nCiudad n°3: " + citie3 + "\nCiudad n°4: " + citie4 + "\nCiudad n°5: " + citie5);

/* 
Declarar variables para representar la información de un carnet de conducir.
Luego, concatenarlas y asignar el resultado de la operación a una variable denominada carnet.
 */

// const name = "Micaela";
// const lastName = "Jofré";
// const address = "20 de Junio";
// const citie = "Maipú-Mendoza";
// const dateOfBirth = "12-02-1986";

// alert("Datos del carnet:\nNombre: " + name + "\nApellido: " + lastName + "\nDirección: " + address + "\nCiudad: " + citie + "\nFecha de Nacimiento: " + dateOfBirth);
/* 
Solicitar al usuario cinco(5) nombres pertenecientes a integrantes de una familia.
Luego, concatenar dichas entradas y efectuar una salida por alerta. 
*/

// alert("Dime cinco nombres de los integrantes de tu familia.");
// let name1 = prompt("Dime el primer nombre: ");
// let name2 = prompt("Dime el segundo nombre: ");
// let name3 = prompt("Dime el tercero nombre: ");
// let name4 = prompt("Dime el cuarto nombre: ");
// let name5 = prompt("Dime el quinto nombre: ");

// let total = name1 + "-" + name2 + "-" + name3 + "-" + name4 + "-" + name5;
// alert("Los nombre brindados son: " + total);

/* Solicitar al usuario uno o más precios.
Luego, efectuar un descuento en porcentajes (20%, 30%, etcétera) sobre los valores ingresados, y realizar una salida.
 */

// let price1 = parseFloat(prompt("Dime un precio: "));
// let price2 = parseFloat(prompt("Dime un segundo precio: "));

// let prom1 = price1 - (price1 * 0.2);
// let prom2 = price2 - (price2 * 0.3);

// alert("En el primer precio se te realizó un descuento del 20%, te queda en mano: " + prom1 + "\nEn el segundo precio se realizó un descuento del 30%, te queda en mano: " + prom2);

/* Solicitar al usuario un (1) nombre.
Si el mismo es igual a otro nombre almacenado en una variable, realizar una salida por alerta con el mensaje “Fui yo”. 
Caso contrario, la salida será “Yo no fui”. */

// let name1 = "Micaela";

// let name2 = prompt("Dime tu nombre: ").toUpperCase();

// if ((name2 != " ") && (name2 === "MICAELA")) {
    
//     alert("Fui yo");

// } else {
    
//     alert("Yo no fui");
// }

// /* Solicitar al usuario una (1) tecla.
// Si se presiona “y” (minúscula), o “Y” (mayúscula), realizar una salida por alerta con el mensaje “Correcto”.
// Caso contrario, la salida será “Error”. */

// let key = prompt("Preciona una tecla.");


// if (key === "Y" || key === "y") {
    
    
//     alert("Correcto");


// } else {
    
    
//     alert("Error");
// }

// /* Solicitar al usuario un (1) un número.
// Si el valor está entre 1 y 4, efectuar una de las siguientes salidas según corresponda:
// “Elegiste a Homero” si es 1.
// “Elegiste a Marge” si es 2.
// “Elegiste a Bart” si es 3.
// “Elegiste a Lisa” si es 4. */

// let number = parseInt(prompt("Elige un número del 1 al 4 :"));

// if (number === 1) {
    
//     alert("Elegiste a Homero");

// } else if (number === 2) {
    
//     alert("Elegiste a Marge");

// } else if (number === 3) {
    
//     alert("Elegiste a Bart");

// } else if (number === 4) {

    
    
//     alert("Elegiste a Lisa");

// } else {

//     alert("La opción no es válida.");

// }

// /* Solicitar al usuario un (1) número.
// Si el valor está entre dos números, efectuar una de las siguientes salidas, según corresponda:
// “Presupuesto bajo” si está entre 0 y 1000.
// “Presupuesto medio” si está entre 1001 y 3000.
// “Presupuesto alto” si es  mayor que 3000. */

// let budget = parseFloat(prompt("Dime un número: "));

// if ((budget >= 0) && (budget <= 1000)) {

//     alert("Presupuesto bajo");

// } else if ((budget >= 1001) && (budget <= 3000)) {

//     alert("Presupuesto medio");

// } else if (budget > 3000) {
    
//     alert("Presupuesto alto");

// } else {

//     alert("Opción no válida.");
// }

// /* Solicitar al usuario cuatro(4) productos de almacén.
// Si todos los elementos fueron cargados, realizar una única salida compuesta por el listado de productos.
// Caso contrario, la salida será “Error: Es necesario cargar todos los productos”. */

// let product1 = prompt("DIme el primer producto").toUpperCase();
// let product2 = prompt("DIme el segundo producto").toUpperCase();
// let product3 = prompt("DIme el tercer producto").toUpperCase();
// let product4 = prompt("DIme el cuarto producto").toUpperCase();

// if ((product1 != "") && (product2 != "") && (product3 != "") && (product4 != "")) {
    
//     alert("Tu lista es: " + product1 + " " + product2 + " " + product3 + " " + product4);

// } else {
    
//     alert("Error: Es necesario cargar todos los productos");
// }

/* Solicitar al usuario un(1) un número y un(1) texto. 
Efectuar una salida por alerta con el mensaje ingresado por cada repetición,
hasta alcanzar el valor señalado por el usuario. */

// let num = parseInt(prompt("dime un número: "));

// let text = prompt("dime un palabra: ");

// for (let i = 1; i <= num; i++) {
    
//     alert(text);

// }

/* Solicitar al usuario un(1) un número.Emplear este valor para determinar la cantidad de repeticiones,
y efectuar una salida por alerta con el mensaje “lado” en cada repetición.
Pero si se alcanza un número de iteraciones mayor que cuatro(4), cancelar el ciclo. */

// let num1 = parseInt(prompt("dime un número"));

// for (let i = 0; i < num1; i++) {
    
//     if (num1 >= 4) {
    
//         break;
//     }

//     alert("lado");

// }

/* Solicitar al usuario la carga de diez (10) alumnos de forma consecutiva.
Luego realizar un única salida por alerta, con el listado de alumnos registrados. */

// let student = "";

// for (let i = 1; i <= 10; i++){

//     student += prompt("dime un nombre de un alumno: ");


// }
// alert(student);

/* Solicitar al usuario la carga de nombres de forma consecutiva,  hasta que se ingrese “Voldemort”.
Luego realizar un única salida por alerta, con todos los nombres ingresados. */

/* 

let total = "";

let name = prompt("Carga todos los nombres que quieras, cuando desees finalizar escribe VOLDEMORT.");

while (name != 'VOLDEMORT') {
    
    total += name + "\n";
    
    name = prompt("DIME OTRO NOMBRE");
    

} 

alert(total);
 */

/* Solicitar al usuario un (1) número de forma consecutiva, hasta que se ingrese “ESC”. Generar una única salida compuesta por los siguientes productos, según el valor ingresado en cada ciclo:
“Tomate” si es 1.
“Papa” si es 2.
“Carne” si es 3.
“Pollo” si es 4. */

// let prod = "";

// let number = parseInt(prompt("Ingrese un número del 1 al 4, cuando desee salir ingrese ESC"));

// while (number != "ESC") {
    
//     switch (number) {
        
//         case 1 :

//             alert("tomate");
//             break;
        
//         case 2 :

//             alert("papa");
//             break;
        
//         case 3 :

//             alert("carne");
//             break;
        
//         case 4 :

//             alert("pollo");
//             break;
        
//         default:
            
//             alert("numero ingresado erroneo");
//             break
        
//     }
//     number = prompt("Ingrese un número del 1 al 4, cuando desee salir ingrese ESC");
// }
/* 
Codificar tres funciones:
Una función entrada(), la cual solicite un valor al usuario y lo retorne.
Una función procesamiento(valor), donde se transforme la entrada.
Una función salida(valor), la cual mostrará el resultado por alerta.
Luego, invocar las tres funciones. */




// const entrada = (a) => alert(`El número que ingresaste es ${a}`);

// const procesamiento = (valor) => {
    
//     num = valor * 2;
//     return num;
// };

// const salida = (valor) => alert(`El resultado de la multipicación es: ${num}`);

// let num = prompt("dime un número");

// entrada(num);
// procesamiento(num);
// salida(num);

/* Codificar una función que reciba un número decimal por parámetro,
y lo retorne redondeado al entero más cercano.Para ello, puede emplearse  Math.round.
Luego invocar la función de forma iterativa cinco (5) veces, solicitando en cada ciclo un número al usuario. */



// for (let index = 0; index < 5; index++) {
    
//     let num = parseFloat(prompt("dime un número decimal"));
//     alert(`Se redondeó al número más cercano que es: ${Math.round(num)}`);
    
// }

/* Codificar una función con la siguiente cabecera: impuesto(precio, porcentaje). 
En ella, se retorna un valor numérico compuesto por el precio recibido, más la suma del porcentaje ingresado.
Luego invocar la función de forma iterativa cinco (5) veces, solicitando en cada ciclo un precio y porcentaje al usuario. */

// let precio, porcentaje,res;

// const cabecera = (precio, porcentaje) => {

//     res = precio + ((precio * porcentaje) / 100);
//     return res;
// };

// for (let index = 0; index < 5; index++) {
    
//     precio = parseFloat(prompt("dime el precio"));
//     porcentaje = parseFloat(prompt("dime el porcentaje"));

//     alert(cabecera(precio, porcentaje));
    
// }
/* 
Codificar dos funciones:
Una función cotizarDolar(pesos), la cual recibe un valor monetario en pesos argentinos, y lo retorna en su equivalente en dólares.
Una función cotizarPesos(dolar), que recibe un valor monetario en dólares, y lo retorna en su equivalente en pesos argentinos.
Luego invocar las funciones solicitando  al usuario el valor y el tipo de cotización a realizar. */

// let pesos, dolares;

// const cotizarDolar = (pesos) => {
//     dolares = pesos / 100;
//     return dolares;
// }

// const cotizarPesos = (dolares) => {
//     pesos = dolares * 100;
//     return pesos;
// }


// let persona = prompt("que cotización deseas realizar? cambio a dolares o cambio a pesos");

// if (persona == "cambio a dolares") {

//     persona = parseFloat(prompt("dime cuantos pesos deseas cambiar:"));
//     alert(`el total de tu cambio a dolares es : $${cotizarDolar(persona)} dolares`);

// } else if (persona == "cambio a pesos") {

//     persona = parseFloat(prompt("dime cuantos dolares deseas cambiar:"));
//     alert(`el total de tu cambio a dolares es : $${cotizarPesos(persona)} pesos`);

// } else {
//     alert("La opción elegida es incorrecta");
// }

/* Codificar una función con la siguiente cabecera: validacion(cadena). En ella, se retorna un valor booleano, el cual es true si el parámetro no es un cadena vacía. Caso contrario, se retorna false. Luego invocar la función de forma iterativa, hasta que el usuario tipee “ESC”, solicitando en cada ciclo una cadena a validar. */

// let cadena;

// const validacion = (cadena) => {
//     if (cadena != "" && cadena != "ESC") {
//         alert("perfecto! continuemos...")
//         return true;
//     } else if (cadena == "ESC") {
//         return "ESC";
//     }else {
//         alert("no ingresaste nada");
//         return false;
//     }
// }


// while (cadena != "ESC") {

//     cadena = prompt("escribe algo, en el caso de querer salir tipea ESC");
//     validacion(cadena);

// }

/* Declarar un clase Tienda que permita registrar:
Nombre de la tienda.
Dirección de la tienda.
Propietario de la tienda.
Rubro de la tienda.
Luego invocar al menos tres (3) objetos usando esta clase. */

// class Tienda {

//     constructor(nombre, direccion, propietario, rubro) {
//         this.nombre = nombre;
//         this.direccion = direccion;
//         this.propietario = propietario;
//         this.rubro = rubro;
//     }
// }

// let tienda1 = new Tienda("cuquis", "calle nueva 03", "Hernán Cortez", "venta de comestibles");
// let tienda2 = new Tienda("todo suelto", "siempre viva", "Ramirez", "venta productos de limpieza");
// let tienda3 = new Tienda("Crecer", "ozamis 120", "Eduardo Cucharelli", "Libreria");

// console.log(tienda1, tienda2, tienda3);

/* Solicitar al usuario el registro de cinco (5) tiendas.
Emplear la clase Tienda de la actividad 1, para instanciar los objetos en función de las entradas capturadas. 
Generar una única salida compuesta por la información de los objetos instanciados. */

// class Tiendas {

//     constructor(nombre, direccion, propietario, rubro) {
//         this.nombre = nombre;
//         this.direccion = direccion;
//         this.propietario = propietario;
//         this.rubro = rubro;
//     }
// }
// let tienda = [];

// for (let i = 0; i < 5; i++) {
    
//     tienda[i] = new Tiendas(prompt("nombre"), prompt("direccion"), prompt("propietario"), prompt("rubro"));
    
    
// }
// console.log(tienda);

/* Declarar un método para la clase Tienda con la siguiente cabecera estaAbierto(hora). Este retorna true si la hora enviada está entre las 08 y 12, o entre las 15 y 19. Caso contrario, se retorna false.
Luego invocar al menos un (1) objeto usando esta clase, y solicitar al usuario tres (3) horas. Informar por alerta si la tienda está abierta, en función de la hora ingresada. */



// class Tienda {

//     constructor(nombre, direccion, propietario, rubro) {
//         this.nombre = nombre;
//         this.direccion = direccion;
//         this.propietario = propietario;
//         this.rubro = rubro;
//     }
//     abierto(hora) {
//         if (hora === "8" || hora === "9" || hora === "10" || hora === "11" || hora === "12" || hora === "15" || hora === "16" || hora === "17" || hora === "18" || hora === "19") {

//             return true;
//         } else {

//             return false;
//         }
//     }
// }

// let tienda1 = new Tienda("cuquis", "calle nueva 03", "Hernán Cortez", "venta de comestibles");

// let usuario = prompt("dime un horario");



// if (tienda1.abierto(usuario) === true) {
//     alert(`La tienda ${tienda1.nombre} está abierta`);
// } else {
//     alert(`La tienda ${tienda1.nombre} está cerrada`);
// }


/* Declarar un método para la clase Tienda con la siguiente cabecera esPropietario(nombre). Se retorna true si el nombre enviado corresponde al propietario de la tienda.Caso contrario, se retorna false.
Luego, invocar al menos tres(3) objetos usando esta clase y solicitar al usuario cinco(5) nombres. Informar por alerta si los nombres pertenecen a algún dueño de tienda. */



class Tienda {

    constructor(nombre, direccion, propietario, rubro) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
    esPropietario(nombre) { 
        let maping = this.nombre(x=> x.nombre) // array de strings 
        return new Set(maping).has(x) //hay dentro de esta lista el valor x?
    }
    read(consulta = null){
            if(consulta == null){
                this.nombre.forEach(
                    elemento => console.log(elemento)
                )
            }
    
            else{
                if(!this.nombre.esPropietario(nombre))//aca voy a mandar solo nombres
                {
                    return console.log("no existe ese valor")
                }
    
                return console.log(this.nombre.find(elemento => elemento.nombre == nombre))
            }
    
        }
}



const tiendas = [
    {
        nombre: "cuquis",
        direccion: "calle nueva 03",
        propietario: "Hernán Cortez",
        rubro: "venta de comestibles"
    },
    {
        nombre: "todo suelto",
        direccion: "siempre viva",
        propietario: "Ramirez",
        rubro: "venta productos de limpieza"
    },
    {
        nombre: "Crecer",
        direccion: "ozamis 120",
        propietario: "Eduardo Cucharelli",
        rubro: "Libreria"
    }
]

let nombre = (tiendas.esPropietario(prompt("dime el nombre del negocio")));