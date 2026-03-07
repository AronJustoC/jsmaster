reforce conociemientos basicos de js implemente el concepto de coercion que es la convercion de datos automatica que hace js en ejecucion tambien tengo claro la diferencias de scope global local {} y dentro de una funcion siendo let y const variables que viviran dentro de un scope.
# Dia 01 - Fundamentos de JavaScript

## Objetivo del dia
Resolver ejercicios base de logica con JavaScript para reforzar fundamentos sin usar frameworks.

## Ejercicios completados
- [x] FizzBuzz (1 al 100)
- [x] Numero mayor en un array
- [x] Invertir un string
- [x] Verificar si un numero es primo
- [x] Contar vocales en un string

## Como ejecutar
```bash
node ejercicios.js
```

## Aprendizajes clave
- Entendi por que en FizzBuzz importa el orden de condiciones.
- Practique recorrido de arrays con `for` y comparaciones acumuladas.
- Reforce conversion entre string y array usando `split` y `join`.
- Entendi mejor la validacion de primos evitando cortar la evaluacion antes de tiempo.
- Use `Math.max(...array)` y compare con una solucion manual.

## Dificultades y como las resolvi
- Dificultad: FizzBuzz no mostraba `FizzBuzz`.
  - Causa: condicion de multiplo de 3 y 5 estaba despues de otros `if`.
  - Solucion: mover `i % 3 === 0 && i % 5 === 0` al primer `if`.

- Dificultad: validacion de primo incorrecta.
  - Causa: el loop se cortaba en la primera iteracion.
  - Solucion: usar una bandera (`esPrimo`) y recorrer divisores correctamente.

## Entregables del dia
- `ejercicios.js` con 5 ejercicios funcionales.
- `notas.md` con conceptos base (`==` vs `===`, coercion, scope).
- `README.md` con evidencia de ejecucion y reflexion tecnica.

## Siguiente paso
Dia 02: funciones, arrays y objetos con mas casos de prueba.
