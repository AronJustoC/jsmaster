console.log("Día 10 - TypeScript: Tipado estático y configuración");

// ============================================
// PARTE 1: Tipos básicos
// ============================================

// --- Ejercicio 1: tipar variables primitives ---
// DADO: variables sin tipo
// RETORNAR: las mismas variables pero con tipos explícitos
// Tipos: string, number, boolean
function tiparPrimitivas(nombre, edad, esActivo) {
  // ENUNCIADO: Agregar tipos TypeScript a las variables
  // Return: objeto con las variables tipadas
}

// --- Ejercicio 2: tipar arrays y objetos ---
// DADO: un array de números y un objeto usuario
// RETORNAR: los mismos con tipos explícitos
function tiparArraysYObjetos(usuarios, numeros) {
  // ENUNCIADO: Definir tipos para array de usuarios y array de números
  // Return: { usuarios: User[], numeros: number[] }
}

// ============================================
// PARTE 2: Tipos personalizados
// ============================================

// --- Ejercicio 3: crear interface ---
// DADO: datos sueltos de un producto
// RETORNAR: una interface Product y un objeto que la cumpla
function crearInterfaceProducto(id, nombre, precio, enStock) {
  // ENUNCIADO: Crear interface Product y retornar producto tipado
  // Return: Product
}

// --- Ejercicio 4: crear type alias ---
// DADO: tipos que se repiten
// RETORNAR: un type alias para coordenadas (x, y) y una función que lo use
function crearTypeAlias() {
  // ENUNCIADO: Crear type Coordinate = { x: number, y: number }
  // Return: función que acepte Coordinate y retorne distancia al origen
}

// --- Ejercicio 5: discriminadores con union types ---
// DADO: diferentes tipos de usuario
// RETORNAR: función que diferencie entre ellos
function manejarTipoUsuario(usuario) {
  // ENUNCIADO: Usar union types para manejar "admin" | "user" | "guest"
  // Return: string con el nivel de acceso
}

// ============================================
// PARTE 3: Genéricos
// ============================================

// --- Ejercicio 6: función genérica ---
// DADO: una función que retorna el primer elemento
// RETORNAR: la misma pero con genéricos
function obtenerPrimero(arr) {
  // ENUNCIADO: Usar <T> para tipar el retorno según el input
  // Return: T (el tipo del primer elemento)
}

// --- Ejercicio 7: interface genérica ---
// DADO: respuesta de API genérica
// RETORNAR: una interface ApiResponse<T> que pueda usar
function crearApiResponse() {
  // ENUNCIADO: Crear interface genérica ApiResponse<T>
  // Return: ejemplo de uso con ApiResponse<User>
}

// ============================================
// PARTE 4: tsconfig y configuración
// ============================================

// --- Ejercicio 8: analizar tsconfig ---
// DADO: un objeto de configuración de TypeScript
// RETORNAR: { strict: boolean, target: string, esModuleInterop: boolean }
// - strict: si strict: true
// - target: valor de target
// - esModuleInterop: si esModuleInterop: true
function analizarTsconfig(config) {
  // ENUNCIADO: Analizar opciones comunes de tsconfig.json
  // Return: { strict, target, esModuleInterop }
}

// --- Ejercicio 9: validar tipos en compilación ---
// DADO: un valor y un tipo esperado
// RETORNAR: true si el valor cumple el tipo, false si no
function validarTipo(valor, tipoEsperado) {
  // ENUNCIADO: Simular validación de tipos en tiempo de compilación
  // Return: boolean
}

// ============================================
// TESTS
// ============================================

console.log("\n--- TESTS ---");

// Test 1
try {
  const r1 = tiparPrimitivas("Juan", 25, true);
  console.log("ejercicio1:", typeof r1.nombre === "string" ? "ok" : "falló", r1);
} catch (e) {
  console.log("ejercicio1 error:", e.message);
}

// Test 2
try {
  const r2 = tiparArraysYObjetos([{ nombre: "Ana" }], [1, 2, 3]);
  console.log("ejercicio2:", Array.isArray(r2.numeros) ? "ok" : "falló", r2);
} catch (e) {
  console.log("ejercicio2 error:", e.message);
}

// Test 3
try {
  const r3 = crearInterfaceProducto(1, "Laptop", 999, true);
  console.log("ejercicio3:", r3.id === 1 ? "ok" : "falló", r3);
} catch (e) {
  console.log("ejercicio3 error:", e.message);
}

// Test 4
try {
  const r4 = crearTypeAlias();
  console.log("ejercicio4:", typeof r4 === "number" ? "ok" : "falló", r4);
} catch (e) {
  console.log("ejercicio4 error:", e.message);
}

// Test 5
try {
  const r5a = manejarTipoUsuario({ tipo: "admin", nivel: 3 });
  const r5b = manejarTipoUsuario({ tipo: "guest" });
  console.log("ejercicio5:", r5a && r5b ? "ok" : "falló", r5a, r5b);
} catch (e) {
  console.log("ejercicio5 error:", e.message);
}

// Test 6
try {
  const r6 = obtenerPrimero([1, 2, 3]);
  console.log("ejercicio6:", r6 === 1 ? "ok" : "falló", r6);
} catch (e) {
  console.log("ejercicio6 error:", e.message);
}

// Test 7
try {
  const r7 = crearApiResponse();
  console.log("ejercicio7:", r7.data ? "ok" : "falló", r7);
} catch (e) {
  console.log("ejercicio7 error:", e.message);
}

// Test 8
try {
  const config = { strict: true, target: "ES2020", esModuleInterop: true };
  const r8 = analizarTsconfig(config);
  console.log("ejercicio8:", r8.strict && r8.target === "ES2020" ? "ok" : "falló", r8);
} catch (e) {
  console.log("ejercicio8 error:", e.message);
}

// Test 9
try {
  const r9a = validarTipo("hola", "string");
  const r9b = validarTipo(123, "number");
  console.log("ejercicio9:", r9a && r9b ? "ok" : "falló", r9a, r9b);
} catch (e) {
  console.log("ejercicio9 error:", e.message);
}
