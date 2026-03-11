# Día 04.1 - Promises Profundización ✅ COMPLETADO

## Objetivo

Dominar patrones avanzados de Promises que usarás en producción real: manejo de errores complejo, retry, limitación de concurrencia, y transformación de código legacy.

## Temas del Día

- Promise.allSettled (manejo de errores individuales)
- Promise.race (timeouts)
- Promise.any (primer éxito)
- Retry con backoff
- Promisify (callbacks → promises)
- DelayedQueue (procesamiento secuencial)
- Semaphore (concurrencia limitada)
- Patrones mixtos (paralelo + secuencial)

## Ejercicios Completados

- [x] Ejercicio 1 - `obtenerDatosSeguros` (allSettled)
- [x] Ejercicio 2 - `procesarPedidos` (allSettled con datos)
- [x] Ejercicio 3 - `fetchConTimeout` (race)
- [x] Ejercicio 4 - `primerRespuestaExitosa` (any)
- [x] Ejercicio 5 - `procesoPorFases` (encadenamiento)
- [x] Ejercicio 6 - `retry` (reintentos)
- [x] Ejercicio 7 - `procesoMixto` (paralelo + secuencial)
- [x] Ejercicio 8 - `promisify` (callback → promise)
- [x] Ejercicio 9 - `DelayedQueue` (clase)
- [x] Ejercicio 10 - `Semaphore` (clase)

## Conceptos Clave

### Promise.allSettled
```javascript
const resultados = await Promise.allSettled([p1, p2, p3]);
//Siempre retorna, sin importar si fallan
```

### Promise.race
```javascript
//Ganador: primera en resolver O rechazar
Promise.race([fetch(url), timeout(3000)])
```

### Retry Pattern
```javascript
async function retry(fn, intentos, delay) {
  for (let i = 0; i < intentos; i++) {
    try { return await fn(); }
    catch (e) { if (i === intentos - 1) throw e; }
    await wait(delay);
  }
}
```

## Cómo Ejecutar

```bash
cd Dia04.1 && node ejercicios.js
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

Próximo día: Fetch API real, consumo de APIs públicas, manejo de estados loading/error/éxito.
