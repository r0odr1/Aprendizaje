/* Escribe una función llamada productosBaratos que reciba un arreglo de objetos (que representan productos)
y retorne un nuevo arreglo con los nombres de los productos cuyo precio esté entre 5 y 10:
*/
let prods = [
    { nombre: "Arroz", precio: 5 },
    { nombre: "Pan", precio: 3 },
    { nombre: "Tomate", precio: 8 },
    { nombre: "Leche", precio: 15 }
  ];

  function productosBaratos (arr){
    let nuevoArreglo = []
    for( let i = 0; i < arr.length; i++){
        if(arr[i].precio >= 5 && arr[i].precio <= 10){
            nuevoArreglo.push(arr[i].nombre)
        }
    }
    return nuevoArreglo
  }
  console.log(productosBaratos(prods));