/*

VARIABLES

# Para definir
let <nombre-de-variable> = <valor>

*/


let unString = 'asdasd'
// var unString = 'asdasd'
// let unString = "asdasd"

let unNumeroEntero = 1
let unNumeroDecimal = 123.123
let unBooleano = false

let unaFecha = new Date()

// Las listas se representan con corchetes [] 
// dividiendo los elementos con comas
let unArregloConNumeros = [10, 9, 8, 7, 6, 5.0, 4.123123  ]
let unArregloConStrings = [ 'a' , 'asd' , 'asdasd' , 'asdasd' ]


// Los objetos se represtan con llaves {}
// <nombre de campo>: <valor>
let unObjeto = { 
  nombre: 'Ralex',
  tarea: 'profear',
  hobbies: ['bici', 'juegos', 'fiesta'],
  clases: {
    intro: {
      conceptos: ['asdasd', 'asdasd', ]
    },
    variables: {
      def: 'asd'
    }
  }
}

console.log('unString', unString)
console.log('unNumeroEntero', unNumeroEntero)
console.log('unNumeroDecimal', unNumeroDecimal)
console.log('unBooleano', unBooleano)
console.log('unaFecha', unaFecha)
console.log('unArregloConNumeros', unArregloConNumeros)
console.log('unArregloConStrings', unArregloConStrings)
console.log('unObjeto', unObjeto)

unString = 'otro valor'
console.log('unString 2', unString)

unString = unString + ' ohohoho'
console.log('unString 3', unString)


unNumeroEntero = unNumeroEntero +10
// arriba equivalente a esto de abajo
unNumeroEntero += 10
unNumeroEntero++ // incrementa en 1
console.log('unNumeroEntero', unNumeroEntero)


console.log('la suma de num + str: ', unNumeroEntero + 'abc')
// Siuempre que se sume (+) cualquier cosa con un String,
// Se convierte a string

// ARREGLOS

console.log('valor en la posicion 1', unArregloConNumeros[0])
console.log('valor en la posicion 2', unArregloConNumeros[1])
console.log('valor en la posicion 3', unArregloConNumeros[2])
console.log('valor en la posicion 4', unArregloConNumeros[3])
console.log('valor en la posicion 5', unArregloConNumeros[4])

// OBJETOS

console.log('unObjeto.nombre', unObjeto.nombre)
console.log('unObjeto.tarea', unObjeto.tarea)
console.log('unObjeto.hobbies', unObjeto.hobbies)
console.log('unObjeto.hobbies[1]', unObjeto.hobbies[1])
console.log('unObjeto.clases', unObjeto.clases)
console.log('unObjeto.clases.intro', unObjeto.clases.intro)
console.log('unObjeto.clases.intro.conceptos', unObjeto.clases.intro.conceptos)