/*
En la reunión familiar anual, a la familia le gusta encontrar la edad del miembro vivo de mayor edad y la edad del miembro de la familia más joven
y calcular la diferencia entre ellos.

Se le dará una matriz de las edades de todos los miembros de la familia, en cualquier orden.
Las edades se darán en números enteros, por lo que un bebé de 5 meses tendrá una 'edad' asignada de 0.
Devuelve una nueva matriz (una tupla en Python) con [edad más joven, edad más antigua, diferencia entre el más joven y el más viejo edad].
*/

function differenceInAges(age) {
  let numeroMen = age[0];
  let numeroMax = 0;
  if (age.length !== 0) {
    for (let i = 0; i < age.length; i++) {
      if (age[i] < numeroMen) {
        numeroMen = age[i];
      }
      if (numeroMax < age[i]) {
        numeroMax = age[i];
      }
    }
    diferencia = numeroMax - numeroMen;
    return [numeroMen, numeroMax, diferencia];
  }

  return undefined;
}
console.log(differenceInAges([1, 3, 2, 4])); // 3
console.log(differenceInAges([10, 9, 8, 7, 6, 5, 4])); // 10
co; /*
En la reunión familiar anual, a la familia le gusta encontrar la edad del miembro vivo de mayor edad y la edad del miembro de la familia más joven
y calcular la diferencia entre ellos.

Se le dará una matriz de las edades de todos los miembros de la familia, en cualquier orden.
Las edades se darán en números enteros, por lo que un bebé de 5 meses tendrá una 'edad' asignada de 0.
Devuelve una nueva matriz (una tupla en Python) con [edad más joven, edad más antigua, diferencia entre el más joven y el más viejo edad].
*/

// function differenceInAges(age){
//   let numeroMen = age[0]
//   let numeroMax = age[0]
//   if (age.length !== 0){
//       for (let i=0; i < age.length; i++){
//           if (age[i] < numeroMen){
//             numeroMen = age[i]
//           }
//           else if (numeroMax < age[i]){
//               numeroMax = age[i]
//           }
//       }
//       diferencia = numeroMax - numeroMen
//       return [numeroMen, numeroMax, diferencia]
//   }

//   return undefined
// }
// console.log(differenceInAges([1, 3, 2, 4])) // 3
// console.log(differenceInAges([10, 9, 8, 7, 6, 5, 4])) // 10
// console.log(differenceInAges([])) // undefined
