let numero = parseInt(prompt("Ingrese un numero: "))

if(numero % 5 === 0 && numero % 3 === 0){
    console.log("bingbong")
}else if(numero % 3 === 0){
    console.log("bing")
}else if(numero % 5 === 0){
    console.log("bong")
}else{
    console.log(numero)
}