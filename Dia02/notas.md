# Notas - Dia 02

## Temas
- Funciones en JavaScript
- Arrays y métodos de iteración
- Objetos y propiedades
- Comparación estricta vs flexible

## Conceptos clave

### Funciones
- Declaración: `function nombre(param) { return valor }`
- Template literals: `` `Hola ${variable}` ``

### Arrays
- `for...of`: itera sobre **valores**
- `for...in`: itera sobre **índices** (strings)
- `push()`: agregar elemento al final
- `join()`: unir elementos en string

### Objetos
- `for...in`: itera sobre **propiedades** (keys)
- `Object.keys(objeto)`: devuelve array de keys

### Comparación
- `==`: comparación flexible (coerción implícita)
- `===`: comparación estricta (recomendado)

## Errores y correcciones
- `contarPropiedades` usaba `for...of` en objeto → no funciona, debe ser `for...in`
- `buscarPorId` usaba `==` en vez de `===`

## Registro personal
- Lo que me salio bien: usar for...of para arrays, template literals
- Lo que me costo: recordar que objetos no son iterables con for...of
- Como lo resolvi: reemplace por for...in para objetos
