//MULTIPLICAR TODOS LOS ELEMENTOS POR DOS

function multiplyElements(array) {
    
    for (let i = 0; i < array.length; i++) {
       array[i] = array[i] * 2;
    } return array;
 }
 console.log(multiplyElements([2, 4, 5, 6, 8]))
 console.log(multiplyElements([1, 1, -2, -3]))