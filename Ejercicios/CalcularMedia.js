function calcularMedia (numeros) {
  let media = 0

  for (let i = 0; i < numeros.length; i++){
    media += numeros[i]
  }
  return "La media de todos los elementos ingresados es de: " + media/numeros.length
}

console.log(calcularMedia([1, 2, 3, 4, 5]));
console.log(calcularMedia([6, 2, 9, 4, 15]));