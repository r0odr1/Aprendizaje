/*
Escribe un programa para la consola que le pide al usuario dos números e imprime en la consola los números en ese rango.
Por ejemplo, si el usuario ingresa 5 como primer número y 10 como segundo número, el programa debe imprimir:

5
6
7
8
9
10
Nota 1: Puedes asumir que el primer número siempre va a ser menor o igual que el segundo.

Nota 2: Fíjate que se imprimen también los números en los límites, en el ejemplo el 5 y el 10.
*/

let numero1 = parseInt(prompt("Ingrese el primer numero: "))
let numero2= parseInt(prompt("Ingrese el segundo numero: "))

for(let i = numero1; i <= numero2; i++){
    console.log(i)
}