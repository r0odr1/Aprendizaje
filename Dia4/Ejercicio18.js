<<<<<<< HEAD
/*
Crea un programa a partir de las siguientes:

Crea una llamada variable nombrescon un arreglo que tenga los siguientes elementos: "Pedro", "Pablo", "María", "Juan", "Diana".
1 Pídele al usuario que ingrese un nombre e insértalo al final del arreglo que creaste en el paso 1.
2 Pídele al usuario que ingrese otro nombre y reemplace la tercera posición del arreglo con este valor.
2 Recorre el arreglo e imprímelo.
Un ejemplo de cómo se comportaría el programa en la consola sería el siguiente:

Ingresa un nombre> Camilo
Ingresa otro nombre> Ariel
Pedro
Pablo
Ariel
Juan
Diana
Camilo
*/

let nombres = ["Pedro", "Pablo", "María", "Juan", "Diana"]
let agregarNombre = prompt("Ingrese nombre: ")
let agregarNombreDos = prompt("Ingrese otro nombre: ")

nombres.push(agregarNombre)
nombres[2] = agregarNombreDos

for (let i = 0; i < nombres.length; i++){
    console.log(nombres[i])
}
=======
/*
Crea un programa a partir de las siguientes:

Crea una llamada variable nombrescon un arreglo que tenga los siguientes elementos: "Pedro", "Pablo", "María", "Juan", "Diana".
1 Pídele al usuario que ingrese un nombre e insértalo al final del arreglo que creaste en el paso 1.
2 Pídele al usuario que ingrese otro nombre y reemplace la tercera posición del arreglo con este valor.
2 Recorre el arreglo e imprímelo.
Un ejemplo de cómo se comportaría el programa en la consola sería el siguiente:

Ingresa un nombre> Camilo
Ingresa otro nombre> Ariel
Pedro
Pablo
Ariel
Juan
Diana
Camilo
*/

let nombres = ["Pedro", "Pablo", "María", "Juan", "Diana"]
let agregarNombre = prompt("Ingrese nombre: ")
let agregarNombreDos = prompt("Ingrese otro nombre: ")

nombres.push(agregarNombre)
nombres[2] = agregarNombreDos

for (let i = 0; i < nombres.length; i++){
    console.log(nombres[i])
}
>>>>>>> 8f848791ec44d81ecc3f25fcbdc96b9694a94203
