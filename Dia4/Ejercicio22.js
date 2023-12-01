<<<<<<< HEAD
/*
Completa el siguiente programa e imprime la cantidad de unos (1) que haya en el arreglo:

const nums = [1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1]
El resultado debería ser el siguiente: 11
Nota: este ejercicio lo debe hacer con ciclos y sin ayuda de la función filterde JavaScript.
Al terminarlo, cambia el arreglo original para verificar que funciona con otras combinaciones de ceros y unos.
*/

let nums = [1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1]
let suma = 0

for(let i = 0; i < nums.length; i++){
    if(nums[i] === 1){
        suma ++
    }
}
=======
/*
Completa el siguiente programa e imprime la cantidad de unos (1) que haya en el arreglo:

const nums = [1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1]
El resultado debería ser el siguiente: 11
Nota: este ejercicio lo debe hacer con ciclos y sin ayuda de la función filterde JavaScript.
Al terminarlo, cambia el arreglo original para verificar que funciona con otras combinaciones de ceros y unos.
*/

let nums = [1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1]
let suma = 0

for(let i = 0; i < nums.length; i++){
    if(nums[i] === 1){
        suma ++
    }
}
>>>>>>> 8f848791ec44d81ecc3f25fcbdc96b9694a94203
console.log(suma)