// Es un bloque de codigo que se puede reutilizar.
// Las funciones permiten modularizar el código, pueden tomar 0 más valores de entrada

// function
// function sumar(){
//     let resultadoSuma = 3 + 50;
//     alert("El resultado de la suma es: " + resultadoSuma);
// };

// sumar();

// como solicitar  datos al usuario y almacenarlos en una variable

// let variableUsuario = prompt("Ingrese su nombre: ");
// console.log(variableUsuario);


// Crear una calculadora sumar, restar, multiplicar y dividir. Deben estar guardadas dentro de una función

// funciones
function sumar(){
    let resultadoSuma = num1 + num2;
    alert("El resultado de la suma es: " + resultadoSuma);
};
function restar(){
    let resultadoResta = num1 - num2;
    alert("El resultado de la resta es: " + resultadoResta);
}
function multiplicar(){
    let resultadoMultiplicacion = num1 * num2;
    alert("El resultado de la multiplicación es: " + resultadoMultiplicacion);
}
function dividir(){
    let resultadoDivision = num1 / num2;
    alert("El resultado de la división es: " + resultadoDivision);
}

// opciones
let opcion = parseInt(prompt(".-.-.-.-.-.-.- MENÚ -.-.-.-.-.-.-.\n1- Sumar \n2- Restar \n3- Multiplicar \n4- Dividir  \n.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.\nIngrese la opción: "))

// numero 1
let num1 = parseInt(prompt("Ingrese el numero 1: "));
console.log(num1);
// numero 2
let num2 = parseInt(prompt("Ingrese el número 2: "));
console.log(num1);

// menu
switch (opcion) {
    case 1:
        sumar();
        break;
    case 2:
        restar();
        break;
    case 3:
        multiplicar();
        break;
    case 4:
        dividir();
        break;
    default:
        alert("ERROOOOOOOOOOOOOOOOOOOOOOOOOR");
        break;
}