# Día 04.1 - Promises Profundización

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

## Ejercicios (por resolver)

- [ ] Ejercicio 1 - `obtenerDatosSeguros` (allSettled)
- [ ] Ejercicio 2 - `procesarPedidos` (allSettled con datos)
- [ ] Ejercicio 3 - `fetchConTimeout` (race)
- [ ] Ejercicio 4 - `primerRespuestaExitosa` (any)
- [ ] Ejercicio 5 - `procesoPorFases` (encadenamiento)
- [ ] Ejercicio 6 - `retry` (reintentos)
- [ ] Ejercicio 7 - `procesoMixto` (paralelo + secuencial)
- [ ] Ejercicio 8 - `promisify` (callback → promise)
- [ ] Ejercicio 9 - `DelayedQueue` (clase)
- [ ] Ejercicio 10 - `Semaphore` (clase)

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
node ejercicios.js
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

Próximo día: Fetch API real, consumo de APIs públicas, manejo de estados loading/error/éxito.
