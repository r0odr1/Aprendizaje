<<<<<<< HEAD
/*
Imprima la matriz en la consola, el resultado final debe ser el siguiente:

const mat = [
  ["Pablo", "Maria", "Pedro"],
  ["Diana", "Juan", "Federico"],
  ["Roberto", "Daniel", "Sandra"]
];

Grupo 1:
  Pablo
  Maria
  Pedro
Grupo 2:
  Diana
  Juan
  Federico
Grupo 3:
  Roberto
  Daniel
  Sandra

  Nota 1: utiliza ciclos anidados para solucionar este ejercicio Nota 2: agrega dos espacios al principio de cada nombre
*/

let mat = [
    ["Pablo", "Maria", "Pedro"],
    ["Diana", "Juan", "Federico"],
    ["Roberto", "Daniel", "Sandra"]
];

for(let i = 0; i < mat.length; i++){
    console.log("Grupo " + (i+1) + ":")
    for(let ind = 0; ind < mat[i].length; ind++){
        console.log("  " + mat[i][ind])

    }
=======
/*
Imprima la matriz en la consola, el resultado final debe ser el siguiente:

const mat = [
  ["Pablo", "Maria", "Pedro"],
  ["Diana", "Juan", "Federico"],
  ["Roberto", "Daniel", "Sandra"]
];

Grupo 1:
  Pablo
  Maria
  Pedro
Grupo 2:
  Diana
  Juan
  Federico
Grupo 3:
  Roberto
  Daniel
  Sandra

  Nota 1: utiliza ciclos anidados para solucionar este ejercicio Nota 2: agrega dos espacios al principio de cada nombre
*/

let mat = [
    ["Pablo", "Maria", "Pedro"],
    ["Diana", "Juan", "Federico"],
    ["Roberto", "Daniel", "Sandra"]
];

for(let i = 0; i < mat.length; i++){
    console.log("Grupo " + (i+1) + ":")
    for(let ind = 0; ind < mat[i].length; ind++){
        console.log("  " + mat[i][ind])

    }
>>>>>>> 8f848791ec44d81ecc3f25fcbdc96b9694a94203
}