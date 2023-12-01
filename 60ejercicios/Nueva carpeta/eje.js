/*

Escriba un programa que:

Le pida al usuario una cadena (una cadena de texto).
Si el string es "salir" (todo en minúsculas) el programa debe imprimirse en la consola "Hasta pronto!" y terminar.
De lo contrario imprime en la consola lo que el usuario ingresó y repite el proceso desde el paso 1.
*/

let cadena = prompt("Ingrese un texto: ")

while (cadena !== "salir"){
    console.log(cadena)
    cadena = prompt("Ingrese un texto: ")
}
console.log("Hasta pronto!")