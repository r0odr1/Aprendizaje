<<<<<<< HEAD
/*
Escribe una función llamada suma que recibe dos números y devuelve la suma de los dos números.

Algunos ejemplos de cómo invocaríamos la función con los valores que debería devolver:

suma(1, 2) // 3
suma(0, 0) // 0
suma(245, 923) // 1168
*/

function suma(num){
    let total = 0
    for(let i = 0; i < num.length; i++){
        total = total + num[i]
    }
    return total
}
console.log(suma([1, 2]))
console.log(suma([0, 0]))
=======
/*
Escribe una función llamada suma que recibe dos números y devuelve la suma de los dos números.

Algunos ejemplos de cómo invocaríamos la función con los valores que debería devolver:

suma(1, 2) // 3
suma(0, 0) // 0
suma(245, 923) // 1168
*/

function suma(num){
    let total = 0
    for(let i = 0; i < num.length; i++){
        total = total + num[i]
    }
    return total
}
console.log(suma([1, 2]))
console.log(suma([0, 0]))
>>>>>>> 8f848791ec44d81ecc3f25fcbdc96b9694a94203
console.log(suma([245, 923]))