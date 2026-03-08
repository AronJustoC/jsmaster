# Día 04 - Promises, Async/Await y Asincronía

## Objetivo

Dominar la programación asíncrona en JavaScript: desde Promises hasta async/await.

## Temas del Día

- Call Stack y Event Loop
- Promises (estados, .then/.catch/.finally)
- async/await
- Promise.all(), Promise.race(), Promise.allSettled()
- Manejo de errores

## Ejercicios (por resolver)

- [ ] Ejercicio 1 - `esperarYRetornar` (Promise básica)
- [ ] Ejercicio 2 - `dividir` (then/catch)
- [ ] Ejercicio 3 - `obtenerUsuario` (async/await)
- [ ] Ejercicio 4 - `dividirSegura` (try/catch)
- [ ] Ejercicio 5 - `obtenerDatosMultiples` (Promise.all)
- [ ] Ejercicio 6 - `chainPromises` (encadenar)
- [ ] Ejercicio 7 - `verificarEdad` (reject condicional)
- [ ] Ejercicio 8 - `procesoCompleto` (múltiples await)

## Conceptos Clave

### Promise
Objeto que representa un valor futuro:
```javascript
new Promise((resolve, reject) => { ... })
```

### async/await
Sintaxis moderna para Promises:
```javascript
async function obtener() {
  const data = await fetch(url);
  return data;
}
```

### Promise.all
Ejecutar múltiples operaciones en paralelo:
```javascript
const [users, posts] = await Promise.all([
  fetch('/api/users'),
  fetch('/api/posts')
]);
```

## Cómo Ejecutar

```bash
node ejercicios.js
```

## Criterio de Completado

- [ ] Todas las funciones implementadas
- [ ] Tests pasando
- [ ] Notas documentadas

## Entregables

- [x] `ejercicios.js`
- [x] `notas.md`
- [x] `README.md`

## Siguiente Paso

Próximo día: Fetch API, consumo de APIs públicas y manejo de estados (loading, error, éxito).
