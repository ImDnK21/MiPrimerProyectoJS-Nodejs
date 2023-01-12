//* Declaración: Es el proceso de crear una variable en JavaScript. Esto se hace usando la palabra clave var. 
// !Ejemplo:
var apellido
let nombre

// *const debe ser estrictamente inicilizada
// *al mismo tiempo en que es declarada
const name = 1

//  *Inicialización: Es el proceso de asignar un valor a una variable. Esto se hace usando el operador de asignación (=). 
//  !Ejemplo: 
nombre = "Juan";


var x = 1; // Declara e Inicializa x
console.log(x + " " + y);
var y = 2; // Declara e Inicializa y


var foo = 'hola'
console.log(foo);

// *Hoisting: Es el proceso de mover las declaraciones al inicio del scope actual.
// !Ejemplo:

let ej2 = 'Como estas?'

console.log(ej);
console.log(ej2);
//console.log(ej3); //! Error ==> Cannot acces 'ej3' before initialization

var ej = 'hola'
console.log(ej);

//const ej3 = 'Bien y tu?'


despedirse('amigo');

function despedirse(despedir) {
    console.log('Adios', despedir);
}


//? Resumamos: Hoisting es el proceso de mover las declaraciones al inicio del scope actual.
//? JavaScript Realiza un barrido antes de interpretar el codigo,  
//? Esto significa que las declaraciones de variables y funciones se mueven al inicio del scope actual, 
//? independientemente de dónde se encuentren en el código.
//? Esto sucede con var, let y const, pero actua de diferente para para VAR en comparacion con LET y CONST
//? VAR: cuando utilizamos esta variable antes de ser declarada, si se  intenta mostrar el contenido de esta, tendra un valor de undefined,
//? esto es debido a que, se aplica el termino hoisting, lo que hace es que, esta variable sea eleveda al inicio del scope actual y solamente se declara,
//? pero no se inicializa, por lo que su valor es undefined.
//? LET y CONST: cuando utilizamos estas variables antes de ser declaradas, si se intenta mostrar el contenido de estas, nos dara un error,

saludar();

function saludar() {
    console.log('Bienvenido');
}