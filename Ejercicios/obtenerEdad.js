/* Obtener la edad de las personas que hablen inglés (EN) de un arreglo de 5 objetos Persona.
Cada elemento del arreglo tiene la siguiente estructura:*/
let matriz = [{
    nombre: "Juana",
    sexo: "F",
    edad: 30,
    idiomas: ["EN","ES"],
  },{
    nombre: "Mario",
    sexo: "M",
    edad: 20,
    idiomas: ["ES"],
  },{
    nombre: "Carla",
    sexo: "F",
    edad: 31,
    idiomas: ["EN"],
  }];

/*function edadIngles (arr){
    let nuevoArreglo = []
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i].idiomas[j] === "EN"){
                nuevoArreglo.push(arr[i].edad)
            }
        }
    }
    return nuevoArreglo
}
console.log(edadIngles(matriz)) // 30, 31*/

function edadIngles (arr){
  let nuevoArreglo = []
  for(let i = 0; i < arr.length; i++){
      if(arr[i].idiomas[0] === "EN"){
          nuevoArreglo.push(arr[i].edad)
      }
  }
  return nuevoArreglo
}
console.log(edadIngles(matriz)) 