console.log("Día 06 - Módulos y Node.js Basics");

const fs = require("fs");
const path = require("path");

// ============================================
// PARTE 1: CommonJS (require/exports)
// ============================================

// --- Ejercicio 1: module.exports básico ---
// CREAR un objeto con múltiples exportaciones usando module.exports
// Debes crear un archivo separado y requerirlos aquí
// Ejemplo: funciones de matemática (suma, resta, multiplica, divide)
// Return: require('./matematica')
const math = require("./matematica.js");
const suma = math.suma;
console.log(suma(2, 5));
// --- Ejercicio 2: exports como objeto ---
// CREAR archivo con module.exports = { ... }
// y otro que requiera solo una propiedad
// Return: require('./utils').funcionEspecífica

const { saludar } = require("./utils.js");
console.log(saludar());

// --- Ejercicio 3: require con caching ---
// DEMOSTRAR que require cachea el módulo
// Require el mismo módulo 2 veces y verifica que es el mismo objeto
// Return: { mismaReferencia: boolean }

const utilsA = require("./utils.js");
const utilsB = require("./utils.js");
console.log({ mismaReferencia: utilsA === utilsB });

// ============================================
// PARTE 2: ES Modules (import/export)
// ============================================

// --- Ejercicio 4: named exports ---
// CREAR archivo con múltiples export const funciones
// Require con: import { func1, func2 } from './archivo'
// Return: { resultado: number }

// --- Ejercicio 5: default export ---
// CREAR archivo con export default clase o función
// Require con: import miExporte from './archivo'
// Return: { instancia: object }

// --- Ejercicio 6: import con alias ---
// CREAR archivo con exportaciones
// Importar con rename: import { original as alias }
// Return: { valorConAlias: any }

// ============================================
// PARTE 3: Node.js Globals
// ============================================

// --- Ejercicio 7: __dirname y __filename ---
// USAR estas variables globales de Node.js
// __dirname: ruta absoluta del directorio actual
// __filename: ruta absoluta del archivo actual
// Return: { dirname: string, filename: string }

const r7 = { dirname: __dirname, filename: __filename };
console.log(r7);

// --- Ejercicio 8: process.argv ---
// LEER argumentos de línea de comando
// node app.js arg1 arg2 -> ['node', 'path', 'arg1', 'arg2']
// Return: { args: array }

const r8 = { args: process.argv.slice(2) };
console.log(r8);

// --- Ejercicio 9: process.env ---
// ACCEDER a variables de entorno
// CREAR variable: NODE_ENV=development
// Return: { env: process.env.NODE_ENV }

const r9 = { env: process.env.NODE_ENV };
console.log(r9);

// ============================================
// PARTE 4: Path Module
// ============================================

// --- Ejercicio 10: path.join y path.resolve ---
// USAR el módulo 'path' de Node.js
// path.join: concatenar rutas correctamente
// path.resolve: convertir a ruta absoluta
// Return: { joined: string, resolved: string }

const r10 = {
  joined: path.join("/foo", "bar", "baz"),
  resolved: path.resolve("./test.txt"),
};
console.log(r10);

// ============================================
// PARTE 5: File System (fs)
// ============================================

// --- Ejercicio 11: fs.readFileSync ---
// LEER archivo de forma síncrona
// Crear archivo 'test.txt' con contenido primero
// Return: { contenido: string }

setup();
const r11 = { contenido: fs.readFileSync("test.txt", "utf8") };
console.log(r11);

// --- Ejercicio 12: fs.writeFileSync ---
// ESCRIBIR archivo de forma síncrona
// Escribir en 'output.txt'
// Return: { escrito: boolean }

fs.writeFileSync("output.txt", "Contenido escrito");
const r12 = { escrito: true };
console.log(r12);

// --- Ejercicio 13: fs.readFile (async) ---
// LEER archivo con callback (versión legacy)
// Return: { contenido: string }

fs.readFile("test.txt", "utf8", (err, data) => {
  if (err) {
    console.log({ error: err.message });
    return;
  }

  console.log({ contenido: data });
});

// --- Ejercicio 14: fs.promises ---
// LEER archivo usando fs.promises (async/await)
// Return: { contenido: string }

(async () => {
  try {
    const contenido = await fs.promises.readFile("test.txt", "utf8");
    console.log({ contenido });
  } catch (e) {
    console.log({ error: e.message });
  }
})();

// --- Ejercicio 15: fs.existsSync ---
// VERIFICAR si archivo existe
// Return: { existe: boolean }

const r15 = { existe: fs.existsSync("test.txt") };
console.log(r15);

// ============================================
// UTILIDADES PARA LOS EJERCICIOS
// ============================================

// Crear archivos de prueba si no existen
function setup() {
  if (!fs.existsSync("test.txt")) {
    fs.writeFileSync("test.txt", "Hola mundo desde test.txt");
  }
  if (!fs.existsSync("output.txt")) {
    fs.writeFileSync("output.txt", "");
  }
}

setup();

// ============================================
// TESTS
// ============================================

console.log("\n--- TESTS ---");

// Test 7
try {
  const r7 = (() => {
    return {
      dirname: __dirname,
      filename: __filename,
    };
  })();
  console.log("ejercicio7:", r7.dirname ? "ok" : "falló");
} catch (e) {
  console.log("ejercicio7 error:", e.message);
}

// Test 8
try {
  const r8 = {
    args: process.argv.slice(2),
  };
  console.log("ejercicio8:", r8.args.length >= 0 ? "ok" : "falló");
} catch (e) {
  console.log("ejercicio8 error:", e.message);
}

// Test 9
try {
  const r9 = {
    env: process.env.NODE_ENV || "not set",
  };
  console.log("ejercicio9:", r9.env);
} catch (e) {
  console.log("ejercicio9 error:", e.message);
}

// Test 10
try {
  const r10 = {
    joined: path.join("/foo", "bar", "baz"),
    resolved: path.resolve("./test.txt"),
  };
  console.log("ejercicio10:", r10.joined, "|", r10.resolved);
} catch (e) {
  console.log("ejercicio10 error:", e.message);
}

// Test 11
try {
  const contenido = fs.readFileSync("test.txt", "utf8");
  console.log("ejercicio11:", contenido);
} catch (e) {
  console.log("ejercicio11 error:", e.message);
}

// Test 12
try {
  fs.writeFileSync("output.txt", "Contenido escrito");
  console.log("ejercicio12:", "ok");
} catch (e) {
  console.log("ejercicio12 error:", e.message);
}

// Test 13
try {
  fs.readFile("test.txt", "utf8", (err, data) => {
    console.log("ejercicio13:", data);
  });
} catch (e) {
  console.log("ejercicio13 error:", e.message);
}

// Test 14
async function test14() {
  try {
    const contenido = await fs.promises.readFile("test.txt", "utf8");
    console.log("ejercicio14:", contenido);
  } catch (e) {
    console.log("ejercicio14 error:", e.message);
  }
}
test14();

// Test 15
try {
  const existe = fs.existsSync("test.txt");
  console.log("ejercicio15:", existe);
} catch (e) {
  console.log("ejercicio15 error:", e.message);
}
