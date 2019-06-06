// ES5

function arregloStringsABuenEspaniol (arrstrings) {
  let conjuncion = ', '
  let texto = ''
  for (let index = 0; index < arrstrings.length; index++) {
    if (index === arrstrings.length-2 ) {
      let ultimoElemento = arrstrings[arrstrings.length-1]
      if (ultimoElemento[0] == 'I' || ultimoElemento[0] == 'i') {
        conjuncion = ' e '
      } else {
        conjuncion = ' y '
      }
    } else if (index === arrstrings.length-1 ) {
      conjuncion = ''
    }
    texto += arrstrings[index] + conjuncion 
  }
  return texto
}

function sumaOConcatenacion (arreglo) {

  let todosNum = true

  for (let i = 0; i < arreglo.length; i++) {

    if ( isNaN(arreglo[i]) ) { // si no es numero 
      todosNum = false
    }

  }
  
  if (todosNum) {
    
    let contador = 0
    for (let j = 0; j < arreglo.length; j++) {
    
      contador += arreglo[j]
    
    }
    return contador

  } else {
    
    return arregloStringsABuenEspaniol(arreglo)
  
  }

} 

function multiplica (param1, param2) {

}

let x = 'hey';
let y = 'amigou';

let w = 5;
let z = 4;

console.log(sumaOConcatenacion([1,2,3,4]))
console.log(sumaOConcatenacion(['asd', 'qwe', 'ert', 'ower']))

// tarea ESCRIBIR una FUNCTION que reciba una cadena de texto
// y me regrese la primera letra de cada palabra

// Ej: ''
