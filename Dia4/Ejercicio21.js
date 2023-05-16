/*
Completa el siguiente programa para imprimir los números que sean mayores a 10.
const nums = [1, 23, 5, 8, 40, 12, 2, 67, 24, 9, 39]
// escribe tu código acá
El resultado debería ser el siguiente:

23
40
12
67
24
39
Nota: este ejercicio lo debe hacer con ciclos y sin ayuda de la función filterde JavaScript.
Al terminarlo cambia el arreglo original para verificar que funciona con otros números.
*/

let arreglo = [1, 23, 5, 8, 40, 12, 2, 67, 24, 9, 39]
for(let i = 0; i < arreglo.length; i++){
    if(arreglo[i] > 10){
        console.log(arreglo[i])
    }
}