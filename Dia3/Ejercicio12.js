//Escribe un programa que le pida al usuario ingresar una frase. El programa debe imprimir la frase en la consola 10 veces.
//Nota: utilice un ciclo para imprimir la frase las 10 veces.

let frase = prompt("Ingrese una frase: ")

for(let i = 0; i < 10; i++){
    console.log(i + " " + frase)
}