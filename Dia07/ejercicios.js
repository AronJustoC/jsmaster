import { type, version } from "node:os";

console.log("Día 07 - NPM, package.json y Scripts");

// ============================================
// PARTE 1: package.json (estructura)
// ============================================

// --- Ejercicio 1: leer metadatos basicos ---
// DADO un objeto con formato package.json
// RETORNAR: { name: string, version: string, private: boolean }
function obtenerMetadatosPackage(pkg) {
  return { name: pkg.name, version: pkg.version, private: pkg.private };
}

// --- Ejercicio 2: detectar type (ESM vs CommonJS) ---
// pkg.type puede ser "module" o "commonjs".
// Si no existe, asumir "commonjs".
// RETORNAR: { type: "module" | "commonjs" }
function obtenerTipoModulo(pkg) {
  // TODO
  return { type: pkg.type || "commonjs" };
}

// ============================================
// PARTE 2: scripts
// ============================================

// --- Ejercicio 3: listar scripts ---
// RETORNAR: { scripts: string[] } (nombres de scripts, ordenados alfabeticamente)
function listarNombresScripts(pkg) {
  return { scripts: pkg.scripts ? Object.keys(pkg.scripts).sort() : [] };
}
// --- Ejercicio 4: existe script ---
// RETORNAR: { existe: boolean }
function tieneScript(pkg, scriptname) {
  // todo
  const scripts = pkg.scripts ?? {};
  return {
    existe: Object.prototype.hasOwnProperty.call(scripts, scriptname),
  };
}

// --- Ejercicio 5: agregar script sin mutar ---
// NO mutar el objeto original.
// RETORNAR: { pkgActualizado: object }
function agregarScriptInmutable(pkg, scriptName, command) {
  // TODO
  const scripsViejos = pkg.scripts ?? {};
  const pkgActualizado = {
    ...pkg,
    scripts: {
      ...scripsViejos,
      [scriptName]: command,
    },
  };

  return { pkgActualizado };
}

// ============================================
// PARTE 3: npm run (argumentos)
// ============================================

// --- Ejercicio 6: parsear args estilo npm run ---
// Simulacion: node ejercicios.js start -- --port=3000 --verbose
// process.argv.slice(2) seria: ["start", "--", "--port=3000", "--verbose"]
// RETORNAR: { scriptName: string, scriptArgs: string[] }
function parsearNpmRunArgs(args) {
  // TODO
  const scriptName = args[0];
  const separadorIndex = args.indexOf("--");
  const scriptArgs =
    separadorIndex === -1 ? [] : args.slice(separadorIndex + 1);
  return { scriptName, scriptArgs };
}

// ============================================
// PARTE 4: SemVer (rango basico)
// ============================================

// --- Ejercicio 7: validar rango semver basico ---
// Aceptar estos formatos (basico):
// - "1.2.3"
// - "^1.2.3"
// - "~1.2.3"
// - ">=1.2.3"
// - ">1.2.3"
// - "<=1.2.3"
// - "<1.2.3"
// RETORNAR: { valido: boolean }
function esRangoSemverBasicoValido(range) {
  // TODO
  const re = /^(?:\^|~|>=|>|<=|<)?\d+\.\d+\.\d+$/;
  return { valido: re.test(range) };
}

// ============================================
// TESTS
// ============================================

console.log("\n--- TESTS ---");

const pkgEjemplo = {
  name: "jsenior-dia07",
  version: "1.0.0",
  private: true,
  type: "commonjs",
  scripts: {
    start: "node index.js",
    test: "node tests.js",
  },
  dependencies: {
    lodash: "^4.17.21",
  },
  devDependencies: {
    prettier: "^3.3.0",
  },
};

// Test 1
try {
  const r1 = obtenerMetadatosPackage(pkgEjemplo);
  const ok =
    r1 &&
    r1.name === "jsenior-dia07" &&
    r1.version === "1.0.0" &&
    r1.private === true;
  console.log("ejercicio1:", ok ? "ok" : "falló", r1);
} catch (e) {
  console.log("ejercicio1 error:", e.message);
}

// Test 2
try {
  const r2a = obtenerTipoModulo(pkgEjemplo);
  const r2b = obtenerTipoModulo({ name: "x" });
  const ok = r2a && r2a.type === "commonjs" && r2b && r2b.type === "commonjs";
  console.log("ejercicio2:", ok ? "ok" : "falló", r2a, r2b);
} catch (e) {
  console.log("ejercicio2 error:", e.message);
}

// Test 3
try {
  const r3 = listarNombresScripts(pkgEjemplo);
  const ok =
    r3 && Array.isArray(r3.scripts) && r3.scripts.join(",") === "start,test";
  console.log("ejercicio3:", ok ? "ok" : "falló", r3);
} catch (e) {
  console.log("ejercicio3 error:", e.message);
}

// Test 4
try {
  const r4a = tieneScript(pkgEjemplo, "start");
  const r4b = tieneScript(pkgEjemplo, "build");
  const ok = r4a && r4a.existe === true && r4b && r4b.existe === false;
  console.log("ejercicio4:", ok ? "ok" : "falló", r4a, r4b);
} catch (e) {
  console.log("ejercicio4 error:", e.message);
}

// Test 5
try {
  const originalScripts = pkgEjemplo.scripts;
  const r5 = agregarScriptInmutable(pkgEjemplo, "lint", "prettier . --check");
  const ok =
    r5 &&
    r5.pkgActualizado &&
    r5.pkgActualizado.scripts &&
    r5.pkgActualizado.scripts.lint === "prettier . --check" &&
    pkgEjemplo.scripts === originalScripts &&
    pkgEjemplo.scripts.lint === undefined;
  console.log("ejercicio5:", ok ? "ok" : "falló");
} catch (e) {
  console.log("ejercicio5 error:", e.message);
}

// Test 6
try {
  const r6 = parsearNpmRunArgs(["start", "--", "--port=3000", "--verbose"]);
  const ok =
    r6 &&
    r6.scriptName === "start" &&
    Array.isArray(r6.scriptArgs) &&
    r6.scriptArgs.join(",") === "--port=3000,--verbose";
  console.log("ejercicio6:", ok ? "ok" : "falló", r6);
} catch (e) {
  console.log("ejercicio6 error:", e.message);
}

// Test 7
try {
  const ok =
    esRangoSemverBasicoValido("1.2.3").valido === true &&
    esRangoSemverBasicoValido("^1.2.3").valido === true &&
    esRangoSemverBasicoValido("~1.2.3").valido === true &&
    esRangoSemverBasicoValido(">=1.2.3").valido === true &&
    esRangoSemverBasicoValido("<=1.2.3").valido === true &&
    esRangoSemverBasicoValido("<1.2.3").valido === true &&
    esRangoSemverBasicoValido("x.y.z").valido === false;
  console.log("ejercicio7:", ok ? "ok" : "falló");
} catch (e) {
  console.log("ejercicio7 error:", e.message);
}
