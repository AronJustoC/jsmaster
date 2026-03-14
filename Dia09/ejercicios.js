console.log("Día 09 - npx, scripts profesionales y bundlers (Vite)");

// ============================================
// PARTE 1: npx (npm package executor)
// ============================================

// --- Ejercicio 1: detectar si es comando local o global ---
// DADO un array de argumentos (como los que recibe un script)
// RETORNAR: { type: "local" | "global" | "builtin", command: string }
// - Si el comando existe en node_modules/.bin -> local
// - Si es un comando nativo de node (node, npm, npx) -> builtin
// - Si no esta en bin locales -> global
function detectarTipoComando(args, binsLocales) {
  // ENUNCIADO: Determinar si un comando se ejecutaria de forma local, global o es builtin
  // Return: { type: "local" | "global" | "builtin", command: string }
}

// --- Ejercicio 2: resolver comando con npx ---
// DADO un comando y una lista de bins locales
// RETORNAR: { resolved: string | null, type: "local" | "global" }
// - Si existe en binsLocales, devolver la ruta
// - Si no, devolver null (se resolve via global)
function resolverComandoNpx(comando, binsLocales) {
  // ENUNCIADO: Simular la resolucion de npx
  // Return: { resolved: string | null, type: "local" | "global" }
}

// ============================================
// PARTE 2: Scripts profesionales
// ============================================

// --- Ejercicio 3: clasificar scripts ---
// DADO un objeto de scripts
// RETORNAR: { dev: string[], start: string[], test: string[], build: string[], other: string[] }
// Clasificar por prefijo: "dev:", "start:", "test:", "build:", resto va a "other"
function clasificarScripts(scripts) {
  // ENUNCIADO: Clasificar scripts npm por categoria
  // Return: { dev: [], start: [], test: [], build: [], other: [] }
}

// --- Ejercicio 4: validar script ---
// DADO un string de script
// RETORNAR: { valido: boolean, errores: string[] }
// Un script es valido si:
// - No usa "rm -rf" sin confirmacion
// - No usa "kill" sin mensaje claro
// - No tiene comandos vacios
function validarScript(script) {
  // ENUNCIADO: Validar seguridad de un script npm
  // Return: { valido: boolean, errores: string[] }
}

// ============================================
// PARTE 3: Conceptos de bundlers
// ============================================

// --- Ejercicio 5: analizar configuracion Vite ---
// DADO un objeto config de Vite (simplificado)
// RETORNAR: { entry: string, output: string, hasPlugins: boolean, isProduction: boolean }
// - entry: el archivo de entrada (default: "index.html" o "src/main.js")
// - output: directorio de salida (default: "dist")
// - hasPlugins: si tiene plugins definidos
// - isProduction: si mode es "production"
function analizarConfigVite(config) {
  // ENUNCIADO: Analizar configuracion minima de Vite
  // Return: { entry, output, hasPlugins, isProduction }
}

// ============================================
// TESTS
// ============================================

console.log("\n--- TESTS ---");

const binsLocalesEjemplo = ["vite", "eslint", "prettier", "typescript"];
const scriptsEjemplo = {
  dev: "vite",
  build: "vite build",
  preview: "vite preview",
  "test:watch": "vitest --watch",
  "lint:fix": "eslint . --fix",
  start: "node server.js",
  clean: "rm -rf dist",
};

const configViteEjemplo = {
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "src/main.js",
    },
  },
  plugins: ["react()", "tsconfigPaths()"],
  mode: "production",
};

// Test 1
try {
  const r1a = detectarTipoComando(["vite"], binsLocalesEjemplo);
  const r1b = detectarTipoComando(["node"], binsLocalesEjemplo);
  const r1c = detectarTipoComando(["git"], binsLocalesEjemplo);
  console.log("ejercicio1:", 
    r1a.type === "local" && r1b.type === "builtin" && r1c.type === "global" 
      ? "ok" : "falló", r1a, r1b, r1c);
} catch (e) {
  console.log("ejercicio1 error:", e.message);
}

// Test 2
try {
  const r2a = resolverComandoNpx("vite", binsLocalesEjemplo);
  const r2b = resolverComandoNpx("git", binsLocalesEjemplo);
  console.log("ejercicio2:",
    r2a.resolved && r2b.resolved === null ? "ok" : "falló", r2a, r2b);
} catch (e) {
  console.log("ejercicio2 error:", e.message);
}

// Test 3
try {
  const r3 = clasificarScripts(scriptsEjemplo);
  const ok = r3.dev.includes("vite") && 
             r3.start.includes("node server.js") &&
             r3.build.includes("vite build") &&
             r3.test.includes("vitest --watch");
  console.log("ejercicio3:", ok ? "ok" : "falló", r3);
} catch (e) {
  console.log("ejercicio3 error:", e.message);
}

// Test 4
try {
  const r4a = validarScript("vite build");
  const r4b = validarScript("rm -rf node_modules");
  console.log("ejercicio4:",
    r4a.valido && !r4b.valido ? "ok" : "falló", r4a, r4b);
} catch (e) {
  console.log("ejercicio4 error:", e.message);
}

// Test 5
try {
  const r5 = analizarConfigVite(configViteEjemplo);
  const ok = r5.entry === "src/main.js" &&
             r5.output === "dist" &&
             r5.hasPlugins === true &&
             r5.isProduction === true;
  console.log("ejercicio5:", ok ? "ok" : "falló", r5);
} catch (e) {
  console.log("ejercicio5 error:", e.message);
}
