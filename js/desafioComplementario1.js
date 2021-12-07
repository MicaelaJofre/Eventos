// Ejemplo de procesamiento: cálculo de IVA 
// 1) Ingresar precio de costo - 2) Sumar IVA - 3) Mostrar precio calculado.

let num1 = 0;

let total = 0;

const insert = () => {
    num1 = parseFloat(prompt("Dime el monto a pagar:"));
    return num1;
}

const add = (num1) => {
    total = num1 + (num1 * 0.21);
    return total;
}


const show = (total) => {
    alert("El monto a pagar con el IVA es: " + total);
}


insert();
add(num1);
show(total);



// Ejemplo de procesamiento: determinar si un número es múltiplo 
// 1) Ingresar números a verificar - 2) ¿Es múltiplo? - 3) Mostrar resultado.

let num2 = 0;

let num3 = 0;

let res = "";

const insert2 = () => {

    num2 = parseFloat(prompt("Dime un primer número:"));
    
    num3 = parseFloat(prompt("Dime un segundo número para verificar si son multiplos:"));

    return num2, num3;
}

const add2 = (num2, num3) => {
    
    if ((num2 % num3) != 0) {

        res = "Los números no son múltiplos";
        return res;

    } else {

        res = "Los números son múltiplos";
        return res;
    }
}


const show2 = (res) => {

    alert(res);
}


insert2();

add2(num2, num3);

show2(res);