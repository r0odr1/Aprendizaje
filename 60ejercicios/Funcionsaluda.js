/*
Escribe una función llamada hola que recibe un argumento (una cadena de texto) y responde "Hola" seguido del argumento y un signo de exclamación.

Algunos ejemplos de cómo invocaríamos esta función y lo que debería devolver:

hola("Pedro"); // retorna: "Hola Pedro!"
hola("Juan"); // retorna: "Hola Juan!"
hola(""); // retorna: "Hola !"
*/

function hola(string){
    return "Hola " + string + " !"
}
console.log(hola("Pedro"))
console.log(hola("Juan"))
console.log(hola(""))