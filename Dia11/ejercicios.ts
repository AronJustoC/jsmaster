console.log("Día 11 - POO: Fundamentos con TypeScript");

// ============================================
// PARTE 1: Clases y constructores
// ============================================

// --- Ejercicio 1: crear clase básica ---
// DADO: datos de una persona
// RETORNAR: clase Person con propiedades y método
class Person {
  // ENUNCIADO: Crear clase con nombre, edad, email y método greet()
  // Return: clase Person
  nombre: string;
  edad: number;
  email: string;

  constructor(nombre: string, edad: number, email: string) {
    this.nombre = nombre;
    this.edad = edad;
    this.email = email;
  }

  greet() {
    return `Hola ${this.nombre} tienes ${this.edad} anios y tu email es: ${this.email}`;
  }
}

// --- Ejercicio 2: constructor con tipos ---
// DADO: parámetros para crear un producto
// RETORNAR: clase Product con constructor tipado
class Product {
  // ENUNCIADO: Crear clase con id, nombre, precio
  // Usar constructor para inicializar
  // Return: clase Product
  id: number;
  nombre: string;
  precio: number;

  constructor(id: number, nombre: string, precio: number) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
}

// ============================================
// PARTE 2: Modificadores de acceso
// ============================================

// --- Ejercicio 3: public y private ---
// DADO: una clase con propiedades públicas y privadas
// RETORNAR: clase BankAccount con balance privado
class BankAccount {
  // ENUNCIADO: Crear clase con:
  // - public: accountNumber
  // - private: _balance
  // - método deposit() que suma al balance
  // - método getBalance() que retorna el balance
  // Return: clase BankAccount
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

// --- Ejercicio 4: readonly ---
// DADO: una clase con propiedad inmutable
// RETORNAR: clase User con id readonly
class User {
  // ENUNCIADO: Crear clase con:
  // - readonly id
  // - mutable name
  // - método updateName()
  // Return: clase User
  readonly id: number;
  nombre: string;
  constructor(id: number, nombre: string) {
    this.id = id;
    this.nombre = nombre;
  }
  updateName(nuevoNombre: string): void {
    this.nombre = nuevoNombre;
  }
}

// ============================================
// PARTE 3: Herencia
// ============================================

// --- Ejercicio 5: herencia con extends ---
// DADO: clase Animal base y subclase Dog
// RETORNAR: clase Dog que extiende Animal
class Animal {
  // ENUNCIADO: Crear clase base con nombre y método speak()
  // Return: clase Animal
  nombre: string;
  constructor(nombre: string) {
    this.nombre = nombre;
  }
  speak(): string {
    return "Sonido";
  }
}

class Dog extends Animal {
  // ENUNCIADO: Extender Animal, sobrescribir speak()
  // Return: clase Dog
  speak(): string {
    return "Woof!";
  }
}

// --- Ejercicio 6: super y protected ---
// DADO: clase Employee y subclase Manager
// RETORNAR: clase Manager que usa super y tiene acceso protected
class Employee1 {
  // ENUNCIADO: Crear clase base con:
  // - protected salary
  // - public name
  // Return: clase Employee
  protected salary: number;
  public name: string;
  constructor(name: string, salary: number) {
    this.salary = salary;
    this.name = name;
  }
}

class Manager extends Employee1 {
  // ENUNCIADO: Extender Employee, usar super en constructor
  // - método getSalary() que retorna salary
  // Return: clase Manager
  constructor(name: string, salary: number) {
    super(name, salary);
  }
  getSalary(): number {
    return this.salary;
  }
}

// ============================================
// PARTE 4: Getters y Setters
// ============================================

// --- Ejercicio 7: getter y setter ---
// DADO: una clase con propiedad con lógica
// RETORNAR: clase Temperature con getter/setter para Celsius
class Temperature {
  // ENUNCIADO: Crear clase con:
  // - private _celsius
  // - getter celsius
  // - setter celsius (validar que sea número)
  // Return: clase Temperature
  private _celsius: number;
  get celsius(): number {
    return this._celsius;
  }
  set celsius(value: number) {
    if (typeof value === "number") {
      this._celsius = value;
    }
  }
}

// ============================================
// TESTS
// ============================================

console.log("\n--- TESTS ---");

// Test 1
try {
  const p = new Person("Ana", 30, "ana@email.com");
  console.log("ejercicio1:", p.greet ? "ok" : "falló", p);
} catch (e) {
  console.log("ejercicio1 error:", e.message);
}

// Test 2
try {
  const prod = new Product(1, "Laptop", 999);
  console.log("ejercicio2:", prod.nombre === "Laptop" ? "ok" : "falló", prod);
} catch (e) {
  console.log("ejercicio2 error:", e.message);
}

// Test 3
try {
  const cuenta = new BankAccount("12345", 1000);
  cuenta.deposit(500);
  console.log(
    "ejercicio3:",
    cuenta.getBalance() === 1500 ? "ok" : "falló",
    cuenta.getBalance(),
  );
} catch (e) {
  console.log("ejercicio3 error:", e.message);
}

// Test 4
try {
  const user = new User(1, "Juan");
  user.updateName("Pedro");
  console.log(
    "ejercicio4:",
    user.nombre === "Pedro" ? "ok" : "falló",
    user.nombre,
  );
} catch (e) {
  console.log("ejercicio4 error:", e.message);
}

// Test 5
try {
  const dog = new Dog("Buddy");
  console.log(
    "ejercicio5:",
    dog.speak() === "Woof!" ? "ok" : "falló",
    dog.speak(),
  );
} catch (e) {
  console.log("ejercicio5 error:", e.message);
}

// Test 6
try {
  const mgr = new Manager("Laura", 5000);
  console.log(
    "ejercicio6:",
    mgr.getSalary() === 5000 ? "ok" : "falló",
    mgr.getSalary(),
  );
} catch (e) {
  console.log("ejercicio6 error:", e.message);
}

// Test 7
try {
  const temp = new Temperature();
  temp.celsius = 25;
  console.log(
    "ejercicio7:",
    temp.celsius === 25 ? "ok" : "falló",
    temp.celsius,
  );
} catch (e) {
  console.log("ejercicio7 error:", e.message);
}
