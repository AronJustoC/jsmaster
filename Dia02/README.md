# Día 02 - Funciones, Arrays y Objetos

## Objetivo

Aprender a trabajar con funciones, arrays y objetos en JavaScript.

## Ejercicios Completados

- [x] Ejercicio 1 - `declararSaludo`
- [x] Ejercicio 2 - `sumarArray`
- [x] Ejercicio 3 - `filtrarPares`
- [x] Ejercicio 4 - `contarPropiedades`
- [x] Ejercicio 5 - `combinarNombres`
- [x] Ejercicio 6 - `buscarPorId`

## Conceptos Aprendidos

### Funciones
- Declaración de funciones (`function`)
- Template literals (`` `Hola ${nombre}` ``)
- Return de valores

### Arrays
- `for...of` → itera sobre **valores**
- `for...in` → itera sobre **índices** (strings)
- `push()` → agregar elemento al final
- `join()` → unir elementos en string

### Objetos
- `for...in` → itera sobre **propiedades** (keys)
- `Object.keys(objeto)` → devuelve array de keys
- Acceso con notación punto y corchetes

### Comparación
- `==` → comparación flexible (coerción implícita)
- `===` → comparación estricta (recomendado)

## Errores y Correcciones

| Error | Causa | Solución |
|-------|-------|----------|
| `contarPropiedades` fallaba | Usaba `for...of` en objeto | Cambiar a `for...in` |
| `buscarPorId` fallaba | Usaba `==` en vez de `===` | Cambiar a comparación estricta |

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

Día 03: ES6+, Closures y This.
