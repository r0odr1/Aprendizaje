/*
Escribe un programa que le pida un número al usuario e imprima en la consola si el número es mayor o menor/igual a 10.

Si es mayor debe imprimir "El número es mayor a 10".

Si es menor debe imprimir "El número es menor o igual a 10".
*/

let numero = parseInt(prompt("Ingrese un numero: "))

function numeroMay(num){
    if(num > 10){
        alert("El numero es mayor a 10")
    }
    else{
        alert("El numero es menor o igual a 10")
    }
}
console.log(numeroMay(numero))