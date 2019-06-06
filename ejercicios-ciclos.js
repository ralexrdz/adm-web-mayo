/*
    EL FOR REPITA UN BLOQUE DE CODIGO HASTA QUE 
    UNA CONDICION DEJE DE CUMPLIRSE

for (
  <inicializacion de un contador>
    ;
  <condicion de PERMANENCIA>
    ;
  <instruccion al final de bloque de código>
)
*/

// IMPRIMER DEL 0 al 9
// for (let cont = 0; cont < 10; cont++) {
//   console.log(cont)
// }

// IMPRIMER DEL 10 al 1
// for (let cont = 10; cont >= 1; cont--) {
//   console.log(cont)
// }

// IMPRIMER de 3 en 3 del 20 al 100
// 20, 23, 26 ... 
// for (let cont = 19; cont <= 100 ; cont += 3) {
//   console.log(cont) 
// }

// let x = 0
// while (x < 5) {
//   console.log(x)
//   x++
// }
// // SON EQUIVALENTES ESTE FOR (arriba) Y ESTE WHILE (abajo)
// for (let x = 0; x < 5; x++) {
//   console.log(x)
// }

// NUNCAAAA
// while (true) {
//   console.log('hola')
// }

let unArreglo = [3,2,1, 'a', 'b', 'c']

for (let i = 0; i < unArreglo.length; i++) {
  console.log('i', i)
  console.log('unArreglo[i]', unArreglo[i])  
}

let persona = {
  name: 'Raul Rodriguez ',
  hobbies: ['bici', 'fiesta', 'videojuegos', 'clases', 'viajes']
}
let persona2 = {
  name: 'Gabriel Perez ',
  hobbies: ['patinaje', 'yoga', 'comer', 'fiesta', 'cine']
}

function imprimeHobies (persona) {
  let primernombre = damePrimerNombre(persona.name)
  let hobbiesString = ''
  let conjuncion = ', '
  for (let index = 0; index < persona.hobbies.length; index++) {
    console.log('Raul hace ' + persona.hobbies[index])
    if (index === persona.hobbies.length-2 ) {
      conjuncion = ' y '
    }
    if (index === persona.hobbies.length-1 ) {
      conjuncion = ''
    }
    hobbiesString += persona.hobbies[index] + conjuncion 
  }
  return  primernombre + ' hace' + hobbiesString 

}


function damePrimerNombre (nombreCompleto) {
  return nombreCompleto.split(' ')[0]
}

// si el nombre de la persona es más grande que 20 caracteres
// notifica que es muy grande
// Imprime solo el primer nombre y escribe
  // si no tiene hobies
    // escribe 'Raul no tiene hobbies'
  // si tiene solo un hobie
    // escribe 'Raul hace <nombre hobie0>'
    // escribe 'Raul hace <nombre hobie1>'
    // escribe 'Raul hace <nombre hobie2>'
    // escribe 'Raul hace <nombre hobie3>'
  // si toene varios

  
  if (persona.name.length > 20) {
    console.log('el nombre es muy grande')
  } else {
    let nombres = damePrimerNombre(persona.name) // ['Raul', 'Rodriguez']
    let primerNombre = nombres[0]
    if ( ! persona.hobbies || persona.hobbies.length == 0 ) {
      console.log(primerNombre + ' no tiene hobies')
    } else if (persona.hobbies.length == 1) {
      console.log(primerNombre + ' hace ' + persona.hobbies[0])
    } else {
      
      
      let result = imprimeHobies(persona)
      console.log(result)
    
  }
}

console.log(imprimeHobies(persona2))











