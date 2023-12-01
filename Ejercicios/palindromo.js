
function palindromo(palabra){
    for(let i = 0, j = palabra.length - 1; i <= j; i++, j--){
        if(palabra[i] !== palabra[j]){
            return console.log("No es palindrome")
        }
        else{
            return console.log("Es palindrome")
        }
    }
        
}

console.log(palindromo("ana"))
console.log(palindromo("color"))
console.log(palindromo("ojo"))
console.log(palindromo("atar a la rata"))