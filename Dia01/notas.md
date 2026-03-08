# Conceptos Básicos - Día 01

## 1) Comparación: `==` vs `===`

| Operador | Comportamiento | Ejemplo |
|----------|----------------|---------|
| `==` | Compara valor con **conversión implícita** de tipos (coerción) | `"5" == 5` → `true` |
| `===` | Compara valor **y** tipo sin conversión | `"5" === 5` → `false` |

**Regla práctica**: Usar `===` casi siempre para evitar errores ocultos.

### Cuándo usar `==`
- Comparación con `null` o `undefined`: `x == null` verifica ambos
- Legado o APIs externas que lo requieran

---

## 2) Coerción de Tipos

JavaScript convierte tipos automáticamente según el contexto/operación.

### Coerción implícita (automática)

```javascript
// String + Number = String (conversión a string)
"5" + 1    → "51"

// String - Number = Number (conversión a número)
"5" - 1    → 4

// Comparaciones
"5" == 5   → true   // coerciona "5" a número
5 == true  → true   // coerciona true a 1
```

### Coerción explícita (manual)

```javascript
Number("5")     → 5
String(5)       → "5"
Boolean(1)     → true
Boolean(0)     → false
Boolean("")    → false
Boolean("hi")  → true
parseInt("42")  → 42
parseFloat("3.14") → 3.14
```

### Casos tricky

```javascript
[] + []         → ""        // array vacío + array vacío = string vacío
[] + {}         → "[object Object]"
{} + []         → 0         // depende del engine
0 == ""         → true
0 == "0"        → true
"" == "0"       → false
```

---

## 3) Scope (Alcance)

El **scope** determina dónde una variable es accesible.

### Scope Global
```javascript
const global = "soy global";

function ejemplo() {
  console.log(global); // ✅ accesible
}
console.log(global);   // ✅ accesible
```

### Scope de Bloque (`{}`)
```javascript
if (true) {
  let bloque = "solo aquí";
  const también = "aquí";
  var funcional = "soy diferente"; // ⚠️ escapa del bloque
}

console.log(bloque);    // ❌ ReferenceError
console.log(también);   // ❌ ReferenceError
console.log(funcional); // ✅ "soy diferente"
```

### Scope de Función
```javascript
function externa() {
  const outer = "visible";

  function interna() {
    const inner = "también visible";
    console.log(outer); // ✅ accede a outer
  }

  console.log(inner); // ❌ ReferenceError
}
```

### Reglas de portée

- `var`: scope de función (o global si no hay función)
- `let` y `const`: scope de bloque `{}`
- Scope hijo accede a variables del padre, pero no al revés

---

## 4) Bugs Corregidos

### FizzBuzz - Orden de condiciones
```javascript
// ❌ Error: nunca llega a FizzBuzz porque evalúa 3 y 5 por separado
if (i % 3 === 0) console.log("Fizz");
else if (i % 5 === 0) console.log("Buzz");
else if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");

// ✅ Correcto: primero el caso combinado
if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
else if (i % 3 === 0) console.log("Fizz");
else if (i % 5 === 0) console.log("Buzz");
```

### Validación de Primo - No cortar antes de tiempo
```javascript
// ❌ Error: corta en la primera iteración
function esPrimo(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
    return true; // ⚠️ siempre se ejecuta en i=2
  }
}

// ✅ Correcto: usa bandera y recorre todos los divisores
function esPrimo(n) {
  if (n < 2) return false;
  let esPrimo = true;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      esPrimo = false;
      break;
    }
  }
  return esPrimo;
}
```

---

## 5) Regla Personal del Día

> Primero resolver con lógica clara; después mejorar estilo y eficiencia.

**No optimices prematuramente.** La corrección primero, la elegancia después.

---

## Ejercicios del Día

- FizzBuzz (1 al 100)
- Número mayor en un array
- Invertir un string
- Verificar si un número es primo
- Contar vocales en un string

```bash
node ejercicios.js
```
