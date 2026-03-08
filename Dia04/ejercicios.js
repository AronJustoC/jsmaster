console.log("Día 04 - Promises, Async/Await y Asincronía");

// --- Ejercicio 1: Crear una Promise básica ---
function esperarYRetornar(valor, tiempo) {
  // CREA una Promise que resuelve después de 'tiempo' ms
  // Return: Promise que hace resolve con el valor
}

// --- Ejercicio 2: then/catch ---
function dividir(a, b) {
  // CREA una Promise que:
  // - Resuelve con el resultado si b no es 0
  // - Rechaza con Error("No se puede dividir por 0") si b es 0
}

// --- Ejercicio 3: async/await básico ---
async function obtenerUsuario() {
  // SIMULA llamada a API (usa esperarYRetornar)
  // Return: "Usuario: Juan" después de 500ms
}

// --- Ejercicio 4: try/catch con async/await ---
async function dividirSegura(a, b) {
  // USA async/await y try/catch
  // Return: resultado de dividir o mensaje de error
}

// --- Ejercicio 5: Promise.all ---
async function obtenerDatosMultiples() {
  // USA Promise.all para obtener 3 valores en paralelo
  // Cada uno usa esperarYRetornar con diferente tiempo
  // Return: array con los 3 resultados
}

// --- Ejercicio 6: Encadenar Promises ---
function chainPromises() {
  // CREA cadena: Promise1 -> .then -> Promise2 -> .then -> resultado
  // 1. esperarYRetornar("inicio", 100)
  // 2. concatenar " - proceso"
  // 3. concatenar " - fin"
  // Return: Promise que resuelve "inicio - proceso - fin"
}

// --- Ejercicio 7: Promise con reject ---
function verificarEdad(edad) {
  // CREA Promise que:
  // - Resuelve "Mayor de edad" si edad >= 18
  // - Rechaza "Menor de edad" si edad < 18
}

// --- Ejercicio 8: async con múltiples awaits ---
async function procesoCompleto() {
  // USA múltiples await en secuencia
  // 1. esperarYRetornar("paso1", 200)
  // 2. esperarYRetornar("paso2", 200)
  // Return: "paso1 - paso2"
}

// TESTS
console.log("\n--- TESTS ---");

// Test 1
esperarYRetornar("test", 100).then(v => console.log("ejercicio1:", v));

// Test 2
dividir(10, 2)
  .then(r => console.log("ejercicio2a:", r))
  .catch(e => console.log("ejercicio2a error:", e));

dividir(10, 0)
  .then(r => console.log("ejercicio2b:", r))
  .catch(e => console.log("ejercicio2b:", e.message));

// Test 3
obtenerUsuario().then(r => console.log("ejercicio3:", r));

// Test 4
dividirSegura(10, 2).then(r => console.log("ejercicio4a:", r));
dividirSegura(10, 0).then(r => console.log("ejercicio4b:", r));

// Test 5
obtenerDatosMultiples().then(r => console.log("ejercicio5:", r));

// Test 6
chainPromises().then(r => console.log("ejercicio6:", r));

// Test 7
verificarEdad(20)
  .then(r => console.log("ejercicio7a:", r))
  .catch(e => console.log("ejercicio7a:", e));

verificarEdad(15)
  .then(r => console.log("ejercicio7b:", r))
  .catch(e => console.log("ejercicio7b:", e));

// Test 8
procesoCompleto().then(r => console.log("ejercicio8:", r));
