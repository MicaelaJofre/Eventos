/* 
Crear tres(3) variables para asignar el nombre, apellido y edad de Homero, respectivamente.
Es indistinto el empleo de var o  let en la declaración.
*/
let nameHomer = "Homero";
let lastNameHomer = "Simpson";
let age = 38;
console.log("Nombre: " + nameHomer + "\nApellido: " + lastNameHomer + "\nEdad: " + age);

/* 
Crear cinco(5) variables constantes, asignando a cada una de ellas diferentes nombres de ciudades.
Generalmente, dichas variables se declaran con const.
*/
const citie1 = "Mendoza";
const citie2 = "Maipú";
const citie3 = "Godoy Cruz";
const citie4 = "Lujan de Cuyo";
const citie5 = "Las Heras";
console.log("Ciudad n°1: " + citie1 + "\nCiudad n°2: " + citie2 + "\nCiudad n°3: " + citie3 + "\nCiudad n°4: " + citie4 + "\nCiudad n°5: " + citie5);

/* 
Declarar variables para representar la información de un carnet de conducir.
Luego, concatenarlas y asignar el resultado de la operación a una variable denominada carnet.
 */

const name = "Micaela";
const lastName = "Jofré";
const address = "20 de Junio";
const citie = "Maipú-Mendoza";
const dateOfBirth = "12-02-1986";

alert("Datos del carnet:\nNombre: " + name + "\nApellido: " + lastName + "\nDirección: " + address + "\nCiudad: " + citie + "\nFecha de Nacimiento: " + dateOfBirth);
/* 
Solicitar al usuario cinco(5) nombres pertenecientes a integrantes de una familia.
Luego, concatenar dichas entradas y efectuar una salida por alerta. 
*/

alert("Dime cinco nombres de los integrantes de tu familia.");
let name1 = prompt("Dime el primer nombre: ");
let name2 = prompt("Dime el segundo nombre: ");
let name3 = prompt("Dime el tercero nombre: ");
let name4 = prompt("Dime el cuarto nombre: ");
let name5 = prompt("Dime el quinto nombre: ");

let total = name1 + "-" + name2 + "-" + name3 + "-" + name4 + "-" + name5;
alert("Los nombre brindados son: " + total);

/* Solicitar al usuario uno o más precios.
Luego, efectuar un descuento en porcentajes (20%, 30%, etcétera) sobre los valores ingresados, y realizar una salida.
 */

let price1 = parseFloat(prompt("Dime un precio: "));
let price2 = parseFloat(prompt("Dime un segundo precio: "));

let prom1 = price1 - (price1 * 0.2);
let prom2 = price2 - (price2 * 0.3);

alert("En el primer precio se te realizó un descuento del 20%, te queda en mano: " + prom1 + "\nEn el segundo precio se realizó un descuento del 30%, te queda en mano: " + prom2);