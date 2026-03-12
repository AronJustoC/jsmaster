console.log("Día 06 - ES Modules (Ejercicios 4-6)");

// ============================================
// PARTE 2: ES Modules (import/export)
// ============================================

// --- Ejercicio 4: named exports ---
// CREAR archivo con múltiples export const funciones
// Importar con: import { func1, func2 } from './archivo.js'
// Return: { resultado: number }

// Importar desde mathES.js
import { suma, resta } from "./mathES.mjs";
console.log("Ejercicio 4:", suma(5, 3));
console.log("Ejercicio 4", resta(5, 3));
// --- Ejercicio 5: default export ---
// CREAR archivo con export default clase o función
// Importar con: import miExporte from './archivo.js'
// Return: { instancia: object }

import Config from "./configES.mjs";
const config = new Config();
console.log(config);

// --- Ejercicio 6: import con alias ---
// CREAR archivo con exportaciones
// Importar con rename: import { original as alias }
// Return: { valorConAlias: any }
import { funcionLarga as fl } from "./utilsES.mjs";
console.log(fl());
