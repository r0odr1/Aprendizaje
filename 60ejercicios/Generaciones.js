/*
Escribe un programa para la consola que le pida al usuario su año de nacimiento
e imprima en la consola la generación a la que pertenece:

"Gran generación" si el año es menor a 1945
"Baby boomer" si es entre 1945 y 1964
"X" si es entre 1965 y 1981
"Millenial" si es entre 1982 y 1994
"Z" si es igual o mayor a 1995
Por ejemplo, si el usuario ingresa el año 1920 el programa de impresión "Gran generación".
*/

let año = parseInt(prompt("Ingrese su año de nacimiento: "))

if(año < 1945){
    console.log("Gran generacion")
}
else if(año >= 1945 && año <= 1964){
    console.log("Baby boomer")
}
else if(año >= 1965 && año <= 1981){
    console.log("X")
}
else if(año >= 1982 && año <= 1994){
    console.log("Millenial")
}
else if(año >= 1995){
    console.log("Z")
}