# Notas - Día 05 (Fetch API y APIs Públicas)

## Experiencia del Día

Este día marca la transición de promesas teóricas a consumo real de APIs. JSONPlaceholder, Rick and Morty, y Pokémon son APIs públicas perfectas para practicar sin autenticación.

---

## 1) Fetch API - Fundamentos

### La API nativa del navegador

```javascript
fetch('https://api.ejemplo.com/datos')
  .then(respuesta => respuesta.json())
  .then(datos => console.log(datos))
  .catch(error => console.error(error));
```

### Promise chain vs async/await

```javascript
async function obtenerDatos() {
  try {
    const respuesta = await fetch('https://api.ejemplo.com/datos');
    const datos = await respuesta.json();
    return datos;
  } catch (error) {
    console.error('Error:', error);
  }
}
```

---

## 2) Response Object

Cuando fetch resuelve, obtenés un objeto Response con metadatos:

```javascript
const respuesta = await fetch(url);

respuesta.ok           // boolean: true si status 200-299
respuesta.status       // código de estado (200, 404, 500...)
respuesta.statusText   // "OK", "Not Found"...
respuesta.headers      // Headers object
respuesta.json()       // método para parsear JSON
respuesta.text()       // método para obtener texto
respuesta.blob()       // método para obtener binary
```

### Importante: fetch NO lanza error en 404/500

```javascript
// ❌ fetch NO lanza error aunque sea 404
const r = await fetch('/no-existe');
// r.status = 404, pero NO entra al catch

// ✅ Hay que verificar response.ok
if (!respuesta.ok) {
  throw new Error(`Error ${respuesta.status}`);
}
```

---

## 3) Métodos HTTP

### GET (por defecto)

```javascript
fetch('https://api.com/users')
```

### POST - Crear recursos

```javascript
fetch('https://api.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Juan',
    email: 'juan@email.com'
  })
})
```

### PUT - Actualizar completo

```javascript
fetch('https://api.com/users/1', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Juan Actualizado' })
})
```

### PATCH - Actualizar parcial

```javascript
fetch('https://api.com/users/1', {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Nuevo Nombre' })
})
```

### DELETE - Eliminar

```javascript
fetch('https://api.com/users/1', {
  method: 'DELETE'
})
```

---

## 4) Headers

```javascript
const headers = new Headers({
  'Content-Type': 'application/json',
  'Authorization': 'Bearer token123',
  'Accept': 'application/json'
});

fetch(url, { headers });
```

Headers comunes:
- `Content-Type`: tipo de dato que mandás
- `Authorization`: para APIs que requieren auth
- `Accept`: qué tipo de respuesta aceptás

---

## 5) Query Parameters

```javascript
const busqueda = 'javascript';
const pagina = 1;

const url = `https://api.com/posts?q=${busqueda}&_page=${pagina}`;
// o
const url = new URL('https://api.com/posts');
url.searchParams.set('q', busqueda);
url.searchParams.set('_page', pagina);
```

---

## 6) APIs Públicas para Practicar

### JSONPlaceholder
- Base: `https://jsonplaceholder.typicode.com`
- Recursos: posts, comments, albums, photos, users, todos
- No requiere autenticación
- Ideal para CRUD básico

### Rick and Morty API
- Base: `https://rickandmortyapi.com/api`
- Personajes, ubicaciones, episodios
- Estructura más compleja

### Pokémon API
- Base: `https://pokeapi.co/api/v2`
- Mucha data, bien estructurada
- Excelente para practicar parsing

### Dog CEO API
- Imágenes de perros aleatorias

### Random User Generator
- Generar usuarios falsos

---

## 7) Patrón: Estados (loading/error/data)

```javascript
async function fetchConEstados(url) {
  return { loading: true, data: null, error: null };
  
  try {
    const respuesta = await fetch(url);
    if (!respuesta.ok) throw new Error(respuesta.statusText);
    const data = await respuesta.json();
    return { loading: false, data, error: null };
  } catch (error) {
    return { loading: false, data: null, error: error.message };
  }
}
```

---

## 8) Patrón: Retry Automático

```javascript
async function fetchConRetry(url, maxIntentos = 3) {
  for (let intento = 1; intento <= maxIntentos; intento++) {
    try {
      const respuesta = await fetch(url);
      if (!respuesta.ok) throw new Error(respuesta.statusText);
      return await respuesta.json();
    } catch (error) {
      if (intento === maxIntentos) throw error;
      await new Promise(r => setTimeout(r, 1000));
    }
  }
}
```

---

## 9) Errores Comunes en Producción

### 1. Olvidar await en fetch (el más común)

```javascript
// ❌ Return Promise, no el resultado
const datos = fetch(url);

// ✅ Await en fetch Y en .json()
const respuesta = await fetch(url);
const datos = await respuesta.json();

// ✅ Todo en una línea
const datos = await (await fetch(url)).json();
```

### 2. No verificar response.ok

```javascript
// ❌ fetch NO lanza error en 404/500
const datos = await fetch(url).then(r => r.json());

// ✅ Siempre verificar
const r = await fetch(url);
if (!r.ok) throw new Error(`Error ${r.status}: ${r.statusText}`);
const datos = await r.json();
```

### 3. Olvidar await en .json()

```javascript
// ❌ .json() retorna Promise
const datos = respuesta.json();

// ✅
const datos = await respuesta.json();
```

### 4. URL mal escrita

```javascript
// ❌ Sobra "URL:" al inicio
fetch(`URL: https://api.com/users/${id}`)

// ✅
fetch(`https://api.com/users/${id}`)
```

### 5. Usar método wrong (POST en vez de PUT)

```javascript
// ❌ Crear en vez de actualizar
method: 'POST'

// ✅ PUT para actualizar, POST para crear
method: 'PUT'
```

### 6. No hacer JSON.stringify en body

```javascript
// ❌ body debe ser string
body: { name: 'Juan' }

// ✅
body: JSON.stringify({ name: 'Juan' })
```

### 7. No manejar errores

```javascript
// ❌ Promise huérfana
fetch(url).then(r => r.json());

// ✅ try/catch
try {
  const r = await fetch(url);
  const datos = await r.json();
} catch (e) {
  console.error(e);
}
```

---

## Resumen: workflow típico

```
1. Construir URL (con params si corresponde)
2. Llamar fetch() con opciones (method, headers, body)
3. Verificar respuesta.ok
4. Parsear según tipo (json, text, blob)
5. Manejar errores con try/catch
6. Retornar datos o objeto de estados
```

---

## Siguiente Paso

- Módulos (ES Modules, CommonJS)
- NPM y paquetes
- Introducción a Node.js

---

## Errores Encontrados al Resolver

Estos fueron los errores reales que surgieron al implementar los ejercicios:

1. **Falta de `await` en fetch** - El más común, fetch retorna Promise si no se usa await
2. **URL mal escrita** - Sobrabba "URL:" al inicio de la cadena
3. **Método incorrecto** - POST en vez de PUT para actualizar
4. **Función generadora incorrecta** - `async function*` en vez de `async function`
5. **Falta de `.toLowerCase()`** - APIs como PokeAPI requieren minúsculas
6. **No verificar `response.ok`** - fetch no lanza error en 404/500
