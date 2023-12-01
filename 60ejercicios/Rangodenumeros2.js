/*
Escribe un programa para la consola que le pida al usuario dos números.

Si el primer número es menor que el segundo imprime los números en el rango de forma ascendente. Por ejemplo,
si el usuario ingresa 5 como primer número y 10 como segundo número, el programa debe imprimir:

5
6
7
8
9
10

Si el primer número es mayor que el segundo imprime los números en el rango de forma descendente.
Por ejemplo, si el usuario ingresa 10 como primer número y 5 como segundo número, el programa debe imprimir:

10
9
8
7
6
5
Nota: Fíjate que se imprimen también los números en los límites, en el ejemplo el 10 y el 5.
*/

let numero1 = parseInt(prompt("Digite un numero: "))
let numero2 = parseInt(prompt("Digite otro numero: "))

if(numero1 < numero2){
    for(let i = numero1; i <= numero2; i++){
        console.log(i)
    }
}
else{
    for(let i = numero1; i >= numero2; i--){
        console.log(i)
    }
}
