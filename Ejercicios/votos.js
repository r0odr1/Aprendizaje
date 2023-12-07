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

function invertirCadena(cadena) {
  return cadena.split("").reverse().join("");
}

function esPalindromo(cadena) {
  let cadenaReversa = invertirCadena(cadena);
  return cadena === cadenaReversa;
}

console.log(invertirCadena("hola"));
console.log(esPalindromo("radar"));