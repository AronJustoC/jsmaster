console.log("Día 12 - POO: Intermedio con TypeScript");

// ============================================
// PARTE 1: Clases abstractas
// ============================================

// --- Ejercicio 1: clase abstracta ---
// DADO: figura geométrica
// RETORNAR: clase abstract Shape con método area()
abstract class Shape {
  // ENUNCIADO: Crear clase abstracta con:
  // - método abstract area(): number
  // Return: clase Shape
  abstract area(): number;
}

// --- Ejercicio 2: implementar clase abstracta ---
// DADO: subclase Circle
// RETORNAR: clase Circle que extiende Shape
class Circle extends Shape {
  // ENUNCIADO: Crear clase con:
  // - private radius
  // - implementar area() = PI * r²
  // Return: clase Circle
  private radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

// ============================================
// PARTE 2: Interfaces en clases
// ============================================

// --- Ejercicio 3: implementar interface ---
// DADO: interface Printable
// RETORNAR: clase Document que implemente Printable
interface Printable {
  // ENUNCIADO: Crear interface con método print(): void
  print(): void;
}

class Document1 implements Printable {
  // ENUNCIADO: Implementar interface
  // Return: clase Document
  print(): void {
    console.log("Printing document...");
  }
}

// --- Ejercicio 4: múltiples interfaces ---
// DADO: clase que implementa varias interfaces
// RETORNAR: clase User que implements Named y Identified
interface Named {
  // ENUNCIADO: Crear interface con name: string
  name: string;
}

interface Identified {
  // ENUNCIADO: Crear interface con id: number
  id: number;
}

class UserProfile implements Named, Identified {
  // ENUNCIADO: Implementar ambas interfaces
  // Return: clase UserProfile
  name: string;
  id: number;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

// ============================================
// PARTE 3: Polimorfismo
// ============================================

// --- Ejercicio 5: polimorfismo con herencia ---
// DADO: clases Employee y subclasses
// RETORNAR: función que usa polimorfismo
class Employee {
  // ENUNCIADO: Crear clase base con método calculatePay()
  calculatePay(): number {
    return 0;
  }
}

class FullTimeEmployee extends Employee {
  // ENUNCIADO: Calcular salario mensual
  private salary: number;
  constructor(salary: number) {
    super();
    this.salary = salary;
  }
  calculatePay(): number {
    return this.salary;
  }
}

class PartTimeEmployee extends Employee {
  // ENUNCIADO: Calcular salario por horas
  constructor(private hours: number, private rate: number) {
    super();
  }
  calculatePay(): number {
    return this.hours * this.rate;
  }
}

// Función que usa polimorfismo
function calculateTotalPay(employees: Employee[]): number {
  // ENUNCIADO: Sumar el calculatePay() de cada empleado
  // Return: número
  return employees.reduce((sum, emp) => sum + emp.calculatePay(), 0);
}

// ============================================
// PARTE 4: Composición vs Herencia
// ============================================

// --- Ejercicio 6: composición con mixins ---
// DADO: comportamiento reutilizable
// RETORNAR: clase que usa mixin
// ENUNCIADO: Crear mixin Logger y aplicarlo a una clase
function Logger<T extends new (...args: any[]) => any>(Constructor: T) {
  // Return: Constructor extendido con método log()
  return class extends Constructor {
    log(): void {
      console.log("Logging...");
    }
  };
}

// ============================================
// PARTE 5: Static
// ============================================

// --- Ejercicio 7: propiedades estáticas ---
// DADO: contador de instancias
// RETORNAR: clase con static counter
class Counter {
  // ENUNCIADO: Crear clase con:
  // - static count = 0
  // - constructor que incrementa count
  // - static getCount() que retorna count
  // Return: clase Counter
  static count: number = 0;

  constructor() {
    Counter.count++;
  }

  static getCount(): number {
    return Counter.count;
  }
}

// ============================================
// TESTS
// ============================================

console.log("\n--- TESTS ---");

// Test 1
try {
  const circle = new Circle(5);
  console.log(
    "ejercicio1-2:",
    Math.round(circle.area()) === 79 ? "ok" : "falló",
    circle.area(),
  );
} catch (e) {
  console.log("ejercicio1-2 error:", e.message);
}

// Test 3
try {
  const doc = new Document1();
  console.log("ejercicio3:", typeof doc.print === "function" ? "ok" : "falló");
} catch (e) {
  console.log("ejercicio3 error:", e.message);
}

// Test 4
try {
  const user = new UserProfile(1, "Ana");
  console.log(
    "ejercicio4:",
    user.name === "Ana" && user.id === 1 ? "ok" : "falló",
    user,
  );
} catch (e) {
  console.log("ejercicio4 error:", e.message);
}

// Test 5
try {
  const emps = [new FullTimeEmployee(3000), new PartTimeEmployee(20, 100)];
  const total = calculateTotalPay(emps);
  console.log("ejercicio5:", total === 5000 ? "ok" : "falló", total);
} catch (e) {
  console.log("ejercicio5 error:", e.message);
}

// Test 6
try {
  const LoggerClass = Logger(class {});
  const instance = new LoggerClass();
  console.log(
    "ejercicio6:",
    typeof instance.log === "function" ? "ok" : "falló",
  );
} catch (e) {
  console.log("ejercicio6 error:", e.message);
}

// Test 7
try {
  new Counter();
  new Counter();
  console.log(
    "ejercicio7:",
    Counter.getCount() === 2 ? "ok" : "falló",
    Counter.getCount(),
  );
} catch (e) {
  console.log("ejercicio7 error:", e.message);
}
