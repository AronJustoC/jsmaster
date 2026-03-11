console.log("Día 04.1 - Promises, Async/Await (Profundización)");

// --- Ejercicio 1: Promise.all con manejo de errores ---
async function obtenerDatosSeguros() {
  // USA Promise.all para obtener 3 valores
  // Si uno falla, retorna solo los que exitosaron con su estado
  // Usar: esperarYRetornar para simular éxito/fracaso
  // Return: objeto con { exitosos: [], fallidos: [] }
  const p1 = esperarYRetornar("dato1", 100);
  const p2 = Promise.reject(new Error("Falló p2"));
  const p3 = esperarYRetornar("dato3", 100);

  const resultados = await Promise.allSettled([p1, p2, p3]);

  const exitosos = resultados
    .filter((r) => r.status === "fulfilled")
    .map((r) => r.value);

  const fallidos = resultados
    .filter((r) => r.status === "rejected")
    .map((r) => r.reason);

  return { exitosos, fallidos };
}

// --- Ejercicio 2: Promise.allSettled ---
async function procesarPedidos(pedidos) {
  // USA Promise.allSettled para procesar múltiples pedidos
  // Cada pedido: { id, tiempo, debeFallar }
  // Return: array con { status: 'fulfilled'|'rejected', value|reason }
  const promesas = pedidos.map((pedido) => {
    if (pedido.debeFallar) {
      return Promise.reject(new Error(`Pedido ${pedido.id} fallo`));
    }
    return esperarYRetornar({ id: pedido.id, resultado: "ok" }, pedido.tiempo);
  });
  return await Promise.allSettled(promesas);
}

// --- Ejercicio 3: Promise.race - timeout ---
function fetchConTimeout(url, tiempoMs) {
  // CREA una race entre:
  // - fetch simulado con esperarYRetornar(url, 2000)
  // - Promise que rechaza después de tiempoMs
  // Return: Promise que resuelve con url o rechaza con "Timeout"
  return Promise.race([
    esperarYRetornar(url, 2000),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Timeout")), tiempoMs),
    ),
  ]);
}

// --- Ejercicio 4: Promise.any - primer éxito ---
async function primerRespuestaExitosa(urls) {
  // USA Promise.any para retornar la primera respuesta exitosa
  // Si todas fallan, rechazar con "All failed"
  // Simular cada url con esperarYRetornar(url, tiempo aleatorio)
  const promesas = urls.map((item) => {
    if (item.debeFallar) {
      return Promise.reject(new Error(`URL ${item.url} fallo`));
    }
    return esperarYRetornar({ url: item.url, status: "ok" }, item.tiempo);
  });

  try {
    return await Promise.any(promesas);
  } catch (error) {
    throw new Error("All failed");
  }
}

// --- Ejercicio 5: Encadenamiento complejo ---
async function procesoPorFases(datos) {
  // CREAR proceso de 4 fases:
  // 1. validar (50ms) -> { valid: true, data }
  // 2. transformar (50ms) -> { transformed: true, data }
  // 3. guardar (50ms) -> { saved: true, data }
  // 4. notificar (50ms) -> { notified: true }
  // Return: resultado final acumulando cada fase
  const validado = await esperarYRetornar({ valid: true, data: datos }, 50);
  const transformado = await esperarYRetornar(
    {
      transformed: true,
      data: validado.data,
    },
    50,
  );
  const guardado = await esperarYRetornar(
    {
      saved: true,
      data: transformado.data,
    },
    50,
  );
  const notificado = await esperarYRetornar({ notified: true }, 50);

  return { validado, transformado, guardado, notificado };
}

// --- Ejercicio 6: Retry automático ---
async function retry(fn, maxIntentos, tiempoEspera) {
  // CREAR función que reintenta fn hasta maxIntentos
  // Si exitosa, resolve. Si falla, esperar tiempoEspera y reintentar
  // Si se agotan intentos, rechazar con último error
  // Return: Promise
  let ultimoError;

  for (let i = 0; i < maxIntentos; i++) {
    try {
      return await fn();
    } catch (error) {
      ultimoError = error;
      if (i < maxIntentos - 1) {
        await esperarYRetornar(null, tiempoEspera);
      }
    }
  }

  throw ultimoError;
}

// --- Ejercicio 7: Promise secuencial vs paralelo ---
async function procesoMixto() {
  // CREAR:
  // - 2 operaciones en paralelo (100ms cada una)
  // - 1 operación secuencial que depende del resultado anterior
  // Return: { paralelo: [...], secuencial: resultado }
  const paralelo = await Promise.all([
    esperarYRetornar("resultado1", 100),
    esperarYRetornar("resultado2", 100),
  ]);

  const secuencial = await esperarYRetornar(
    `procesando: ${paralelo.join(", ")}`,
  );

  return { paralelo, secuencial };
}

