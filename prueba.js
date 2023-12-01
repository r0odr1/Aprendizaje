/*## Cantidad de números que cumplen condición

Escribe una función llamada cantidad que reciba un arreglo de números y retorne la cantidad de números que están entre 3 y 8 (incluyéndolos).

`cantidad([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) -> 6`

Nota: Hacer una variación para los números que sean múltiplos de 3 o de 5.
*/

/*function llamada(array){
    let numeros = 0
    for(let i = 0; i < array.length; i++){
        if(array[i] % 3 === 0 || array[i] % 5 === 0){
            numeros++
        }
    }
    return numeros
}

console.log(llamada([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15])) //-> 6
*/

/*
Write a function called cheapProducts that receives an array of products as an argument.
Each product has a name and a price. Return an array with the name of the products which value is less than 10.
If there are no products that meet this condition then return an empty array.
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

function cheapProducts(array){
    let nuevoArreglo = []
    for(let i = 0; i < array.length; i++){
        if(array[i].price < 10){
            nuevoArreglo.push(array[i].name)
        }
    }
    return nuevoArreglo
}

console.log(cheapProducts(products1)); // [‘panela’, ‘eggs’]
console.log(cheapProducts(products2)); // []*/

let receta = {
    nombre : "sandwich",
    ingredientes : [
        {nombre: 'Pan', cantidad: 2}, 
        {nombre: "huevo", cantidad: 3},
        {nombre: "miel", cantidad: 1}
    ]
}
console.log(receta.ingredientes[0].nombre)
