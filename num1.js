/* Crea una funcion 'cheapProducts' que recibe una matriz de productos como argumento.
Cada producto tiene un `nombre` y un `precio`. Devuelve una matriz con el nombre de los productos cuyo valor es menor a 10.
Si no hay productos que cumplan con esto condición y luego devuelve una matriz vacía
*/
/*
const products1 = [ 
  { name: "rice", price: 10 }, 
  { name: "panela", price: 5 }, 
  { name: "pasta", price: 16 }, 
  { name: "eggs", price: 8 },
];

const products2 = [ 
  { name: "rice", price: 10 }, 
  { name: "panela", price: 20 }, 
  { name: "pasta", price: 16 }, 
  { name: "eggs", price: 37 },
];

function cheapProducts (arreglo){
    let nuevoArreglo = []
    for(let i = 0; i < arreglo.length; i++){
        if(arreglo[i].price < 10){
            nuevoArreglo.push(arreglo[i].name)
        }
    }
    return nuevoArreglo
}

console.log(cheapProducts(products1)); // [‘panela’, ‘eggs’] 
console.log(cheapProducts(products2)); // [] */

/* escribe una funcion temperaturas que reciba un arreglo de temperatura y si esta temperatura
es  mayor o igual que 18  y menor igual que 30 retorne true, de lo contrario retorne false*/

/*function temperaturas(temp){
    //let nuevoArreglo
    for(let i = 0; i < temp.length; i++){
        if(temp[i] >= 18 && temp[i] <= 30){
            return true
        }
        else {
            return false
        }
    }
    return true
    
}

console.log(temperaturas([15, 30, 45, 20, 19, 10, 40, 50, 30]))
//console.log(temperaturas([10, 40, 45, 10, 15, 10, 40, 50, 32]))*/

/* Escribe una funcion llamada twoSum  que reciba dos parametros, un arreglo de numeros
y un target (numero), si la suma de dos indices del arreglo son iguales al target, retorne el valor
de esos indices*/

/*
nums = [2,7,11,15], target = 9 // [2,7]

function twoSum(arrNum, tar){
    
    for(let i = 0; i < arrNum.length; i++){
        if(arrNum[i] + arrNum[i+1] === tar){
            return [arrNum[i], arrNum[i+1]]
        }
    }
}
console.log(twoSum(nums, target))*/

/*Escribe una función llamada saludar que reciba un objeto que representa una persona
y retorne la frase como se muestra a continuación:
// escribe tu función acá

// código de prueba
const pedro = { nombre: "Pedro", edad: 23 };
console.log(saludar(pedro)); // "Hola Pedro, tienes 23 años"

const maria = { nombre: "Maria", edad: 35 };
console.log(saludar(maria)); // "Hola Maria, tienes 35 años"

const juan = { nombre: "Juan" };
console.log(saludar(juan)); // "Hola Juan"
*/
/*
const pedro = { nombre: "Pedro", edad: 23 };
const maria = { nombre: "Maria", edad: 35 };
const juan = { nombre: "Juan" };

function saludar(nom){
    if(nom.edad){
        return "Hola " + nom.nombre + "tienes " + nom.edad + "años"
    }
    else{
        return "Hola " + nom.nombre
    }
}


console.log(saludar(pedro)); // "Hola Pedro, tienes 23 años"
console.log(saludar(maria)); // "Hola Maria, tienes 35 años"
console.log(saludar(juan)); // "Hola Juan"*/

/*Crea una función flecha y asígnala a una variable obtenerImpares. La función debe recibir un arreglo de números y retornar todos los impares.
Nota: Utiliza el método filter y pásale una función flecha como argumento.
// escribe tu solución acá

// código de prueba
console.log(obtenerImpares([1, 2, 3, 4, 5])) // [1, 3, 5]
console.log(obtenerImpares([64, 35, 27])) // [35, 27]
console.log(obtenerImpares([])) // []*/
/*
function obtenerImpares(array){
    let impares = []
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 !== 0){
            impares.push(array[i])
        }
    }
    return impares

}
console.log(obtenerImpares([1, 2, 3, 4, 5])) // [1, 3, 5]
console.log(obtenerImpares([64, 35, 27])) // [35, 27]
console.log(obtenerImpares([])) // []*/

/*
Escribe una función llamada posPares que reciba un arreglo y retorne un nuevo arreglo con los valores en las posiciones
pares del arreglo que llega como argumento.
escribe tu función acá*/

// código de prueba

/*function posPares (array){
    let nuevoArreglo = []
    for( let i = 0; i < array.length; i++){
        if(i % 2 === 0){
            nuevoArreglo.push(array[i])
        }
    }
    return nuevoArreglo
}

console.log(posPares(["a", "b", "c"])) // ["a", "c"]
console.log(posPares([0, 1, 2, 3, 4])) // [0, 2, 4]
console.log(posPares([])) // []*/
/*let accion = "¿Paso o Reprobo?"

function pasarPrueba (pru){
    if(pru === "Paso"){
        console.log("Regalo para la tutora")
    }
    else if(pru === "Reprobo"){
        console.log("Llorar en la cama")
    }
}
console.log(pasarPrueba("Paso"))*/

//let accion = prompt("¿Paso o Reprobo?")
let a = "Paso"
let b = "Reprobo"

function prueba (pru){
    if(pru === a){
        console.log("Regalo para la tutora")
    }
    else if(pru === b){
        console.log("Llorar en la cama")
    }
}
console.log(prueba(a))

