console.log("Día 05 - Fetch API y APIs Públicas");

// --- Ejercicio 1: fetch básico GET ---
async function obtenerUsuario(id) {
  // USAR fetch para obtener usuario de JSONPlaceholder
  // URL: https://jsonplaceholder.typicode.com/users/{id}
  // Return: objeto con datos del usuario
  // Manejar errores con try/catch
}

// --- Ejercicio 2: GET con query params ---
async function buscarPosts(texto) {
  // BUSCAR posts que contengan texto en JSONPlaceholder
  // URL: https://jsonplaceholder.typicode.com/posts?q={texto}
  // Return: array de posts encontrados
}

// --- Ejercicio 3: POST - crear recurso ---
async function crearPost(titulo, cuerpo, usuarioId) {
  // CREAR un nuevo post en JSONPlaceholder
  // URL: https://jsonplaceholder.typicode.com/posts
  // Method: POST
  // Body: { title, body, userId }
  // Return: post creado con ID
}

// --- Ejercicio 4: PUT - actualizar recurso ---
async function actualizarPost(id, titulo, cuerpo) {
  // ACTUALIZAR un post existente
  // URL: https://jsonplaceholder.typicode.com/posts/{id}
  // Method: PUT
  // Body: { title, body, userId: 1 }
  // Return: post actualizado
}

// --- Ejercicio 5: DELETE - eliminar recurso ---
async function eliminarPost(id) {
  // ELIMINAR un post
  // URL: https://jsonplaceholder.typicode.com/posts/{id}
  // Method: DELETE
  // Return: {} vacío si exitoso
}

// --- Ejercicio 6: Manejo de estados (loading/error/success) ---
async function fetchConEstado(url) {
  // CREAR función que retorna objeto con:
  // { loading: boolean, data: any, error: string|null }
  // Simular delay para mostrar estados
}

// --- Ejercicio 7: Fetch a múltiples endpoints ---
async function obtenerDatosCompletos(userId) {
  // OBTENER en paralelo:
  // - Usuario: /users/{userId}
  // - Posts: /posts?userId={userId}
  // - Albums: /albums?userId={userId}
  // USAR Promise.all
  // Return: { usuario, posts, albums }
}

// --- Ejercicio 8: Retry automático con fetch ---
async function fetchConRetry(url, maxIntentos) {
  // IMPLEMENTAR retry automático
  // Si falla, reintentar hasta maxIntentos
  // Entre intentos, esperar 1 segundo
  // Return: respuesta o lanzar error final
}

// --- Ejercicio 9: Consumir API de Rick and Morty ---
async function obtenerPersonajesRickMorty() {
  // OBTENER personajes de Rick and Morty API
  // URL: https://rickandmortyapi.com/api/character
  // Return: array de personajes (name, status, species)
}

// --- Ejercicio 10: Consumir API de Pokémon ---
async function obtenerPokemon(nombre) {
  // OBTENER datos de un Pokémon
  // URL: https://pokeapi.co/api/v2/pokemon/{nombre}
  // Return: { name, height, weight, types }
}

// --- Utilidad ---
function esperarMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// --- TESTS ---
console.log("\n--- TESTS ---");

// Test 1
obtenerUsuario(1)
  .then(r => console.log("ejercicio1:", r?.name || "falló"))
  .catch(e => console.log("ejercicio1 error:", e.message));

// Test 2
buscarPosts("lorem")
  .then(r => console.log("ejercicio2:", r.length, "posts"))
  .catch(e => console.log("ejercicio2 error:", e.message));

// Test 3
crearPost("Mi título", "Mi cuerpo", 1)
  .then(r => console.log("ejercicio3:", r?.id ? "creado" : "falló"))
  .catch(e => console.log("ejercicio3 error:", e.message));

// Test 4
actualizarPost(1, "Título actualizado", "Cuerpo actualizado")
  .then(r => console.log("ejercicio4:", r?.title ? "actualizado" : "falló"))
  .catch(e => console.log("ejercicio4 error:", e.message));

// Test 5
eliminarPost(1)
  .then(r => console.log("ejercicio5:", "eliminado"))
  .catch(e => console.log("ejercicio5 error:", e.message));

// Test 6
fetchConEstado("https://jsonplaceholder.typicode.com/users/1")
  .then(r => console.log("ejercicio6:", r.loading ? "loading" : "listo"))
  .catch(e => console.log("ejercicio6 error:", e.message));

// Test 7
obtenerDatosCompletos(1)
  .then(r => console.log("ejercicio7:", r.usuario?.name, "-", r.posts?.length, "posts"))
  .catch(e => console.log("ejercicio7 error:", e.message));

// Test 8
fetchConRetry("https://jsonplaceholder.typicode.com/users/1", 3)
  .then(r => console.log("ejercicio8:", r?.name || "falló"))
  .catch(e => console.log("ejercicio8 error:", e.message));

// Test 9
obtenerPersonajesRickMorty()
  .then(r => console.log("ejercicio9:", r.length, "personajes"))
  .catch(e => console.log("ejercicio9 error:", e.message));

// Test 10
obtenerPokemon("pikachu")
  .then(r => console.log("ejercicio10:", r?.name, "-", r?.types?.[0]?.type?.name))
  .catch(e => console.log("ejercicio10 error:", e.message));
