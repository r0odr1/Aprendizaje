/*Conjunto reductor
Introducción
¡Estas matrices son demasiado largas! ¡Reducámoslos!

Descripción
Escriba una función que tome una matriz de enteros del 0 al 9 y devuelva una nueva matriz:

Los números sin números idénticos que los precedan o los sigan devuelven un 1: 2, 4, 9  => 1, 1, 1
Los grupos secuenciales de números idénticos devuelven su cuenta:6, 6, 6, 6 => 4
Ejemplo

[0, 4, 6, 8, 8, 8, 5, 5, 7] => [1, 1, 1, 3, 2, 1]

Luego, su función debe repetir el proceso en la matriz resultante, y en la matriz resultante de eso, hasta que devuelva un solo número entero :

[0, 4, 6, 8, 8, 8, 5, 5, 7] =>  [1, 1, 1, 3, 2, 1] => [3, 1, 1, 1] => [1, 3] => [1, 1] => [2]

Cuando su función haya reducido la matriz a un solo número entero siguiendo estas reglas, debería devolver ese número entero.

[2] => 2

Reglas y afirmaciones
Todas las matrices de prueba tendrán una longitud de más de 2
Todos los enteros en las matrices de prueba serán números positivos del 0 al 9
Debe devolver un número entero, no una matriz con 1 elemento
*/

function numeros(enteros){
    let nuevoArreglo = []
    let num = 0
    for(let i = 0; i < enteros.length; i++){
        if(enteros[i] !== enteros[i+1]){
            nuevoArreglo.push(1)
            
        }
        else {
            num ++
            nuevoArreglo.push(num)
        }
    }
    return nuevoArreglo
}
console.log(numeros([0, 4, 6, 8, 8, 8, 5, 5, 7])) // [1, 1, 1, 3, 2, 1]
