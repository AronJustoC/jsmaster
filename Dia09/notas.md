# Notas - Día 09 (npx, scripts profesionales y Vite)

## 1) npx (npm package executor)

`npx` ejecuta paquetes sin instalarlos globalmente.

```
npx create-vite my-app --template react
```

**Como funciona:**

1. Primero busca en `node_modules/.bin` (local)
2. Si no existe, busca en PATH (global)
3. Si no existe, ofrece instalar temporalmente

**Flags utiles:**

- `-y`: confirmar automaticamente
- `--no-install`: no instalar si falta
- `-p <paquete>`: especificar version

---

## 2) Scripts profesionales

### Estructura recomendada

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest",
    "test:watch": "vitest --watch",
    "lint": "eslint src",
    "lint:fix": "eslint src --fix",
    "format": "prettier --write .",
    "typecheck": "tsc --noEmit"
  }
}
```

### Buenos patrones

- Usar prefijo para categorizar: `dev:`, `test:`, `lint:`, `build:`
- Encadenar con `&&` para sequence
- Usar `npm-run-all` o `concurrently` para paralelo
- Siempre tener `start` y `test` disponibles

### Seguridad

Evitar en scripts:
- `rm -rf` sin confirmacion
- `kill` sin mensaje claro
- Credenciales en claro

---

## 3) Bundlers: Vite

Vite = Dev Server + Bundler (Rollup para production).

### Por que Vite?

- **ES Modules nativo** en dev (sin bundling)
- **HMR** instantaneo
- **Rollup** para produccion (bundle optimizado)
- **Plugins** para React, Vue, Svelte, etc.

### Configuracion basica (vite.config.js)

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html'
    }
  },
  mode: 'development' // o 'production'
});
```

### Conceptos clave

- **Entry point**: archivo principal (index.html, src/main.js)
- **Output**: directorio de salida (dist/)
- **Plugins**: extienden funcionalidad (React, Vue, TS)
- **Mode**: development vs production

---

## Siguiente Paso

- Practicar con Vite en un proyecto real
- Explorar otros bundlers (esbuild, webpack)
- Profundizar en configuracion avanzada de Vite
