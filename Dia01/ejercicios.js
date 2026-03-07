// Dia 01 - Ejercicios pendientes

// 1) FizzBuzz
// Enunciado:
// Imprimir los numeros del 1 al 100.
// - Si el numero es multiplo de 3, imprimir "Fizz".
// - Si es multiplo de 5, imprimir "Buzz".
// - Si es multiplo de ambos, imprimir "FizzBuzz".
// - Si no, imprimir el numero.

// TODO: Resolver ejercicio 1
//
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if(i % 5 == 0) {
    console.log("Buzz");
  } else {
  console.log(i);
  }
}


// 2) Numero mayor en un array
// Enunciado:
// Dado un array de numeros, devolver el numero mayor.
// No usar Math.max en la primera solucion.

// TODO: Resolver ejercicio 2
let numeros = [6,3,32,76,56,34]

let mayor = -Infinity;
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > mayor) {
    mayor = numeros[i];
  }
}
console.log("El numero mayor de: ", numeros, " es ", mayor)
console.log(Math.max(...numeros));

// 3) Invertir un string
// Enunciado:
// Dado un texto, devolverlo invertido.
// Ejemplo: "hola" -> "aloh".

// TODO: Resolver ejercicio 3

let original = "hola";
let reverse = [];
for (let i = original.split("").length - 1 ; i >= 0 ; i--) {
  reverse.push(original[i]);
}
console.log(reverse.join(""))

// 4) Numero primo
// Enunciado:
// Dado un numero entero positivo, indicar si es primo o no.
// Un numero primo solo es divisible por 1 y por si mismo.

// TODO: Resolver ejercicio 4
let numero1 = 7;
let j = 2;
let esPrimo = numero1 > 1;
while (j < numero1) {
  if (numero1 % j == 0) {
    esPrimo = false;
    break;
  }
  j++;
}

console.log(esPrimo?"Es primo":"No es primo");

// 5) Contar vocales
// Enunciado:
// Dado un string, contar cuantas vocales tiene (a, e, i, o, u).
// Considerar mayusculas y minusculas.

// TODO: Resolver ejercicio 5
let palabra = "otorinolaringologo";
let contador = 0;
for (let i = 0; i < palabra.split("").length; i++) {
  let vocal = palabra.split("")[i].toLowerCase();
  if (vocal == "a" || vocal == "e" || vocal == "i" || vocal == "o" || vocal == "u") {
    contador++;
  }
}
console.log(contador);
