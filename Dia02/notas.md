# Notas - Día 02

## Temas Cubiertos

- Funciones en JavaScript
- Arrays y métodos de iteración
- Objetos y propiedades
- Comparación estricta vs flexible

---

## 1) Funciones

### Formas de Declarar

```javascript
// Declaración de función (hoisted)
function saludar(nombre) {
  return `Hola, ${nombre}`;
}

// Expresión de función
const saludar = function(nombre) {
  return `Hola, ${nombre}`;
};

// Arrow function
const saludar = (nombre) => `Hola, ${nombre}`;
```

### Template Literals

```javascript
const nombre = "Aron";
const mensaje = `Hola, ${nombre}!`;  // "Hola, Aron!"

// Expresiones dentro de template
const suma = `La suma es ${2 + 3}`;    // "La suma es 5"
```

---

## 2) Arrays

### Iteración

| Método | Itera sobre | Retorna |
|--------|-------------|---------|
| `for...of` | **Valores** | - |
| `for...in` | **Índices** (strings) | - |
| `for` clásico | Índice y valor | - |

```javascript
const arr = ["a", "b", "c"];

// for...of → valores
for (const valor of arr) {
  console.log(valor); // "a", "b", "c"
}

// for...in → índices
for (const indice in arr) {
  console.log(indice); // "0", "1", "2"
}
```

### Métodos Comunes

```javascript
const arr = [1, 2, 3];

arr.push(4);        // [1,2,3,4] - agrega al final
arr.pop();          // [1,2,3] - elimina del final
arr.shift();        // [2,3] - elimina del inicio
arr.unshift(0);    // [0,1,2,3] - agrega al inicio

arr.join("-");     // "1-2-3" - une en string
arr.includes(2);    // true
arr.indexOf(2);     // 1
arr.slice(1, 3);    // [2,3] - porción
arr.concat([4,5]);  // [1,2,3,4,5]
```

---

## 3) Objetos

### Iteración

```javascript
const usuario = { nombre: "Aron", edad: 30 };

// for...in → propiedades (keys)
for (const key in usuario) {
  console.log(`${key}: ${usuario[key]}`);
}

// Object.keys() → array de keys
Object.keys(usuario);    // ["nombre", "edad"]

// Object.values() → array de valores
Object.values(usuario);  // ["Aron", 30]

// Object.entries() → array de [key, valor]
Object.entries(usuario); // [["nombre", "Aron"], ["edad", 30]]
```

### Acceso a Propiedades

```javascript
const usuario = { nombre: "Aron", edad: 30 };

// Notación punto
usuario.nombre;   // "Aron"

// Notación corchetes
usuario["nombre"]; // "Aron"

// Destructuring (Día 03)
const { nombre, edad } = usuario;
```

---

## 4) Comparación

| Operador | Nombre | Comportamiento |
|----------|--------|-----------------|
| `==` | Equality | Coerción implícita |
| `===` | Strict Equality | Sin coerción |
| `!=` | Inequality | Coerción implícita |
| `!==` | Strict Inequality | Sin coerción |

```javascript
"5" == 5;   // true - coerciona string a número
"5" === 5;  // false - tipos diferentes

0 == false;     // true
0 === false;    // false

null == undefined;   // true
null === undefined; // false
```

**Regla**: Usar `===` siempre, salvo `x == null` que verifica ambos.

---

## Errores y Correcciones

### Error: `contarPropiedades` usaba `for...of` en objeto
```javascript
// ❌ Error: objetos no son iterables con for...of
for (const prop of usuario) { }

// ✅ Correcto: usar for...in o Object.keys()
for (const key in usuario) { }
```

### Error: `buscarPorId` usaba `==` en vez de `===
```javascript
// ❌ Error: comparación flexible puede dar falsos positivos
if (item.id == id) { }

// ✅ Correcto: comparación estricta
if (item.id === id) { }
```

---

## Registro Personal

- **Lo que me salió bien**: Usar `for...of` para arrays, template literals
- **Lo que me costó**: Recordar que objetos no son iterables con `for...of`
- **Cómo lo resolví**: Reemplacé por `for...in` para objetos

---

## Ejercicios del Día

- `declararSaludo` - Función básica
- `sumarArray` - Reducción de array
- `filtrarPares` - Filter de array
- `contarPropiedades` - Iteración de objeto
- `combinarNombres` - Manipulación de strings
- `buscarPorId` - Búsqueda en array de objetos
