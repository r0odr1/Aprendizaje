//Escribe un programa que le pida un número al usuario e imprima en la consola si el número es mayor o menor/igual a 10.
//Si es mayor debe imprimir "El número es mayor a 10".
//Si es menor debe imprimir "El número es menor o igual a 10".

let numUno = parseInt(prompt("Ingrese un numero"))

if(numUno > 10){
    console.log("El numero "+ numUno+" es mayor a 10 ")
}else if(numUno < 10){
    console.log("El numero "+numUno+" es menor a 10")
}else{
    console.log("El numero es igual a 10")
}