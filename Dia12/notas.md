# Notas - Día 12 (POO: Intermedio con TypeScript)

## 1) Clases Abstractas

```typescript
abstract class Shape {
  abstract area(): number;
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}
```

---

## 2) Interfaces en Clases

```typescript
interface Printable {
  print(): void;
}

interface Identified {
  id: number;
}

class Document implements Printable, Identified {
  id: number;
  
  constructor(id: number) {
    this.id = id;
  }

  print(): void {
    console.log("Printing...");
  }
}
```

---

## 3) Polimorfismo

```typescript
class Employee {
  calculatePay(): number {
    return 0;
  }
}

class FullTimeEmployee extends Employee {
  constructor(private salary: number) {
    super();
  }

  calculatePay(): number {
    return this.salary;
  }
}

function totalPay(employees: Employee[]): number {
  return employees.reduce((sum, emp) => sum + emp.calculatePay(), 0);
}
```

---

## 4) Static

```typescript
class Counter {
  static count: number = 0;

  constructor() {
    Counter.count++;
  }

  static getCount(): number {
    return Counter.count;
  }
}
```

---

## Siguiente Día

Día 13: Patrones de diseño - Singleton, Factory, Observer, Strategy, Decorator
