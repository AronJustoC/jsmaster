console.log("Día 13 - POO: Patrones de Diseño con TypeScript");

// ============================================
// PARTE 1: Singleton
// ============================================

// --- Ejercicio 1: Singleton pattern ---
// DADO: clase Database
// RETORNAR: Singleton de base de datos
class Database {
  // ENUNCIADO: Crear singleton con:
  // - constructor privado
  // - método estático getInstance()
  // - retorna siempre la misma instancia
  // Return: clase Database
}

// ============================================
// PARTE 2: Factory
// ============================================

// --- Ejercicio 2: Factory pattern ---
// DADO: tipos de notificación
// RETORNAR: factory que crea notificaciones
interface Notification {
  send(message: string): void;
}

class EmailNotification implements Notification {
  send(message: string): void {
    console.log("Email:", message);
  }
}

class SMSNotification implements Notification {
  send(message: string): void {
    console.log("SMS:", message);
  }
}

class PushNotification implements Notification {
  send(message: string): void {
    console.log("Push:", message);
  }
}

function createNotification(type: "email" | "sms" | "push"): Notification {
  // ENUNCIADO: Factory que retorna la notificación correcta
  // Return: Notification
}

// ============================================
// PARTE 3: Observer
// ============================================

// --- Ejercicio 3: Observer pattern ---
// DADO: suscriptor de eventos
// RETORNAR: sistema de observer
interface Observer {
  update(data: any): void;
}

class Subject {
  // ENUNCIADO: Crear Subject con:
  // - array de observers
  // - método subscribe(observer)
  // - método unsubscribe(observer)
  // - método notify(data)
  // Return: clase Subject
}

// ============================================
// PARTE 4: Strategy
// ============================================

// --- Ejercicio 4: Strategy pattern ---
// DADO: algoritmo de pago
// RETORNAR: estrategia de pago intercambiable
interface PaymentStrategy {
  pay(amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ${amount} with Credit Card`);
  }
}

class PayPalPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ${amount} with PayPal`);
  }
}

class ShoppingCart {
  // ENUNCIADO: Crear carrito con:
  // - propiedad strategy: PaymentStrategy
  // - método setStrategy(strategy)
  // - método checkout()
  // Return: clase ShoppingCart
}

// ============================================
// PARTE 5: Decorator
// ============================================

// --- Ejercicio 5: Decorator pattern ---
// DADO: café con toppings
// RETORNAR: café decorado
interface Coffee {
  getCost(): number;
  getDescription(): string;
}

class SimpleCoffee implements Coffee {
  getCost(): number {
    return 10;
  }

  getDescription(): string {
    return "Simple coffee";
  }
}

function withMilk(coffee: Coffee): Coffee {
  // ENUNCIADO: Decorator que agrega leche
  // Return: Coffee
}

function withSugar(coffee: Coffee): Coffee {
  // ENUNCIADO: Decorator que agrega azúcar
  // Return: Coffee
}

// ============================================
// TESTS
// ============================================

console.log("\n--- TESTS ---");

// Test 1
try {
  const db1 = Database.getInstance();
  const db2 = Database.getInstance();
  console.log("ejercicio1:", db1 === db2 ? "ok" : "falló");
} catch (e) {
  console.log("ejercicio1 error:", e.message);
}

// Test 2
try {
  const notif = createNotification("sms");
  notif.send("Hola");
  console.log("ejercicio2:", typeof notif.send === "function" ? "ok" : "falló");
} catch (e) {
  console.log("ejercicio2 error:", e.message);
}

// Test 3
try {
  const subject = new Subject();
  const observer = { update: (data: any) => console.log("Notified:", data) };
  subject.subscribe(observer);
  subject.notify("test");
  console.log("ejercicio3: ok");
} catch (e) {
  console.log("ejercicio3 error:", e.message);
}

// Test 4
try {
  const cart = new ShoppingCart();
  cart.setStrategy(new CreditCardPayment());
  cart.checkout();
  console.log("ejercicio4: ok");
} catch (e) {
  console.log("ejercicio4 error:", e.message);
}

// Test 5
try {
  let coffee = new SimpleCoffee();
  coffee = withMilk(coffee);
  coffee = withSugar(coffee);
  console.log("ejercicio5:", coffee.getDescription().includes("milk") && coffee.getDescription().includes("sugar") ? "ok" : "falló", coffee.getDescription());
} catch (e) {
  console.log("ejercicio5 error:", e.message);
}
