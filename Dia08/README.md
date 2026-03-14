# Dia 08 - npm install, lockfile y node_modules

## Objetivo

Dominar el flujo real de instalacion de dependencias con npm: diferencias entre `install` y `ci`, rol del lockfile, y como se resuelven binarios locales en scripts.

## Temas del Dia

- `npm install` vs `npm ci`
- `dependencies` vs `devDependencies`
- `package-lock.json`
- `node_modules/` y `node_modules/.bin`

## Ejercicios (por resolver)

- [ ] Ejercicio 1 - Listar dependencias totales (deps + devDeps)
- [ ] Ejercicio 2 - Detectar si una dependencia es runtime
- [ ] Ejercicio 3 - Interpretar un comando npm (install/ci)
- [ ] Ejercicio 4 - Listar packages desde un lockfile simplificado
- [ ] Ejercicio 5 - Resolver un bin local (simulacion de .bin)

## Como Ejecutar

```bash
cd Dia08 && node ejercicios.js
```

## Criterio de Completado

- [x] Todas las funciones implementadas
- [x] Tests pasando
- [x] Notas leidas y entendidas

## Entregables

- [ ] `ejercicios.js`
- [ ] `notas.md`
- [ ] `README.md`

## Siguiente Paso

Proximo dia: npx, scripts mas profesionales, y primer bundler (Vite).
