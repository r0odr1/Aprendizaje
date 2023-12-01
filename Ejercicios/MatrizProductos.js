<<<<<<< HEAD
/* Crea una funcion 'cheapProducts' que recibe una matriz de productos como argumento.
Cada producto tiene un `nombre` y un `precio`. Devuelve una matriz con el nombre de los productos cuyo valor es menor a 10.
Si no hay productos que cumplan con esto condición y luego devuelve una matriz vacía
*/

const products1 = [ 
    { name: "rice", price: 10 }, 
    { name: "panela", price: 5 }, 
    { name: "pasta", price: 16 }, 
    { name: "eggs", price: 8 },
  ];
  
  const products2 = [ 
    { name: "rice", price: 10 }, 
    { name: "panela", price: 20 }, 
    { name: "pasta", price: 16 }, 
    { name: "eggs", price: 37 },
  ];
  
  function cheapProducts (arreglo){
      let nuevoArreglo = []
      for(let i = 0; i < arreglo.length; i++){
          if(arreglo[i].price < 10){
              nuevoArreglo.push(arreglo[i].name)
          }
      }
      return nuevoArreglo
  }
  
  console.log(cheapProducts(products1)); // [‘panela’, ‘eggs’] 
=======
/* Crea una funcion 'cheapProducts' que recibe una matriz de productos como argumento.
Cada producto tiene un `nombre` y un `precio`. Devuelve una matriz con el nombre de los productos cuyo valor es menor a 10.
Si no hay productos que cumplan con esto condición y luego devuelve una matriz vacía
*/

const products1 = [ 
    { name: "rice", price: 10 }, 
    { name: "panela", price: 5 }, 
    { name: "pasta", price: 16 }, 
    { name: "eggs", price: 8 },
  ];
  
  const products2 = [ 
    { name: "rice", price: 10 }, 
    { name: "panela", price: 20 }, 
    { name: "pasta", price: 16 }, 
    { name: "eggs", price: 37 },
  ];
  
  function cheapProducts (arreglo){
      let nuevoArreglo = []
      for(let i = 0; i < arreglo.length; i++){
          if(arreglo[i].price < 10){
              nuevoArreglo.push(arreglo[i].name)
          }
      }
      return nuevoArreglo
  }
  
  console.log(cheapProducts(products1)); // [‘panela’, ‘eggs’] 
>>>>>>> 8f848791ec44d81ecc3f25fcbdc96b9694a94203
  console.log(cheapProducts(products2)); // [] */