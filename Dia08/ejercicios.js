import { version } from "node:os";

console.log("Día 08 - npm install, lockfile y node_modules");
// DADO un objeto estilo package.json
// RETORNAR: { deps: string[] } con nombres unicos y ordenados alfabeticamente
function listarDependenciasTotales(pkg) {
  // TODO
  const deps = Object.keys(pkg.dependencies || {});
  const devDeps = Object.keys(pkg.devDependencies || {});
  const todas = [...new Set([...deps, ...devDeps])].sort();
  return { deps: todas };
}

// --- Ejercicio 2: detectar dependencia en runtime ---
// RETORNAR: { esRuntime: boolean }
function esDependenciaRuntime(pkg, depName) {
  // TODO
  const dependencias = pkg.dependencies ?? {};

  return {
    esRuntime: Object.prototype.hasOwnProperty.call(dependencias, depName),
  };
}

// ============================================
// PARTE 2: npm install / npm ci (conceptos)
// ============================================

// --- Ejercicio 3: interpretar comando de instalacion ---
// Args ejemplo:
// - ["install"]
// - ["install", "lodash"]
// - ["install", "-D", "prettier"]
// - ["ci"]
// RETORNAR: { mode: "install" | "ci", depName: string | null, isDev: boolean }
function interpretarComandoNpm(args) {
  // TODO
  const modo = args[0] === "ci" ? "ci" : "install";
  const isDev = args.includes("-D") || args.includes("--save-dev");

  let depName = null;
  if (args[1] && !args[1].startsWith("-")) {
    depName = args[1];
  } else if (args[2] && !args[2].startsWith("-")) {
    depName = args[2];
  }
  return {
    mode: modo,
    depName: depName,
    isDev: isDev,
  };
}

// ============================================
// PARTE 3: package-lock.json (lectura basica)
// ============================================

// --- Ejercicio 4: extraer paquetes desde lock ---
// DADO un objeto estilo package-lock.json (simplificado)
// lock.packages es un objeto donde las claves son rutas.
// Cada entrada puede tener: { name, version, dev }
// RETORNAR: { packages: { name: string, version: string, dev: boolean }[] }
// Ordenar por name alfabeticamente.
function listarPackagesDesdeLock(lock) {
  // TODO
  const packages = Object.entries(lock.packages || {})
    .filter(([path]) => path !== "")
    .map(([path, data]) => ({
      name: data.name,
      version: data.version,
      dev: data.dev || false,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return { packages };
}

// ============================================
// PARTE 4: node_modules y resolucion (simulada)
// ============================================

// --- Ejercicio 5: resolver bin local ---
// En npm scripts, `node_modules/.bin` queda en el PATH.
// Simular resolucion:
// DADO un proyecto con estructura:
// { root: "/repo", bin: { prettier: "/repo/node_modules/.bin/prettier" } }
// RETORNAR: { path: string | null }
function resolverBinLocal(proyecto, binName) {
  // TODO
  const path = proyecto.bin?.[binName] || null;
  return { path };
}

// ============================================
// TESTS
// ============================================

console.log("\n--- TESTS ---");

const pkgEjemplo = {
  name: "jsenior-dia08",
  version: "1.0.0",
  private: true,
  scripts: {
    start: "node index.js",
    format: "prettier . --write",
  },
  dependencies: {
    lodash: "^4.17.21",
    axios: "^1.7.0",
  },
  devDependencies: {
    prettier: "^3.3.0",
    eslint: "^9.0.0",
  },
};

const lockEjemplo = {
  name: "jsenior-dia08",
  lockfileVersion: 3,
  packages: {
    "": { name: "jsenior-dia08", version: "1.0.0" },
    "node_modules/lodash": { name: "lodash", version: "4.17.21", dev: false },
    "node_modules/prettier": { name: "prettier", version: "3.3.0", dev: true },
  },
};

const proyectoEjemplo = {
  root: "/repo",
  bin: {
    prettier: "/repo/node_modules/.bin/prettier",
  },
};

// Test 1
try {
  const r1 = listarDependenciasTotales(pkgEjemplo);
  const ok =
    r1 &&
    Array.isArray(r1.deps) &&
    r1.deps.join(",") === "axios,eslint,lodash,prettier";
  console.log("ejercicio1:", ok ? "ok" : "falló", r1);
} catch (e) {
  console.log("ejercicio1 error:", e.message);
}

// Test 2
try {
  const r2a = esDependenciaRuntime(pkgEjemplo, "lodash");
  const r2b = esDependenciaRuntime(pkgEjemplo, "prettier");
  const ok = r2a && r2a.esRuntime === true && r2b && r2b.esRuntime === false;
  console.log("ejercicio2:", ok ? "ok" : "falló", r2a, r2b);
} catch (e) {
  console.log("ejercicio2 error:", e.message);
}

// Test 3
try {
  const r3a = interpretarComandoNpm(["install"]);
  const r3b = interpretarComandoNpm(["install", "lodash"]);
  const r3c = interpretarComandoNpm(["install", "-D", "prettier"]);
  const r3d = interpretarComandoNpm(["ci"]);
  const ok =
    r3a &&
    r3a.mode === "install" &&
    r3a.depName === null &&
    r3a.isDev === false &&
    r3b &&
    r3b.depName === "lodash" &&
    r3b.isDev === false &&
    r3c &&
    r3c.depName === "prettier" &&
    r3c.isDev === true &&
    r3d &&
    r3d.mode === "ci";
  console.log("ejercicio3:", ok ? "ok" : "falló", r3a, r3b, r3c, r3d);
} catch (e) {
  console.log("ejercicio3 error:", e.message);
}

// Test 4
try {
  const r4 = listarPackagesDesdeLock(lockEjemplo);
  const ok =
    r4 &&
    Array.isArray(r4.packages) &&
    r4.packages.length === 2 &&
    r4.packages[0].name === "lodash" &&
    r4.packages[1].dev === true;
  console.log("ejercicio4:", ok ? "ok" : "falló", r4);
} catch (e) {
  console.log("ejercicio4 error:", e.message);
}

// Test 5
try {
  const r5a = resolverBinLocal(proyectoEjemplo, "prettier");
  const r5b = resolverBinLocal(proyectoEjemplo, "eslint");
  const ok =
    r5a &&
    r5a.path === "/repo/node_modules/.bin/prettier" &&
    r5b &&
    r5b.path === null;
  console.log("ejercicio5:", ok ? "ok" : "falló", r5a, r5b);
} catch (e) {
  console.log("ejercicio5 error:", e.message);
}
