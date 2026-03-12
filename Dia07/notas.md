# Notas - Dia 07 (NPM, package.json y Scripts)

## 1) NPM en 2 minutos

NPM (Node Package Manager) cumple dos roles:

- Registro: donde estan publicados los paquetes
- Herramienta: CLI para instalar dependencias y ejecutar scripts

Archivos clave del ecosistema:

- `package.json`: metadata, scripts, dependencias
- `package-lock.json`: snapshot exacto del arbol de dependencias
- `node_modules/`: donde se instalan los paquetes (no se commitea)

Comandos tipicos:

```bash
# inicializar proyecto
npm init -y

# instalar una dependencia de runtime
npm install lodash

# instalar una dependencia de desarrollo
npm install -D prettier

# remover
npm uninstall lodash
```

---

## 2) package.json (campos importantes)

Ejemplo basico:

```json
{
  "name": "mi-proyecto",
  "version": "1.0.0",
  "private": true,
  "type": "commonjs",
  "scripts": {
    "start": "node index.js",
    "test": "node tests.js"
  },
  "dependencies": {
    "lodash": "^4.17.21"
  },
  "devDependencies": {
    "prettier": "^3.3.0"
  }
}
```

Notas:

- `private: true` evita publicar por accidente
- `type`: define el modo por defecto de `.js`
  - `commonjs` (default si no existe)
  - `module` (ESM)

Sobre `package-lock.json`:

- Fija versiones reales instaladas (transitivas incluidas)
- Hace instalacion repetible en otras maquinas y en CI
- Se commitea junto al proyecto

---

## 3) Scripts (npm run)

Los scripts viven en `scripts` y se ejecutan con:

```bash
npm run <script>
```

Atajos:

- `npm start` es equivalente a `npm run start`
- `npm test` es equivalente a `npm run test`

Pasar argumentos al script:

```bash
npm run start -- --port=3000 --verbose
```

La idea del `--` es: "lo que venga despues lo recibe tu script".

Dato: npm agrega `node_modules/.bin` al PATH durante la ejecucion del script.
Por eso podes correr herramientas (prettier, eslint, vitest, etc.) sin escribir la ruta.

---

## 4) Dependencias vs devDependencies

- `dependencies`: necesarias para ejecutar en produccion
- `devDependencies`: tooling (formatters, linters, test runners, etc.)

---

## 5) SemVer y rangos

SemVer: `MAJOR.MINOR.PATCH` (ej: `1.2.3`)

Rangos comunes:

- `1.2.3`: exacto
- `^1.2.3`: permite updates compatibles (minor/patch) sin cambiar major
- `~1.2.3`: permite patch
- `>=1.2.3`, `<2.0.0`: comparadores

Regla rapida:

- `^` es "no rompas" (no cambia major)
- `~` es "solo parches" (no cambia minor)

---

## Siguiente Paso

- Entender `node_modules` y el lockfile
- Empezar a usar scripts como "automation layer" del proyecto
- Luego: bundlers (Vite/Webpack) y tooling moderno
