# Día 06 - Módulos y Node.js Basics

## Objetivo

Dominar el sistema de módulos de JavaScript (CommonJS y ES Modules), las variables globales de Node.js, y las APIs básicas del núcleo: path y fs.

## Temas del Día

- CommonJS (require/exports)
- ES Modules (import/export)
- __dirname y __filename
- process.argv y process.env
- Módulo path
- Módulo fs (File System)

## Ejercicios (por resolver)

- [x] Ejercicio 1 - `module.exports` básico
- [x] Ejercicio 2 - exports como objeto
- [x] Ejercicio 3 - require con caching
- [x] Ejercicio 4 - named exports
- [x] Ejercicio 5 - default export
- [x] Ejercicio 6 - import con alias
- [x] Ejercicio 7 - __dirname y __filename
- [x] Ejercicio 8 - process.argv
- [x] Ejercicio 9 - process.env
- [x] Ejercicio 10 - path.join y path.resolve
- [x] Ejercicio 11 - fs.readFileSync
- [x] Ejercicio 12 - fs.writeFileSync
- [x] Ejercicio 13 - fs.readFile (callback)
- [x] Ejercicio 14 - fs.promises
- [x] Ejercicio 15 - fs.existsSync

## Conceptos Clave

### CommonJS
```javascript
const modulo = require('./modulo');
const { func1 } = require('./modulo');
```

### ES Modules
```javascript
import { func1 } from './modulo.js';
import Default from './modulo.js';
```

### Variables globales
```javascript
__dirname    // ruta del directorio actual
__filename   // ruta del archivo actual
process.argv // argumentos de CLI
process.env  // variables de entorno
```

### Path
```javascript
path.join('/a', 'b')      // '/a/b'
path.resolve('file.txt')  // '/full/path/file.txt'
```

### File System
```javascript
fs.readFileSync('file.txt', 'utf8')
fs.writeFileSync('file.txt', 'contenido')
fs.promises.readFile('file.txt')
```

## Cómo Ejecutar

```bash
cd Dia06 && node ejercicios.js

# ES Modules (Ejercicios 4-6)
node ejerciciosESM.mjs
```

## Criterio de Completado

- [x] Todas las funciones implementadas
- [x] Tests pasando
- [x] Notas leídas y entendidas

## Entregables

- [x] `ejercicios.js`
- [x] `notas.md`
- [x] `README.md`

## Siguiente Paso

Próximo día: npm, package.json, dependencias, scripts, y introducción a bundlers.
