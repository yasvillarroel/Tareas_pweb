// Comentarios de una linea
/* 
Comentario de varias lineas
*/
// Sólo se usan en casos especificos
var variable = 10;
// Recomendada para definir variables
let variableDos = 12;
// número enteros
let numeroEntero = 19;
// cadena de texto
let cadenaTexto = "Hola soy una cadena de texto";
// booleanos
let bolTrue = true;
let bolFalse = false;
// No definida, esta variable no tiene valor
let noDefinida = undefined;
// Variable nula
let varNula = null;
// constante, no cambia su valor
const iva = 19;
// JavaScript es de tipado dinámico, es decir no es necesario declarar el tipo de dato

// imprimir datos en JS console.log()
console.log(cadenaTexto);
console.log(iva);
console.log(variable+variableDos);

// como saber el tipo de dato
console.log(typeof iva);
console.log(typeof cadenaTexto);

// objetos {}
let estudiante = {
    nombre : "Yasna",
    edad : 50,
    instituto : "Duoc UC",
    carrera : "Ingeniería Informática"
}
// imprimir objetos
console.log(estudiante);
// imprimir dato especifico
console.log(estudiante.nombre);
console.log(estudiante["carrera"]);
// modificar o agregar un elemento
estudiante.nombre = "Renato"
console.log(estudiante.nombre);
// eliminar dato del objeto
delete estudiante.edad;
console.log(estudiante);

// array respeta el orden[]
let utiles = ["Lápiz", "Cuaderno", "Goma"];
console.log(utiles);
console.log(utiles[0]);
// agregar
utiles[3] = "Estuche";
console.log(utiles);