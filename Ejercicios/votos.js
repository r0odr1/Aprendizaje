let votos = [];

function votar(canditato) {
  votos.push(canditato)
}

function contarVotos (){
  let conteo = {}
  for (let i = 0; i < votos.length; i++) {
    let voto = votos [i]
    if  (conteo[voto] === undefined) {
      conteo[voto] = 1
    }else {
      conteo[voto] ++
    }
  }
  return conteo
}

votar("Candidato 1")

console.log(contarVotos());