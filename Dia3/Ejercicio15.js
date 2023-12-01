<<<<<<< HEAD
/*
Escribe un programa para la consola que le pida al usuario un número y sume todos los números desde 1 hasta ese número.
Por ejemplo, si el usuario ingresa el número 5, el programa debe imprimir 15 (1+2+3+4+5). Si el usuario ingresa el número 10, el programa debe imprimir 55.
*/

let numero = parseInt(prompt("Ingrese un numero: "))
let suma = 0

for(let i = 1; i <= numero; i++){
    suma = suma + i
}
=======
/*
Escribe un programa para la consola que le pida al usuario un número y sume todos los números desde 1 hasta ese número.
Por ejemplo, si el usuario ingresa el número 5, el programa debe imprimir 15 (1+2+3+4+5). Si el usuario ingresa el número 10, el programa debe imprimir 55.
*/

let numero = parseInt(prompt("Ingrese un numero: "))
let suma = 0

for(let i = 1; i <= numero; i++){
    suma = suma + i
}
>>>>>>> 8f848791ec44d81ecc3f25fcbdc96b9694a94203
console.log(suma)