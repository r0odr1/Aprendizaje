/*
Escribe un programa que piense un número de forma aleatoria del 1 al 10 y le pida al usuario que lo trate de adivinar.
Si el número es correcto debe imprimir en la consola "Felicitaciones, ese era!",
de lo contrario debe imprimir "Lo siento, intenta nuevamente!"
*/

let num = parseInt(prompt("Adivina el numero: "))
let ale = Math.floor(Math.random() * 10)

if(num === ale){
    console.log("Felicidades, ese era! " + ale)
}
else{
    console.log("Lo siento, intenta nuevamente! " + ale)
}