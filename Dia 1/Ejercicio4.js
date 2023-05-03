//Escribe un programa que le pida al usuario su año de nacimiento e imprima su edad actual en la consola
// con la frase "Tienes X años". Por ejemplo, asumiendo que el año actual es 2020 y el usuario
// ingresa 2000, el programa debe imprimir en la consola: Tienes 20 años
let años = parseInt(prompt('Ingrese su año de nacimiento: '));
let añoActual = parseInt(prompt('Ingrese el año actual: '));
let resultado = añoActual - años;
console.log('Tienes '+resultado+' años')