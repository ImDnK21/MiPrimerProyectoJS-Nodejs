// variables

// VAR

var a = 5;
console.log(a);

a = 15;
console.log(a);

//LET

let c = 4;
console.log(c);

c = 14;
console.log(c);


//Constantes
const b = 5
console.log(b);

// error al volver a asignar valor a una constante
// b = 13;
console.log(b);


//

var variable = "Hola soy una variable VAR";

for (let i = 0; i < 2; i++) {
    var variable = "Hola soy una variable VAR dentro de un for";
    console.log(variable);
}

console.log(variable);


let variableLET = "Hola soy una variable LET";

for (let i = 0; i < 2; i++) {
    let variableLET = "Hola soy una variable LET dentro de un for";
    console.log(variableLET);
}
console.log(variableLET);


////////////////////////////////////////////////777
//TipoOf
// typeof nos permite saber el tipo de dato de una variable

let numero = 5;
console.log(typeof numero);

console.log(numero);

//podemos redefinir la variable numero y tipoOf nos dira que tipo de dato es despues de la redefinicion
numero = "Hola soy un numero";
console.log(typeof numero);

//Mismo ejemplo con var

var nombre = "Juan";
console.log(typeof nombre);

nombre = 5;
console.log(typeof nombre);


const apellido = "Perez";
console.log(typeof apellido);

//error al redefinir una constante
// apellido = 5;
// apellido sigue siendo un string ya que no se puede redefinir
console.log(typeof apellido);