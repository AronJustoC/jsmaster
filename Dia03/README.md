# Día 03 - ES6+, Closures y This

## Objetivo

Dominar features modernas de ES6+, entender closures y el comportamiento de `this`.

## Temas del Día

- Destructuring (objetos y arrays)
- Spread operator (`...`)
- Arrow functions
- Closures
- `this` y binding (`bind`, `call`, `apply`)

## Ejercicios Completados

- [x] Ejercicio 1 - `obtenerNombreYEdad` (destructuring objetos)
- [x] Ejercicio 2 - `obtenerPrimerYSegundo` (destructuring arrays)
- [x] Ejercicio 3 - `combinarArrays` (spread operator)
- [x] Ejercicio 4 - `crearContador` (closure)
- [x] Ejercicio 5 - `crearSaludo` (closure factory)
- [x] Ejercicio 6 - `usuario.saludar` (this en objetos)
- [x] Ejercicio 7 - `robot.saludar` (arrow + this)
- [x] Ejercicio 8 - `crearPresentador` (bind)

## Conceptos Clave

### Destructuring
Extraer valores de objetos/arrays de forma concisa:
```javascript
const { nombre, edad } = usuario;
const [primero, segundo] = array;
```

### Spread Operator
Expande arrays/objetos:
```javascript
[...arr1, ...arr2];  // combinar arrays
{ ...obj };          // copiar objeto
```

### Closures
Función que recuerda el scope donde fue creada:
```javascript
function crearContador() {
  let count = 0;
  return () => ++count;
}
```

### This y Binding
- **Función regular**: `this` = contexto de llamada
- **Arrow function**: `this` = hereda del scope padre
- **`.bind()`**: vincula `this` permanentemente

## Cómo Ejecutar

```bash
node ejercicios.js
```

## Criterio de Completado

- [x] Todas las funciones implementadas
- [x] Tests pasando
- [x] Notas documentadas

## Entregables

- [x] `ejercicios.js`
- [x] `notas.md`
- [x] `README.md`

## Siguiente Paso

Próximo día: Promises, Async/Await y programación asíncrona.
