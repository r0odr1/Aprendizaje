/*
Escribe un programa que:

Le pida al usuario una cadena (una cadena de texto).
Si el string es "salir" (todo en minúsculas) el programa debe imprimirse en la consola "Hasta pronto!" y terminar.
De lo contrario imprime en la consola lo que el usuario ingresó y repite el proceso desde el paso 1.
*/

/*let frase = prompt("Ingrese una frase: ")

if(frase !== "salir"){
    console.log(frase)
    frase = prompt("Ingrese una frase")
}
console.log("Hata pronto!")
*/
var string = prompt('Ingresa un texto');

while(string !== 'salir') {
  console.log(string);
  string = prompt('Ingresa un texto');
}

console.log('Hasta pronto!')