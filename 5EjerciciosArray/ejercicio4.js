/*
YouTube tenía un botón Me gusta y No me gusta, que permitía a los usuarios expresar sus opiniones sobre un contenido en particular.
Se configuró de tal manera que no puede gustar y no gustar un video al mismo tiempo.
Hay otras dos reglas interesantes a tener en cuenta sobre la interfaz: Al presionar un botón, que ya está activo,se deshace la presión.
Si presiona el botón Me gusta después de presionar el botón No me gusta, el botón Me gusta sobrescribe el estado anterior de "No me gusta". Lo mismo es cierto para el revés.

Tarea
Cree una función que tome una lista de entradas de botón y devuelva el estado final.

Ejemplos
likeOrDislike([Dislike]) => Dislike
likeOrDislike([Like,Like]) => Nothing
likeOrDislike([Dislike,Like]) => Like
likeOrDislike([Like,Dislike,Dislike]) => Nothing
*/

function likeOrDislike(buttons){
    if(buttons )
    let meGusta = Like
    let noMegusta = Dislike

    if(buttons === meGusta){
        
    }
}

console.log(likeOrDislike([Dislike])) //=> Dislike
console.log(likeOrDislike([Like,Like])) //=> Nothing
console.log(likeOrDislike([Dislike,Like])) //=> Like
console.log(likeOrDislike([Like,Dislike,Dislike])) //=> Nothing