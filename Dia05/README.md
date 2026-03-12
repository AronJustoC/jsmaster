# Día 05 - Fetch API y APIs Públicas ✅ COMPLETADO

## Objetivo

Dominar Fetch API para consumo de APIs REST reales, manejar los diferentes métodos HTTP, y practicar con APIs públicas sin autenticación.

## Temas del Día

- Fetch API básica (GET)
- Métodos HTTP (POST, PUT, PATCH, DELETE)
- Headers y Content-Type
- Query parameters
- Manejo de estados (loading/error/success)
- Retry automático
- APIs públicas (JSONPlaceholder, Rick & Morty, Pokémon)

## Ejercicios Completados

- [x] Ejercicio 1 - `obtenerUsuario` (GET básico)
- [x] Ejercicio 2 - `buscarPosts` (query params)
- [x] Ejercicio 3 - `crearPost` (POST)
- [x] Ejercicio 4 - `actualizarPost` (PUT)
- [x] Ejercicio 5 - `eliminarPost` (DELETE)
- [x] Ejercicio 6 - `fetchConEstado` (estados loading/error)
- [x] Ejercicio 7 - `obtenerDatosCompletos` (múltiples endpoints)
- [x] Ejercicio 8 - `fetchConRetry` (retry automático)
- [x] Ejercicio 9 - `obtenerPersonajesRickMorty` (Rick & Morty API)
- [x] Ejercicio 10 - `obtenerPokemon` (Pokémon API)

## Conceptos Clave

### Fetch básico
```javascript
const datos = await (await fetch(url)).json();
```

### Fetch con opciones
```javascript
fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Juan' })
})
```

### Verificar respuesta
```javascript
if (!respuesta.ok) throw new Error(respuesta.statusText);
```

## Cómo Ejecutar

```bash
cd Dia05 && node ejercicios.js
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

Próximo día: Módulos (ES Modules, CommonJS), NPM, Node.js fundamentals.
