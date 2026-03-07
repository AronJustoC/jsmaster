# Conceptos basicos - Dia 01

## 1) '=='vs '==='
- `==` compara valor con conversion implicita de tipos (coercion).
- `===` compara valor y tipo sin conversion.
- Regla practica: usar `===` casi siempre para evitar errores ocultos.

Ejemplos:
- `"5" == 5` -> `true`
- `"5" === 5` -> `false`

## 2) Coercion de tipos
JavaScript a veces convierte tipos automaticamente segun la operacion.

Ejemplos:
- `"5" + 1` -> `"51"` (concatena string)
- `"5" - 1` -> `4` (convierte a numero)
- `Number("5")` -> `5`

## 3) Scope (alcance)
- Scope global: variable declarada fuera de funciones/bloques.
- Scope de bloque: `let` y `const` viven solo dentro de `{}`.
- Scope de funcion: variables declaradas dentro de una funcion no salen afuera.

## 4) Bugs corregidos hoy
- FizzBuzz: primero se evalua multiplo de 3 y 5 juntos.
- Primo: no se corta en la primera iteracion; se revisan divisores hasta encontrar uno.

## 5) Regla personal del dia
Primero resolver con logica clara; despues mejorar estilo y eficiencia.
