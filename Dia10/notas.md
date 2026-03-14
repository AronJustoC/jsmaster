# Notas - Día 10 (TypeScript: Tipado estático)

## 1) Por qué TypeScript?

TypeScript = JavaScript + tipos estáticos.

**Beneficios:**
- Errores en tiempo de compilación (no ejecución)
- IDE con autocomplete inteligente
- Documentación automática en el código
- Refactoring seguro

**Trade-offs:**
- Necesita compilación
- Curva de aprendizaje adicional
- Configuración inicial

---

## 2) Tipos básicos

```typescript
// Primitivos
let nombre: string = "Juan";
let edad: number = 25;
let activo: boolean = true;

// Arrays
let numeros: number[] = [1, 2, 3];
let nombres: Array<string> = ["Ana", "Pedro"];

// Objetos
let usuario: { nombre: string; edad: number } = {
  nombre: "Ana",
  edad: 30
};
```

---

## 3) Interfaces vs Types

### Interface
```typescript
interface User {
  id: number;
  nombre: string;
  email?: string;  // opcional
}

const user: User = { id: 1, nombre: "Ana" };
```

### Type Alias
```typescript
type Coordinate = {
  x: number;
  y: number;
};

type ID = string | number;
```

**Diferencia:** Interface puede extenderse, Type puede usar union/intersection.

---

## 4) Union Types y Discriminadores

```typescript
type UserType = "admin" | "user" | "guest";

function getAccess(tipo: UserType): string {
  switch (tipo) {
    case "admin": return "full";
    case "user": return "limited";
    case "guest": return "readonly";
  }
}
```

---

## 5) Genéricos

```typescript
function primero<T>(arr: T[]): T {
  return arr[0];
}

interface ApiResponse<T> {
  data: T;
  status: number;
  ok: boolean;
}

const resp: ApiResponse<User> = {
  data: { id: 1, nombre: "Ana" },
  status: 200,
  ok: true
};
```

---

## 6) tsconfig.json básico

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "outDir": "./dist",
    "rootDir": "./src"
  }
}
```

**Opciones clave:**
- `strict`: activa todas las verificaciones estrictas
- `target`: versión de JS destino
- `esModuleInterop`: permite imports default

---

## 7) Comandos útiles

```bash
# Inicializar tsconfig
npx tsc --init

# Compilar
npx tsc

# Watch mode
npx tsc --watch

# Type check sin compilar
npx tsc --noEmit
```

---

## Siguiente Paso

- Practicar con un proyecto real
- Explorar tipos avanzados (utility types)
- Integrar con Vite (vite-plugin-react-swc)
