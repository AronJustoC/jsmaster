# Notas - Día 11 (POO: Fundamentos con TypeScript)

## 1) Clases básicas

```typescript
class Person {
  nombre: string;
  edad: number;
  email: string;

  constructor(nombre: string, edad: number, email: string) {
    this.nombre = nombre;
    this.edad = edad;
    this.email = email;
  }

  greet(): string {
    return `Hola, soy ${this.nombre}`;
  }
}
```

---

## 2) Modificadores de acceso

| Modificador | Accesible desde | 
|-------------|----------------|
| `public` | Cualquier lugar | 
| `private` | Solo dentro de la clase |
| `protected` | Clase y subclases |
| `readonly` | Solo lectura (inmutable) |

```typescript
class BankAccount {
  public accountNumber: string;
  private _balance: number;

  constructor(accountNumber: string, balance: number) {
    this.accountNumber = accountNumber;
    this._balance = balance;
  }

  deposit(amount: number): void {
    this._balance += amount;
  }

  getBalance(): number {
    return this._balance;
  }
}
```

---

## 3) Herencia

```typescript
class Animal {
  nombre: string;
  
  constructor(nombre: string) {
    this.nombre = nombre;
  }

  speak(): string {
    return "Sonido";
  }
}

class Dog extends Animal {
  speak(): string {
    return "Woof!";
  }
}
```

---

## 4) Getters y Setters

```typescript
class Temperature {
  private _celsius: number = 0;

  get celsius(): number {
    return this._celsius;
  }

  set celsius(value: number) {
    if (typeof value === "number") {
      this._celsius = value;
    }
  }
}
```

---

## Siguiente Día

Día 12: POO Intermedio - Clases abstractas, interfaces, polimorfismo
