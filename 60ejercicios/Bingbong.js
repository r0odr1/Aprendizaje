/*
Escribe un programa que le pida al usuario ingresar un número.

Si el número es múltiplo de 3 debe imprimirse en la consola "bing".
Si el número es múltiplo de 5 debe imprimirse en la consola "bong".
Si el número es múltiplo tanto de 3 como de 5 debe imprimirse en la consola "bingbong".
Si el no cumple ninguna de las condiciones anteriores debe imprimir el mismo número.
*/

let numero = parseInt(prompt("Ingrese un numero: "))

if (numero % 3 === 0 && numero % 5 ===0){
    console.log("bingbong")
}
else if(numero % 3 === 0){
    console.log("bing")
}
else if(numero % 5 === 0){
    console.log("bong")
}
else{
    console.log(numero)
}