// Notaciones 

// ; punto y coma ==> se utiliza para separar sentencias y deliminar el final de una linea de codigo  
//es opcional en javascript 

let nombre = "Juan";
nombre + 2;
console.log(nombre + 2);

/* . punto ==>  se utilizar para acceder a las propiedades o atributos de un objeto */



// [] corchetes ==> Array, Listas, Colecciones, Arreglos, Matrices, Vectores, Estructuras de datos
// [x] ==> x es un indice, posicion de un elemento dentro de un arreglo al que podemos acceder  
const ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(ar[5]);
var Array = ["Manzana", "Pera", "Uva", "Sandia", "Melon", "Piña", "Coco", "Papaya", "Mango", "Fresa"];
console.log(Array[5]);

// () parentesis ==> Funciones, Invocaciones, Llamadas, Argumentos, Parametros, Estructuras de datos
// (x) ==> x es un argumento, parametro de una funcion que podemos pasarle a una funcion
function suma(a, b) {
    return a + b;
}
console.log(suma(2, 3));


// {} llaves ==> Objetos, Diccionarios, Estructuras de datos 
// {x} ==> x es una propiedad, atributo de un objeto al que podemos acceder
const persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 20,
    direccion: {
        calle: "Av. Siempre Viva",
        numero: 123
    }
}

console.log(persona.nombre);
console.log(persona.direccion.calle);




// console.log('atributo' in objeto'); ==> devuelve true o false si el atributo existe en el objeto  
console.log('fechaNac' in persona);
console.log('edad' in persona);