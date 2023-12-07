function invertirCadena (cadena){
  return cadena.split("").reverse().join("");
}

function palindromo (palabra){
  let palabraReversa = invertirCadena(palabra);

  return palabra === palabraReversa;
}

console.log(palindromo("hola"));
console.log(palindromo("ana"));
console.log(palindromo("radar"));
console.log(palindromo("pelea"));