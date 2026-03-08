const enunciados = [
  "Ejercicio 1",
  "Ejercicio 2",
  "Ejercicio 3",
  "Ejercicio 4",
  "Ejercicio 5",
  "Ejercicio 6"
];

console.log("Dia 02 - Estructura base");
for (const enunciado of enunciados) {
  console.log(enunciado);
}

function declararSaludo(nombre) {
  return `Hola, ${nombre}!!!`;
}

function sumarArray(numeros) {
  let suma = 0;
  for (const valor of numeros) {
    suma += valor;
  }
  return suma;
}

function filtrarPares(numeros) {
  let newArray = [];
  for (const valor of numeros) {
    if (valor % 2 === 0) {
      newArray.push(valor);
    }
  }
  return newArray;
}

function contarPropiedades(objeto) {
  let contador = 0;
  for (const key in objeto) {
    contador++;
  }
  return contador;
}

function combinarNombres(personas) {
  let response = [];
  for (const persona of personas) {
    response.push(persona.nombre);
  }
  return response.join(", ")
}

function buscarPorId(lista, id) {
  for (const persona of lista) {
    if (persona.id == id) {
      return persona;
    }
  }
}

//console.log(combinarNombres([{nombre: "Ana"}, {nombre: "Beto"}, {nombre: "Cata"}]));
//console.log(buscarPorId([{id: 1, nombre: "Ana"}, {id: 2, nombre: "Beto"}],99));

console.log("\n--- TESTS ---");
console.log("sumarArray([1,2,3,4]):", sumarArray([1, 2, 3, 4]));
console.log("filtrarPares([1,2,3,4]):", filtrarPares([1, 2, 3, 4]));
console.log("contarPropiedades({a:1, b:2}):", contarPropiedades({a: 1, b: 2}));
console.log("combinarNombres([{nombre:'Ana'},{nombre:'Beto'}]):", combinarNombres([{nombre: "Ana"}, {nombre: "Beto"}]));
console.log("buscarPorId([{id:1},{id:2}], 2):", buscarPorId([{id: 1, nombre: "Ana"}, {id: 2, nombre: "Beto"}], 2));
console.log("buscarPorId([{id:1}], 99):", buscarPorId([{id: 1}], 99));


