# Día 01 - Fundamentos de JavaScript

## Objetivo del Día

Resolver ejercicios base de lógica con JavaScript para reforzar fundamentos sin usar frameworks.

## Ejercicios Completados

- [x] FizzBuzz (1 al 100)
- [x] Número mayor en un array
- [x] Invertir un string
- [x] Verificar si un número es primo
- [x] Contar vocales en un string

## Cómo Ejecutar

```bash
node ejercicios.js
```

## Aprendizajes Clave

- Entendí por qué en FizzBuzz importa el **orden de condiciones** (el caso combinado va primero)
- Practiqué recorrido de arrays con `for` y comparaciones acumuladas
- Reforcé conversión entre string y array usando `split()` y `join()`
- Entendí mejor la validación de primos evitando cortar la evaluación antes de tiempo
- Descubrí `Math.max(...array)` y lo comparé con una solución manual

## Dificultades y Cómo las Resolví

### FizzBuzz no mostraba "FizzBuzz"
- **Causa**: La condición de múltiplo de 3 y 5 estaba después de otros `if`
- **Solución**: Mover `i % 3 === 0 && i % 5 === 0` al primer `if`

### Validación de primo incorrecta
- **Causa**: El loop se cortaba en la primera iteración (`return true` temprano)
- **Solución**: Usar una bandera (`esPrimo`) y recorrer todos los divisores

## Entregables del Día

| Archivo | Descripción |
|---------|-------------|
| `ejercicios.js` | 5 ejercicios funcionales |
| `notas.md` | Conceptos base (`==` vs `===`, coerción, scope) |
| `README.md` | Evidencia de ejecución y reflexión técnica |

## Siguiente Paso

Día 02: Funciones, arrays y objetos con más casos de prueba.
