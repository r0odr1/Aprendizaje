<<<<<<< HEAD
/*
Escribe un programa que le pida al usuario su año de nacimiento e imprima su edad actual en la consola
con la frase "Tienes X años". Por ejemplo, asumiendo que el año actual es 2019 y el usuario ingresa 1999,
el programa debe imprimir en la consola: Tienes 29 años
*/

let año = parseInt(prompt("Ingrese año de nacimiento: "))
let añoA = new Date()
let year = añoA.getFullYear()
let resta = year - año

=======
/*
Escribe un programa que le pida al usuario su año de nacimiento e imprima su edad actual en la consola
con la frase "Tienes X años". Por ejemplo, asumiendo que el año actual es 2019 y el usuario ingresa 1999,
el programa debe imprimir en la consola: Tienes 29 años
*/

let año = parseInt(prompt("Ingrese año de nacimiento: "))
let añoA = new Date()
let year = añoA.getFullYear()
let resta = year - año

>>>>>>> 8f848791ec44d81ecc3f25fcbdc96b9694a94203
console.log("Tiene " + resta + " años")