# Notas - Dia 08 (npm install, lockfile y node_modules)

## 1) Que hace `npm install`

- Lee `package.json`
- Resuelve versiones (segun SemVer)
- Descarga paquetes al cache
- Instala en `node_modules/`
- Actualiza `package-lock.json`

Si ejecutas `npm install <paquete>`:

- Agrega el paquete a `dependencies` (runtime)

Si ejecutas `npm install -D <paquete>`:

- Agrega el paquete a `devDependencies` (tooling)

---

## 2) Que hace `npm ci`

`npm ci` esta pensado para CI (y para reproducibilidad):

- Usa el lockfile como fuente de verdad
- Borra `node_modules` y reinstala limpio
- Falla si el lockfile no coincide con `package.json`

---

## 3) package-lock.json (por que importa)

El lockfile fija el arbol exacto instalado (incluye dependencias transitivas).

Beneficios:

- Instalacion repetible (misma version en otra maquina)
- Builds mas estables
- Menos "funciona en mi maquina"

---

## 4) node_modules y resolucion

`node_modules` puede crecer rapido porque cada dependencia trae sus propias dependencias.

Durante `npm run`, npm agrega `node_modules/.bin` al PATH.
Por eso podes llamar herramientas como `prettier` desde scripts.

---

## Siguiente Paso

- Probar `npm install` y ver como cambia el lockfile
- Entender `npx`
- Empezar con bundlers (Vite) cuando esto ya sea natural
