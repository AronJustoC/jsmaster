# Notas - Día 04

## Temas Cubiertos

- Promises
- async/await
- Asincronía en JavaScript

---

## 1) Call Stack y Event Loop

JavaScript es **single-threaded**: solo puede hacer una cosa a la vez.

### Call Stack

Pila de ejecución. Cada función que se llama se apila, cuando termina se desapila.

```javascript
function a() { b(); }
function b() { console.log("hola"); }
a();
```

### Event Loop

El Event Loop verifica constantemente si el Call Stack está vacío y si hay tareas en la **Task Queue** para ejecutar.

```javascript
console.log("1"); // синхrono

setTimeout(() => console.log("2"), 0); // асинхrono - se ejecuta después

console.log("3");
// Output: 1, 3, 2
```

---

## 2) Promises

Una Promise representa un valor que puede estar disponible **ahora**, en el futuro, o nunca.

### Estados

- **Pending**: operación en curso
- **Fulfilled**: resolvida exitosamente
- **Rejected**: falló

### Crear una Promise

```javascript
const miPromise = new Promise((resolve, reject) => {
  const exitoso = true;
  
  if (exitoso) {
    resolve("Resultado exitoso");
  } else {
    reject(new Error("Falló"));
  }
});
```

### .then() y .catch()

```javascript
miPromise
  .then(resultado => console.log(resultado))
  .catch(error => console.error(error))
  .finally(() => console.log("Terminó"));
```

### Encadenar .then()

```javascript
fetch("/api/user")
  .then(response => response.json())
  .then(user => user.name)
  .then(name => console.log(name))
  .catch(error => console.error(error));
```

---

## 3) async/await

Sintaxis más limpia para trabajar con Promises.

### Función async

```javascript
async function obtenerDatos() {
  return "datos";
}

obtenerDatos().then(console.log); // "datos"
```

### await

```javascript
async function obtenerUsuario() {
  const response = await fetch("/api/user");
  const user = await response.json();
  return user;
}
```

### try/catch

```javascript
async function obtenerDatos() {
  try {
    const response = await fetch("/api/user");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
```

---

## 4) Promise.all()

Ejecutar múltiples Promises en paralelo.

```javascript
const promesa1 = fetch("/api/users");
const promesa2 = fetch("/api/posts");
const promesa3 = fetch("/api/comments");

const resultados = await Promise.all([promesa1, promesa2, promesa3]);

// resultados[0] = users
// resultados[1] = posts
// resultados[2] = comments
```

### Promise.race()

Retorna la primera Promise que se resuelva o rechace.

```javascript
Promise.race([
  fetch("/api/backup"),
  new Promise((_, reject) => setTimeout(reject, 3000))
])
```

### Promise.allSettled()

Espera a que TODAS las Promises terminen (sin importar si fallan).

```javascript
const resultados = await Promise.allSettled([p1, p2, p3]);

resultados.map(r => r.status); // ["fulfilled", "rejected", "fulfilled"]
```

---

## 5) Errores Comunes

### Olvidar await

```javascript
async function obtener() {
  const datos = fetch("/api"); // ❌ Esto retorna Promise, no datos
  return datos;
}

// ✅ Correcto
async function obtener() {
  const datos = await fetch("/api");
  return datos;
}
```

### No manejar errores

```javascript
async function obtener() {
  const datos = await fetch("/api"); // Si falla, lanza excepción
  return datos;
}

// ✅ Con try/catch
async function obtener() {
  try {
    const datos = await fetch("/api");
    return datos;
  } catch (error) {
    return { error: true };
  }
}
```

---

## Resumen: Cuándo Usar Qué

| Situación | Herramienta |
|-----------|-------------|
| Código simple, lineal | async/await |
| Múltiples operaciones en paralelo | Promise.all() |
| Necesito la primera en terminar | Promise.race() |
| Necesito todas, sin importar éxito/fallo | Promise.allSettled() |
| Compatibilidad máxima | .then()/.catch() |

---

## Ejercicios del Día

- `esperarYRetornar` - Crear Promise básica
- `dividir` - Promise con resolve y reject
- `obtenerUsuario` - async/await básico
- `dividirSegura` - try/catch con async/await
- `obtenerDatosMultiples` - Promise.all
- `chainPromises` - Encadenar Promises
- `verificarEdad` - Promise con reject condicional
- `procesoCompleto` - Múltiples await en secuencia
