/*
Escribe una función llamada esMultiplo que recibe dos números y devuelve verdadero si el primer argumento es múltiplo del segundo.

Ejemplos de cómo vamos a invocar la función:

esMultiplo(15, 3); // true
esMultiplo(8, 5); // false
esMultiplo(21, 7); // true
*/

function esMultiplo(num1, num2){
    if(num1 % num2 === 0){
        return true
    }
    else{
        return false
    }
}

console.log(esMultiplo(15, 3))
console.log(esMultiplo(8, 5))
console.log(esMultiplo(21, 7))