/*
Escribe un programa que:

Le pida al usuario un número y cree un arreglo de números comenzando en el 1 hasta el número que el usuario ingrese (incluyéndolo)
Eliminar el segundo elemento.
Recorra e imprima el arreglo.
Ejemplo:

Ingresa un número> 5
1
3
4
5
Nota: los 3 pasos de este ejercicio se deben realizar con programación según lo visto en clase.
*/

let numero = parseInt(prompt("Ingrese un numero: "))
let arreglo = []
for(let i = 1; i <= numero; i++){
    arreglo.push(i)
}
console.log(arreglo)

let arregloDos = arreglo.splice(1,1)
for (let i = 1; i < arregloDos; i++){
    console.log(arreglo)
}

