/*
Escribe un programa para la consola que le pida al usuario un número e imprima los números desde 1 hasta el número.

Por ejemplo, si el usuario ingresa el número 5, el programa de ser impreso:

1
2
3
4
5
*/

/*let numero = 10
for(let i = 1; i <= numero; i++){
    console.log(i)
}*/

let numero = parseInt(prompt("Ingrese un numero: "))
for(let i = 1; i <= numero; i++){
    console.log(i)
}