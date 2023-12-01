/*
Completa el siguiente programa e imprime la cantidad de unos (1) que haya en el arreglo:

const nums = [1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1]
El resultado debería ser el siguiente: 11
Nota: este ejercicio lo debe hacer con ciclos y sin ayuda de la función filterde JavaScript.
Al terminarlo, cambia el arreglo original para verificar que funciona con otras combinaciones de ceros y unos.
*/

let nums = [1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1]

function suma(numeros){
    let count = 0
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] === 1){
        count++
        }
    }
    return count
}
console.log(suma(nums))