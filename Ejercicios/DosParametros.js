<<<<<<< HEAD
/* Escribe una funcion llamada twoSum  que reciba dos parametros, un arreglo de numeros
y un target (numero), si la suma de dos indices del arreglo son iguales al target, retorne el valor
de esos indices*/


nums = [2,7,11,15], target = 9 // [2,7]

function twoSum(arrNum, tar){
    
    for(let i = 0; i < arrNum.length; i++){
        if(arrNum[i] + arrNum[i+1] === tar){
            return [arrNum[i], arrNum[i+1]]
        }
    }
}
=======
/* Escribe una funcion llamada twoSum  que reciba dos parametros, un arreglo de numeros
y un target (numero), si la suma de dos indices del arreglo son iguales al target, retorne el valor
de esos indices*/


nums = [2,7,11,15], target = 9 // [2,7]

function twoSum(arrNum, tar){
    
    for(let i = 0; i < arrNum.length; i++){
        if(arrNum[i] + arrNum[i+1] === tar){
            return [arrNum[i], arrNum[i+1]]
        }
    }
}
>>>>>>> 8f848791ec44d81ecc3f25fcbdc96b9694a94203
console.log(twoSum(nums, target))