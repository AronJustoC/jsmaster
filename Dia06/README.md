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

- [ ] Ejercicio 1 - `module.exports` básico
- [ ] Ejercicio 2 - exports como objeto
- [ ] Ejercicio 3 - require con caching
- [ ] Ejercicio 4 - named exports
- [ ] Ejercicio 5 - default export
- [ ] Ejercicio 6 - import con alias
- [ ] Ejercicio 7 - __dirname y __filename
- [ ] Ejercicio 8 - process.argv
- [ ] Ejercicio 9 - process.env
- [ ] Ejercicio 10 - path.join y path.resolve
- [ ] Ejercicio 11 - fs.readFileSync
- [ ] Ejercicio 12 - fs.writeFileSync
- [ ] Ejercicio 13 - fs.readFile (callback)
- [ ] Ejercicio 14 - fs.promises
- [ ] Ejercicio 15 - fs.existsSync

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
```

## Criterio de Completado

- [ ] Todas las funciones implementadas
- [ ] Tests pasando
- [ ] Notas leídas y entendidas

## Entregables

- [ ] `ejercicios.js`
- [ ] `notas.md`
- [ ] `README.md`

## Siguiente Paso

Próximo día: npm, package.json, dependencias, scripts, y introducción a bundlers.
