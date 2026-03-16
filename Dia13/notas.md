# Notas - Día 13 (POO: Patrones de Diseño con TypeScript)

## 1) Singleton

Una sola instancia en toda la app.

```typescript
class Database {
  private static instance: Database;

  private constructor() {}

  static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}
```

---

## 2) Factory

Crea objetos sin especificar clase exacta.

```typescript
function createNotification(type: "email" | "sms"): Notification {
  if (type === "email") return new EmailNotification();
  if (type === "sms") return new SMSNotification();
  throw new Error("Unknown type");
}
```

---

## 3) Observer

Suscriptor-subject.

```typescript
class Subject {
  private observers: Observer[] = [];

  subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  notify(data: any): void {
    this.observers.forEach(o => o.update(data));
  }
}
```

---

## 4) Strategy

Algoritmo intercambiable.

```typescript
class ShoppingCart {
  setStrategy(strategy: PaymentStrategy): void {
    this.strategy = strategy;
  }

  checkout(): void {
    this.strategy.pay(this.amount);
  }
}
```

---

## 5) Decorator

Agregar comportamiento dinámicamente.

```typescript
function withMilk(coffee: Coffee): Coffee {
  return {
    getCost: () => coffee.getCost() + 2,
    getDescription: () => coffee.getDescription() + ", milk"
  };
}
```

---

## Siguiente Paso

Continuar con más práctica o pasar a otro tema (DOM, Testing, etc.)
