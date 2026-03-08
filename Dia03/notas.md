# Notas - Dia 03

## Temas
- Destructuring
- Spread operator
- Closures
- This y binding

## Conceptos clave

### Destructuring
- Extraer valores de objetos/arrays de forma concisa
- Objetos: `const { nombre, edad } = usuario`
- Arrays: `const [primero, segundo] = array`

### Spread operator
- Expande arrays/objetos: `[...arr1, ...arr2]`
- Copia de objetos: `{ ...obj }`

### Closures
- Función que recuerda el scope donde fue creada
- Ejemplo: contador, factory functions

### This
- En funciones regulares: зависи del contexto de ejecución
- En arrow functions: hereda el this del scope padre
- bind(): vincula permanentemente el this
