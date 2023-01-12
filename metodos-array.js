const frutas = ['Banana', 'Pera', 'Manzana']

frutas.push('kiwi') //* Agrega un elemento en la ultimo poscicion del array

frutas.unshift('durazno') // * Agrega un elemento en la primera poscicion del array

frutas.slice
    // ejemplo de la propiedad slice en js

//* Elimina el ultimo elemento de un array 
//*y guarda ese elemento una variable variable que le asignemos
elementEliminatedPop = frutas.pop()

//* Elimina el ultimo elemento de un array y guarda ese elemento
//* en una variable que le asignemos
elementEliminatedShift = frutas.shift()

console.log(elementEliminatedPop);
console.log(elementEliminatedShift);
console.log(frutas);


//* el metodo slice() devuelve los elementos seleccionados en un nuevo arreglo o obj
//* es decir, no modifica el elemento original
//. Sintaxis : array.slice( inicio , fin )
//¡ Inicio: (Opcional) Indice para comenzar extraer (por defecto 0)
//¡ Termino: (Opcional) Indice para finalizar la extraccion 
//¡ (por defecto hasta el fianl de la matriz)


var str = 'hola-mundo'
var arr = ['rojo', 'verde', 'amarillo', 'cafe']
var res = str.slice(0, 10)
var res2 = arr.slice(1, 3)
console.log(res);
console.log(res2);


const miHonda = {
    color: 'red',
    ruedas: 4,
    motor: {
        cilindros: 4,
        cantidad: 2.2
    }
};

const miNissan = {
        color: 'blue',
        ruedas: 4,
        patente: 'BAZL-42'
    }
    //para que sirve el map(entry => entry(1))
var ob1 = Object.entries(miHonda).slice(0 - 3).map(entry => entry[1])
var ob2 = Object.entries(miNissan).slice(0 - 3).map(entry => entry[1])

console.log(ob1);

console.log(ob2);