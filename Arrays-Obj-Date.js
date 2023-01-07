//arreglos son estructuras de datos que nos permiten almacenar multiples valores en una sola variable
//los arreglos son objetos, por lo tanto tienen propiedades y metodos
//los arreglos son estructuras de datos indexadas, es decir que cada elemento del arreglo tiene un indice
//los arreglos son estructuras de datos dinamicas, es decir que pueden crecer o decrecer dinamicamente
//los arreglos son estructuras de datos heterogeneas, es decir que pueden almacenar diferentes tipos de datos
//los arreglos son estructuras de datos ordenadas, es decir que los elementos del arreglo se almacenan en un orden especifico
//los arreglos son estructuras de datos mutables, es decir que podemos modificar los elementos del arreglo
//los arreglos son estructuras de datos iterables, es decir que podemos recorrer los elementos del arreglo
//los arreglos son estructuras de datos de tipo objeto, es decir que son objetos

//-----------------------------------------------------------------------------
//arreglos, Array , Listas

const arr1 = [1, 'dos', false, 3, undefined, NaN, 'cuatro', null];
const arr2 = new Array(5, 'Siete', false, 99, undefined, NaN, 'Ocho', null);
const arr3 = new Array(4);
arr3[0] = 'soy el valor del indice numero 1';
arr3[1] = 2
arr3[2] = 'soy el valor del indice numero 3';
arr3[3] = 4
const arrMix = [arr1, arr2, arr3];


console.log(arrMix)
console.log(arr3);
console.log(arr1);
console.log(arr2);


// Objetos , Objetcs 
// un objeto es una entidad que representa un conjunto de propiedades y metodos, Las propiedades son valores 
//asociados a un objeto, mientras que los métodos son funciones que pueden ser invocadas en el contexto de un objeto

// Para acceder a estas propiedades, tenemos 2 formas;

// 1. Notacion de punto ==>

const obj = {
    name: 'Juan',
    lastName: 'Perez',
    age: 30,
    Greet: () => {
        return 'hola mi nombre es ' + obj.name + ' ' + obj['lastName'] + ' y mi edad ' + obj.age;
    },
    Saludar: function() {
        return `hola, mi nombre es ${this.name} ${this.lastName}`;
        //Eventualmente no se puede utilizar this.prop en otra funcion dentro de un objeto
    },

    Bye: () => {
        return `adios, mi nombre es ${obj.name} ${obj.lastName}`;

    },

    Despedirse: () => {
        // return `adios, mi nombre es ${this.name} ${this.lastName}`;
        return 'Adios, mi nombre es ' + obj.name + ' ' + obj['lastName'];
    }
}



console.log(obj.Greet());
console.log(obj.Saludar());
console.log(obj.Despedirse());
console.log(obj.Bye());
console.log(obj.name)
console.log(obj.lastName);
console.log(typeof(obj.Saludar));
console.log(typeof(obj.Bye));



// 2. Notacion de corchetes ==> 
// los objetos deben comenzar con mayuscula o minuscula?
const Telefono = {
    marca: 'Samsung',
    modelo: 'Galaxy S10',
    color: 'Negro',
    precio: 1000,
    Companies: ['Claro', 'Movistar', 'VTR'],
    StorageCard: {
        Storage: '64gb',
        Name: 'SandDisk',
        Format: 'SSD',
    },
    'dimension-card': '2cm x 3cm',
    'numero-tarjetas': 5
}
console.log(Telefono["numero-tarjetas"]);
console.log(Telefono['dimension-card']);
console.log(Telefono.Companies);
Telefono.Anio = '2019';
console.log(Telefono.Anio);
//Se pueden modificar los datos de las propiedades de un objeto pero no el nombre de la propiedad si
//esta es usada como CONST
Telefono.Marca = 'Iphone';
console.log(Telefono.Marca);

//Objetos con new Object
const Vehicle = new Object({
    marca: 'Toyota',
    modelo: 'Corolla',
});
Vehicle.color = 'Rojo';

console.log(Vehicle);
console.log(Vehicle.color);




//**Libreria de apoyo: Moment.js
// Date o Fechas
// Date es un objeto que nos permite trabajar con fechas y horas

const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10);
console.log(fecha_milis);

const fecha_string = new Date("25 Marzo 2022");
console.log(fecha_string);
//Formato Ingles
const fecha_stringEnglish = new Date("nov 5 2022");
console.log(fecha_stringEnglish);

//** */ Mes comienza de 0 - 11 (se le puede restar 1 al mes para que quede con el mes correspondiente) ==> 2021,4-1,24
//!Formato Para valores == > Año, Mes, Dia
const feca_valores = new Date(2019, 4, 24);
console.log(feca_valores);