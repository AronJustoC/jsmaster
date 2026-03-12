# Notas - Día 06 (Módulos y Node.js Basics)

## Experiencia del Día

Este día introduce los fundamentos de Node.js: el sistema de módulos (CommonJS y ES Modules), variables globales, y las APIs más usadas del núcleo de Node.

---

## 1) CommonJS (require/exports)

### Sistema de módulos nativo de Node.js

```javascript
// Exportar
module.exports = {
  suma: (a, b) => a + b,
  resta: (a, b) => a - b
};

// O también
exports.suma = (a, b) => a + b;
exports.resta = (a, b) => a - b;
```

```javascript
// Importar
const matematica = require('./matematica');
console.log(matematica.suma(2, 3)); // 5
```

### Importar solo lo necesario

```javascript
const { suma } = require('./matematica');
console.log(suma(2, 3)); // 5
```

### Require cachea los módulos

La primera vez que requerís un módulo, Node lo cachea. Las siguientes veces retorna el mismo objeto:

```javascript
const a = require('./miModulo');
const b = require('./miModulo');
console.log(a === b); // true
```

---

## 2) ES Modules (import/export)

### En Node.js podés usar ES Modules de dos formas

1) Usando archivos `.mjs` (siempre se interpretan como ESM)
2) Usando `package.json` con `"type": "module"` (para que `.js` sea ESM)

En este dia se usan archivos `.mjs` para los ejercicios ESM.

### Named exports

```javascript
// archivo: utils.mjs
export const suma = (a, b) => a + b;
export const resta = (a, b) => a - b;
```

```javascript
// importar
import { suma, resta } from './utils.mjs';
```

### Default export

```javascript
// archivo: config.mjs
export default class Config {
  constructor() {
    this.env = 'development';
  }
}
```

```javascript
import Config from './config.mjs';
const config = new Config();
```

### Alias

```javascript
import { suma as add } from './utils.mjs';
console.log(add(2, 3)); // 5
```

### Ejecutar un archivo ESM

```bash
node ejerciciosESM.mjs
```

---

## 3) Node.js Globals

### __dirname

Ruta absoluta del directorio del archivo actual:

```javascript
console.log(__dirname);
// /home/aron/proyecto/src
```

### __filename

Ruta absoluta del archivo actual:

```javascript
console.log(__filename);
// /home/aron/proyecto/src/app.js
```

### process

Objeto global con información del proceso:

```javascript
process.argv        // argumentos de CLI
process.env         // variables de entorno
process.cwd()      // directorio de trabajo actual
process.exit()     // terminar proceso
```

### Argumentos de línea de comando

```bash
node app.js arg1 arg2
```

```javascript
console.log(process.argv);
// ['/usr/bin/node', '/path/to/app.js', 'arg1', 'arg2']

// obtener solo los argumentos del usuario
const args = process.argv.slice(2);
console.log(args); // ['arg1', 'arg2']
```

### Variables de entorno

```bash
NODE_ENV=production node app.js
```

```javascript
console.log(process.env.NODE_ENV); // 'production'
```

---

## 4) Módulo Path

```javascript
const path = require('path');
```

### path.join()

Concatena rutas correctamente (maneja slashes):

```javascript
path.join('/foo', 'bar', 'baz');
// '/foo/bar/baz'
```

### path.resolve()

Convierte a ruta absoluta:

```javascript
path.resolve('./app.js');
// '/home/aron/proyecto/app.js'
```

### path.basename(), dirname(), extname()

```javascript
path.basename('/foo/bar.txt');     // 'bar.txt'
path.dirname('/foo/bar.txt');      // '/foo'
path.extname('/foo/bar.txt');     // '.txt'
```

---

## 5) Módulo File System (fs)

### fs.readFileSync - Síncrono

```javascript
const fs = require('fs');

const contenido = fs.readFileSync('archivo.txt', 'utf8');
console.log(contenido);
```

### fs.writeFileSync - Síncrono

```javascript
fs.writeFileSync('nuevo.txt', 'Hola mundo');
```

### fs.readFile - Async con callbacks

```javascript
fs.readFile('archivo.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
```

### fs.promises - Async/Await

```javascript
const fs = require('fs').promises;

const contenido = await fs.readFile('archivo.txt', 'utf8');
await fs.writeFile('nuevo.txt', 'Hola mundo');
```

### Verificar existencia

```javascript
fs.existsSync('archivo.txt'); // true o false
```

### Otras funciones útiles

```javascript
fs.mkdirSync('carpeta');           // crear directorio
fs.rmdirSync('carpeta');           // eliminar directorio
fs.unlinkSync('archivo.txt');      // eliminar archivo
fs.readdirSync('carpeta');         // listar directorio
```

---

## 6) Resumen: Cuándo Usar Qué

| Necesidad | Herramienta |
|-----------|-------------|
| Módulo simple en Node | CommonJS (`require`) |
| Módulo moderno (frontend) | ES Modules (`import`) |
| Rutas de archivos | `path.join()`, `path.resolve()` |
| Leer archivo (bloquea) | `fs.readFileSync()` |
| Leer archivo (async) | `fs.promises.readFile()` |
| Escribir archivo | `fs.writeFileSync()` |
| Verificar archivo existe | `fs.existsSync()` |
| Argumentos CLI | `process.argv` |
| Variables de entorno | `process.env` |

---

## Siguiente Paso

- npm y package.json
- Dependencias locales y globales
- Scripts de npm
- Introducción a bundlers (Vite, Webpack)
