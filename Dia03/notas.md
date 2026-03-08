# Notas - Día 03

## Temas Cubiertos

- Destructuring
- Spread Operator
- Closures
- This y Binding

---

## 1) Destructuring

Extraer valores de objetos/arrays de forma concisa.

### Destructuring de Objetos

```javascript
const usuario = { nombre: "Aron", edad: 30, ciudad: "Lima" };

// Extracción básica
const { nombre, edad } = usuario;
console.log(nombre); // "Aron"

// Renombrar
const { nombre: nombreUsuario } = usuario;

// Valores por defecto
const { pais = "Perú" } = usuario;
```

### Destructuring de Arrays

```javascript
const colores = ["rojo", "verde", "azul"];

const [primero, segundo] = colores;
console.log(primero); // "rojo"

// Saltar elementos
const [a, , c] = colores;
console.log(c); // "azul"

// Rest operator
const [cabeza, ...resto] = colores;
console.log(resto); // ["verde", "azul"]
```

### Destructuring en Funciones

```javascript
function obtenerNombre({ nombre, edad }) {
  return `${nombre} tiene ${edad} años`;
}

obtenerNombre({ nombre: "Aron", edad: 30 });
```

---

## 2) Spread Operator (`...`)

Expande arrays/objetos.

### Arrays

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Combinar arrays
const combinado = [...arr1, ...arr2]; // [1,2,3,4,5,6]

// Copiar array
const copia = [...arr1];

// Agregar elementos
const nuevo = [...arr1, 7, 8]; // [1,2,3,7,8]
```

### Objetos

```javascript
const usuario = { nombre: "Aron", edad: 30 };

// Copiar objeto
const copia = { ...usuario };

// Combinar objetos
const extra = { ciudad: "Lima", pais: "Perú" };
const combinado = { ...usuario, ...extra };

// Sobrescribir propiedades
const actualizado = { ...usuario, edad: 31 };
```

### En Funciones

```javascript
const nums = [1, 2, 3];
Math.max(...nums); // 3
Math.min(...nums); // 1
```

---

## 3) Closures

Una **función que recuerda el scope donde fue creada**, incluso después de que la función externa haya terminado.

### Ejemplo Básico

```javascript
function crearContador() {
  let contador = 0;
  
  return function() {
    contador++;
    return contador;
  };
}

const contar = crearContador();
contar(); // 1
contar(); // 2
contar(); // 3
```

### Closure con Parámetros (Factory Function)

```javascript
function crearSaludo(saludo) {
  return function(nombre) {
    return `${saludo}, ${nombre}!`;
  };
}

const saludarHola = crearSaludo("Hola");
const saludarChau = crearSaludo("Chau");

saludarHola("Aron"); // "Hola, Aron!"
saludarChau("Aron"); // "Chau, Aron!"
```

### Uso Común

- **Contadores**
- **Factories** (crear funciones configuradas)
- **Memorización**
- **Data privacy** (simular variables privadas)

---

## 4) This y Binding

`this` depende de **cómo** se llama la función.

### This en Funciones Regulares

```javascript
const usuario = {
  nombre: "Aron",
  saludar() {
    console.log(`Hola, ${this.nombre}`);
  }
};

usuario.saludar(); // "Hola, Aron" - this = usuario
```

### Problema: Extracción de Método

```javascript
const usuario = {
  nombre: "Aron",
  saludar() {
    console.log(`Hola, ${this.nombre}`);
  }
};

const fn = usuario.saludar;
fn(); // ❌ Error: this es undefined (en strict) o window
```

### Solución 1: Arrow Functions

```javascript
const usuario = {
  nombre: "Aron",
  saludar: () => {
    console.log(`Hola, ${this.nombre}`);
  }
};

const fn = usuario.saludar;
fn(); // ✅ "Hola, undefined" - arrow hereda this del padre
```

### Solución 2: bind()

`bind()` crea una nueva función con `this` vinculado permanentemente.

```javascript
const usuario = {
  nombre: "Aron",
  saludar() {
    console.log(`Hola, ${this.nombre}`);
  }
};

const saludarFijo = usuario.saludar.bind(usuario);
saludarFijo(); // "Hola, Aron"
```

### call() y apply()

Llamar función con `this` específico.

```javascript
function presentar(saludo) {
  console.log(`${saludo}, soy ${this.nombre}`);
}

const persona = { nombre: "Aron" };

// call() - argumentos como lista
presentar.call(persona, "Hola"); // "Hola, soy Aron"

// apply() - argumentos como array
presentar.apply(persona, ["Hola"]); // "Hola, soy Aron"
```

### Resumen: Cuándo Usar Qué

| Situación | Solución |
|-----------|----------|
| Método en objeto | `this` automático |
| Callback/event handler | Arrow function o `.bind()` |
| Necesito `this` fijo | `.bind()` |
| Llamar con contexto temporal | `.call()` o `.apply()` |

---

## Ejercicios del Día

- `obtenerNombreYEdad` - Destructuring de objetos
- `obtenerPrimerYSegundo` - Destructuring de arrays
- `combinarArrays` - Spread operator
- `crearContador` - Closure
- `crearSaludo` - Closure factory
- `usuario.saludar` - This en objetos
- `robot.saludar` - Arrow + this
- `crearPresentador` - Bind
