//Escribe un programa que piense un número de forma aleatoria del 1 al 10 y le pida al usuario que lo trate de adivinar.
//Si el número es correcto debe imprimir en la consola "Felicitaciones, ese era!", de lo contrario debe imprimir "Lo siento, intenta nuevamente!"

let numUsuario = parseInt(prompt("Adivina el numero ente 1 y 10"))
let numeroAleatorio = Math.floor(Math.random()*10)
console.log(numeroAleatorio)

if(numUsuario === numeroAleatorio){
    console.log("Felicidades, acertaste con el nuemro "+numUsuario)
}else{
    console.log("El numero "+numUsuario+" no era, sigue intentando")
}