// --- Ejercicio 8: Callback a Promise ---
function promisify(fn) {
  // TRANSFORMAR función callback-based a Promise
  // fn(node, callback) donde callback(err, result)
  // Return: función que retorna Promise
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  };
}

// --- Ejercicio 9: delayedQueue ---
class DelayedQueue {
  // CREAR clase que procesa items con delay entre cada uno
  // constructor(delayMs)
  // add(item): agrega item a la cola
  // process(): procesa todos en orden, retorna array de resultados

  constructor(delayMs) {
    this.delayMs = delayMs;
    this.cola = [];
  }

  add(item) {
    // ENUNCIADO: agregar item a la cola
    this.cola.push(item);
  }

  async process() {
    // ENUNCIADO: procesar todos los items en orden con delay
    // Return: array de resultados
    const resultados = [];
    for (const item of this.cola) {
      const resultado = await esperarYRetornar(item, this.delayMs);
      resultados.push(resultado);
    }
    return resultados;
  }
}

// --- Ejercicio 10: Semáforo (concurrencia limitada) ---
class Semaphore {
  // CREAR clase que limita concurrencia
  // constructor(maxConcurrent)
  // acquire(): obtiene permiso (Promise)
  // release(): libera permiso

  constructor(maxConcurrent) {
    this.maxConcurrent = maxConcurrent;
    this.disponibles = maxConcurrent;
    this.cola = [];
  }

  async acquire() {
    // ENUNCIADO: obtener permiso, esperar si no hay disponibles
    if (this.disponibles > 0) {
      this.disponibles--;
      return;
    }

    return new Promise((resolve) => {
      this.cola.push(resolve);
    });
  }

  release() {
    // ENUNCIADO: liberar permiso y procesar siguiente en cola
    if (this.cola.length > 0) {
      const siguiente = this.cola.shift();
      siguiente();
    } else {
      this.disponibles++;
    }
  }
}

// --- Utilidad provista ---
function esperarYRetornar(valor, tiempo) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(valor), tiempo);
  });
}

// --- Tests ---
console.log("\n--- TESTS ---");

// Test 1
obtenerDatosSeguros()
  .then((r) => console.log("ejercicio1:", JSON.stringify(r)))
  .catch((e) => console.log("ejercicio1 error:", e));

// Test 2
procesarPedidos([
  { id: 1, tiempo: 100, debeFallar: false },
  { id: 2, tiempo: 50, debeFallar: true },
  { id: 3, tiempo: 150, debeFallar: false },
]).then((r) => console.log("ejercicio2:", r.length, "resultados"));

// Test 3
fetchConTimeout("http://api.test", 150)
  .then((r) => console.log("ejercicio3:", r))
  .catch((e) => console.log("ejercicio3:", e));

// Test 4
primerRespuestaExitosa([
  { url: "slow", tiempo: 300 },
  { url: "fast", tiempo: 50 },
  { url: "error", tiempo: 100, debeFallar: true },
])
  .then((r) => console.log("ejercicio4:", r))
  .catch((e) => console.log("ejercicio4:", e));

// Test 5
procesoPorFases({ usuario: "juan" }).then((r) =>
  console.log("ejercicio5:", JSON.stringify(r)),
);

// Test 6
let intentos = 0;
const fnFallando = () => {
  intentos++;
  return new Promise((_, reject) =>
    setTimeout(() => reject(new Error(`Falló intento ${intentos}`)), 50),
  );
};
retry(fnFallando, 3, 30)
  .then((r) => console.log("ejercicio6:", r))
  .catch((e) => console.log("ejercicio6:", e.message));

// Test 7
procesoMixto().then((r) => console.log("ejercicio7:", JSON.stringify(r)));

// Test 8
function sumaCallback(a, b, cb) {
  setTimeout(() => cb(null, a + b), 50);
}
const sumaPromisified = promisify(sumaCallback);
sumaPromisified(2, 3).then((r) => console.log("ejercicio8:", r));

// Test 9
const queue = new DelayedQueue(50);
queue.add(1);
queue.add(2);
queue.add(3);
queue.process().then((r) => console.log("ejercicio9:", r));

// Test 10
const sem = new Semaphore(2);
let concurrentes = 0;
const tarea = async (id) => {
  await sem.acquire();
  concurrentes++;
  console.log("tarea", id, "inicio, concurrentes:", concurrentes);
  await esperarYRetornar(null, 100);
  concurrentes--;
  sem.release();
};
Promise.all([tarea(1), tarea(2), tarea(3), tarea(4)]).then(() =>
  console.log("ejercicio10: todas las tareas completadas"),
);
