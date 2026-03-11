# Día 05 - Fetch API y APIs Públicas

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

## Ejercicios (por resolver)

- [ ] Ejercicio 1 - `obtenerUsuario` (GET básico)
- [ ] Ejercicio 2 - `buscarPosts` (query params)
- [ ] Ejercicio 3 - `crearPost` (POST)
- [ ] Ejercicio 4 - `actualizarPost` (PUT)
- [ ] Ejercicio 5 - `eliminarPost` (DELETE)
- [ ] Ejercicio 6 - `fetchConEstado` (estados loading/error)
- [ ] Ejercicio 7 - `obtenerDatosCompletos` (múltiples endpoints)
- [ ] Ejercicio 8 - `fetchConRetry` (retry automático)
- [ ] Ejercicio 9 - `obtenerPersonajesRickMorty` (Rick & Morty API)
- [ ] Ejercicio 10 - `obtenerPokemon` (Pokémon API)

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

- [ ] Todas las funciones implementadas
- [ ] Tests pasando
- [ ] Notas leídas y entendidas

## Entregables

- [ ] `ejercicios.js`
- [ ] `notas.md`
- [ ] `README.md`

## Siguiente Paso

Próximo día: Módulos (ES Modules, CommonJS), NPM, Node.js fundamentals.
