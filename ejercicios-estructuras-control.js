
let x = 4
let y = 0
let z = 1

// Cuando hay && (AND) encadenados significa que 
// todas las condiciones se deben de cumplir
if (x > 3 && y > 3 && z > 3) {
  console.log('todo son grandes')
}
else {
  console.log('alguno es muy chico')
}

// Cuando hay || (OR) encadenados significa que 
// todas las condiciones se deben de cumplir
if (x > 3 || y > 3 || z > 3) {
  console.log('alguno es grande')
}
else {
  console.log('todos son chicos')
}

// para anidar, se usan parentesis

if (  x < y && (z < 3 || y < 1) ) {
  // true && (true || false)
  // true && true
  // true
  console.log('sucede')
} 

if ( x > 3 && y > 3 && z > 3) {
  console.log('todos son grandes')
} else if (x > 3 && y > 3) {
  console.log('todos grandes menos z')
} else if (y > 3 && z > 3) {
  console.log('todos grandes menos x')
} else if (x > 3 && z > 3) {
  console.log('todos grandes menos y')
} else if (x > 3){
  console.log('x es la única grande')
} else if (y > 3){
  console.log('y es la única grande')
} else if (z > 3){
  console.log('x es la única grande')
} else {
  console.log('ninguna es grande');
}

switch (x) {
  case 1:
  case 2:
    console.log('x vale 1 o 2');
    break;
  case 3:
  case 4:
    console.log('x vale 3 o 4');
    break;
  default:
    break;
}

// arriba y abajo son equivalentes

if (x == 1) {
  console.log('x vale 1');
} else if (x == 2) {
  console.log('x vale 2');
} else if (x == 3) {
  console.log('x vale 3');
} else if (x == 4) {
  console.log('x vale 4');
} else {
  console.log('x vale más de 4');
} 

let persona = {
  name: 'Raul Rodriguez',
  hobbies: ['bici', 'videojuego', 'futbol']
}

// si el nombre de la persona es más grande que 20 caracteres
// notifica que es muy grande

// investigo como cortar palabras en una frase STRING

// Imprime solo el primer nombre y escribe
  // si no tiene hobies
    // escribe 'Raul no tiene hobbies'
  // si tiene solo un hobie
    // escribe 'Raul hace <nombre hobie>
  // si toene varios
    // escribe 'Raul tiene <# hobies> hobies'

    



