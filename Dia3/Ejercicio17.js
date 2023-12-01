<<<<<<< HEAD
/*
Escribe un programa que piense un número de forma aleatoria y le pida al usuario que lo trate de adivinar (como en uno de los ejercicios anteriores).
La diferencia es que esta vez el usuario puede intentar indefinidamente hasta que encuentre el número.
*/

let numero = parseInt(prompt("Ingrese un numero: "))
let numeroale = Math.floor(Math.random()*11)

let adivinar = false

while(!adivinar){
    if (numero === numeroale) {
        adivinar = true
    }else {
        numero = parseInt(prompt("Intenta de nuevo"))
    }
}
=======
/*
Escribe un programa que piense un número de forma aleatoria y le pida al usuario que lo trate de adivinar (como en uno de los ejercicios anteriores).
La diferencia es que esta vez el usuario puede intentar indefinidamente hasta que encuentre el número.
*/

let numero = parseInt(prompt("Ingrese un numero: "))
let numeroale = Math.floor(Math.random()*11)

let adivinar = false

while(!adivinar){
    if (numero === numeroale) {
        adivinar = true
    }else {
        numero = parseInt(prompt("Intenta de nuevo"))
    }
}
>>>>>>> 8f848791ec44d81ecc3f25fcbdc96b9694a94203
console.log("Ganaste, el numero era "+ numeroale)