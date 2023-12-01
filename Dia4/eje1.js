/*
Es necesario completar la función/método de las dos edades más antiguas.
Debe tomar una matriz de números como argumento y devolver los dos números más
altos dentro de la matriz . El valor devuelto debe ser una matriz en el formato
[second oldest age, oldest age].

El orden de los números pasados ​​podría ser cualquier orden. La matriz siempre incluirá
al menos 2 elementos. Si hay dos o más años mayores, devuélvalos a ambos en formato de matriz.
*/

function twoOldestAges(ages){
    let numeroMax = ages[0]
    let numeroMax2 = ages[0]
    if (ages.length !== 0){
        for (let i = 0; i < ages.length; i++){
            if (numeroMax < ages[i]){
                numeroMax = ages[i]
            }
        }
        return numeroMax
    }
    
    return undefined

}

console.log(twoOldestAges([1, 2, 10, 8])) // [8, 10]
console.log(twoOldestAges([1, 3, 10, 0])) // [3, 10]