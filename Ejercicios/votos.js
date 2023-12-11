// let votos = [];

// function votar(canditato) {
//   votos.push(canditato)
// }

// function contarVotos (){
//   let conteo = {}
//   for (let i = 0; i < votos.length; i++) {
//     let voto = votos [i]
//     if  (conteo[voto] === undefined) {
//       conteo[voto] = 1
//     }else {
//       conteo[voto] ++
//     }
//   }
//   return conteo
// }

// votar("Candidato 1")

// console.log(contarVotos());


// function sumar (numeros){
//   let suma = 0

//   for (let i = 0; i < numeros.length; i++){
//     suma += numeros[i]
//   }
//   return suma
// }

//console.log(sumar([1, 2]));
// let suma = 0
// for (i = 0; i <= 100; i++) {
//   suma = suma + i
// }

// console.log(suma);

function invertirCadena (cadena) {
  return cadena.split('').reverse().join('')
}

function palindromo (palabra) {
  let esPali = invertirCadena(palabra)

  return palabra === esPali
}

console.log(palindromo("hola"));
console.log(palindromo("ana"));
