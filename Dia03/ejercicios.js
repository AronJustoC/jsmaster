console.log("Dia 03 - ES6+, Closures y This");

// --- Destructuring de objetos ---
function obtenerNombreYEdad(usuario) {
  // EXTRAE nombre y edad usando destructuring
  // Return: "Luna tiene 25 años"
  let {nombre, edad} = usuario;
  return `${nombre} tiene ${edad} años`
}

// --- Destructuring de arrays ---
function obtenerPrimerYSegundo(array) {
  // EXTRAE primer y segundo elemento
  // Return: { primero: 10, segundo: 20 }
  let [primero, segundo] = array;
  return {primero, segundo};
}

// --- Spread operator ---
function combinarArrays(arr1, arr2) {
  // COMBINA dos arrays usando spread
  return [...arr1, ...arr2];
}

// --- Closure (contador) ---
function crearContador() {
  // CREA un closure que cuenta llamadas
  // Return: función que retorna 1, 2, 3...
  let contador = 0;
  return function() {
    contador++;
    return contador;
  };
}

// --- Closure (fabrica) ---
function crearSaludo(saludo) {
  // CREA función que usa el saludo
  // Return: función que recibe nombre y retorna "Hola, Juan!"
  return function(nombre) {
    return `${saludo}, ${nombre}!`;
  };
}

// --- This en objetos ---
const usuario = {
  nombre: "Ana",
  saludar() {
    // RETURN string con this.nombre
    return `Hola ${this.nombre}`
  }
};

// --- Arrow y this ---
const robot = {
  nombre: "Robot",
  saludar: () => {
    // Arrow no tiene own this
    return `Hola soy ${this.nombre}`;
  }
};

// --- bind() ---
function presentar() {
  return `Soy ${this.nombre}`;
}

function crearPresentador(persona) {
  // Usa bind para vincular this
  return presentar.bind(persona);
}

// TESTS
console.log("\n--- TESTS ---");
console.log("obtenerNombreYEdad:", obtenerNombreYEdad({ nombre: "Luna", edad: 25 }));
console.log("obtenerPrimerYSegundo:", obtenerPrimerYSegundo([10, 20, 30]));
console.log("combinarArrays:", combinarArrays([1, 2], [3, 4]));

const contador1 = crearContador();
console.log("contador:", contador1(), contador1(), contador1());

const saludarHola = crearSaludo("Hola");
console.log("saludarHola:", saludarHola("Mundo"));

console.log("usuario.saludar:", usuario.saludar());
console.log("robot.saludar:", robot.saludar());

const presentarAna = crearPresentador({ nombre: "Ana" });
console.log("presentarAna:", presentarAna());
