# Dia 07 - NPM, package.json y Scripts

## Objetivo

Entender como se estructura un proyecto Node con `package.json`, como se ejecutan scripts con npm, y los conceptos basicos de dependencias y SemVer.

## Temas del Dia

- NPM: dependencias, scripts, lockfile
- `package.json`: campos clave
- Scripts con `npm run` y paso de argumentos
- `dependencies` vs `devDependencies`
- SemVer: versionado y rangos basicos

## Ejercicios (por resolver)

- [ ] Ejercicio 1 - Leer metadatos basicos de un package.json
- [ ] Ejercicio 2 - Detectar `type` (module vs commonjs)
- [ ] Ejercicio 3 - Listar nombres de scripts
- [ ] Ejercicio 4 - Verificar si existe un script
- [ ] Ejercicio 5 - Agregar un script sin mutar el objeto
- [ ] Ejercicio 6 - Parsear args estilo `npm run ... -- ...`
- [ ] Ejercicio 7 - Validar un rango SemVer basico

## Conceptos Clave

### package.json

- Define identidad (`name`, `version`)
- Define scripts (automation)
- Define dependencias (runtime vs dev)

### Scripts

```bash
npm run start
npm run test
npm run start -- --port=3000
```

### SemVer

`1.2.3` (major/minor/patch) + rangos: `^`, `~`, comparadores.

## Como Ejecutar

```bash
cd Dia07 && node ejercicios.js
```

Nota: los tests estan para guiarte. Al principio fallan hasta que completes las funciones.

## Criterio de Completado

- [ ] Todas las funciones implementadas
- [ ] Tests pasando
- [ ] Notas leidas y entendidas

## Entregables

- [ ] `ejercicios.js`
- [ ] `notas.md`
- [ ] `README.md`

## Siguiente Paso

Proximo dia: instalar dependencias reales, explorar `npm install` / `npm ci`, lockfile, y scripts mas utiles (lint, format, test).
