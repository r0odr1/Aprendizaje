/*Escribe un programa que le pida al usuario una frase y un número.
El programa debe imprimir la frase en la consola el número de veces que ingresó el usuario.
Por ejemplo, si el usuario ingresó la frase "Hola Mundo" y el número 5, el programa debe imprimir "Hola Mundo" 5 veces:

Hola Mundo
Hola Mundo
Hola Mundo
Hola Mundo
Hola Mundo
*/

/*let frase = prompt("Ingrese una frase: ")
let numero = parseInt(prompt("Cuantas veces quiere ver el mensaje en consola: "))

for(let i = 0; i < numero; i++){
    console.log(frase)
}*/

let frase = "Ingrese una frase"
let numero = 10

for(let i = 0; i < numero; i++){
    console.log(i + " " + frase)
}