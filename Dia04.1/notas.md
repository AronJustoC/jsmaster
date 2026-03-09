# Notas - Día 04.1 (Profundización)

## Experiencia del Día

Este día profundiza en patrones reales que vas a usar en producción. Promise.all no es suficiente cuando necesitas manejar errores individuales, y vas a necesitar dominar Promise.allSettled, race, y any para casos reales.

---

## 1) Promise.all() vs Promise.allSettled()

### El problema con Promise.all()

```javascript
const resultados = await Promise.all([p1, p2, p3]);
```

**Si UNA falla, TODO falla.** No sabés cuáles tiveram éxito.

### Solución: Promise.allSettled()

```javascript
const resultados = await Promise.allSettled([p1, p2, p3]);

resultados.forEach((r, i) => {
  if (r.status === "fulfilled") {
    console.log(`P${i}:`, r.value);
  } else {
    console.log(`P${i} falló:`, r.reason);
  }
});
```

**Cuando usar:**
- allSettled: cuando necesitás el resultado de TODAS, sin importar si fallan
- all: cuando necesitás que TODAS tengas éxito para continuar

---

## 2) Promise.race() - Timeout Pattern

La primera en resolver o rechazar gana. Útil para timeouts.

```javascript
function fetchConTimeout(url, timeoutMs) {
  return Promise.race([
    fetch(url), // tu promise original
    new Promise((_, reject) => 
      setTimeout(() => reject(new Error("Timeout")), timeoutMs)
    )
  ]);
}
```

**Caso de uso real:** Si tu API no tiene timeout nativo, esto lo simula.

---

## 3) Promise.any() - Primer Éxito

Retorna la primera que se resuelva exitosamente. Ignora rechazos.

```javascript
const resultado = await Promise.any([
  fetch("http://fast-api.com/datos"),
  fetch("http://backup-api.com/datos"),
  fetch("http://otro-backup.com/datos")
]);
```

**Caso de uso real:** Múltiples endpoints redundantes, tomar el primero que responda.

⚠️ **Si TODAS fallan**, rechaza con `AggregateError`.

---

## 4) Retry con Backoff

Patrón esencial para APIs inestables:

```javascript
async function retry(fn, maxIntentos, delayMs) {
  for (let i = 1; i <= maxIntentos; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === maxIntentos) throw error;
      await new Promise(r => setTimeout(r, delayMs));
    }
  }
}
```

**Mejora avanzada:** Exponential backoff (aumentar delay progresivamente):

```javascript
const delay = delayMs * Math.pow(2, i - 1); // 100, 200, 400...
```

---

## 5) Promisify - Legacy Callbacks

Mucho código legacy usa callbacks. Podés convertirlos:

```javascript
function promisify(fn) {
  return (...args) => new Promise((resolve, reject) => {
    fn(...args, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}
```

**Node.js ya lo tiene:** `util.promisify(fn)`

---

## 6) DelayedQueue - Procesamiento Secuencial

Cuando necesitás procesar items con delay entre cada uno:

```javascript
class DelayedQueue {
  constructor(delayMs) {
    this.delayMs = delayMs;
    this.items = [];
  }

  add(item) {
    this.items.push(item);
  }

  async process() {
    const resultados = [];
    for (const item of this.items) {
      await new Promise(r => setTimeout(r, this.delayMs));
      resultados.push(item * 2); // ejemplo: procesar item
    }
    return resultados;
  }
}
```

---

## 7) Semáforo - Concurrencia Limitada

Para no saturar recursos (DB, APIs, archivos):

```javascript
class Semaphore {
  constructor(max) {
    this.max = max;
    this.actual = 0;
    this.cola = [];
  }

  async acquire() {
    if (this.actual < this.max) {
      this.actual++;
      return;
    }
    
    return new Promise(resolve => {
      this.cola.push(resolve);
    });
  }

  release() {
    this.actual--;
    if (this.cola.length > 0) {
      this.actual++;
      const next = this.cola.shift();
      next();
    }
  }
}
```

**Uso:** Limitar requests paralelos a una API que solo acepta 10 conexiones.

---

## 8) Patrón: Seq + Parallel Mixto

A veces necesitás paralelismo pero con dependencias:

```javascript
async function procesoMixto() {
  // 2 independientes - paralelo
  const [r1, r2] = await Promise.all([
    obtenerDatos1(),
    obtenerDatos2()
  ]);

  // depende de r1 y r2 - secuencial
  const r3 = await procesar(r1, r2);

  return { r1, r2, r3 };
}
```

---

## Errores Comunes en Producción

### 1. No manejar promesas huérfanas

```javascript
// ❌ Peligro: promise no manejada
fetch("/api/datos");

// ✅ Siempre usar await o .then()
await fetch("/api/datos");
```

### 2. Promise en loop sin await

```javascript
// ❌ Todas inician juntas, no esperás resultados
for (const id of ids) {
  fetch(`/api/${id}`); // problemático si dependés del orden
}

// ✅ Si necesitás orden: for...of con await
for (const id of ids) {
  await fetch(`/api/${id}`);
}
```

### 3. Olvidar return en .then()

```javascript
// ❌ Pierdes el valor
promesa
  .then(r => console.log(r));
// no returns

// ✅
const resultado = promesa
  .then(r => r + 1);
```

---

## Resumen: Cuándo Usar Qué

| Situación | Herramienta |
|-----------|-------------|
| Múltiples operaciones, todas deben成功 | `Promise.all()` |
| Múltiples operaciones, necesito todas aunque fallen | `Promise.allSettled()` |
| Timeout en operations | `Promise.race()` |
| Múltiples opciones, tomar primera que funcione | `Promise.any()` |
| Reintentar operaciones fallidas | Retry manual |
| Código legacy con callbacks | `promisify()` |
| Procesar con delay entre items | `DelayedQueue` |
| Limitar concurrencia | `Semaphore` |

---

## Siguiente Paso

- Fetch API real
- Consumir APIs públicas (JSONPlaceholder, Rick & Morty, etc.)
- Manejo de estados: loading, error, éxito
