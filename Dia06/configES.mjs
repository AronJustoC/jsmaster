// configES.js - Ejercicio 5: default export
export default class Config {
  constructor() {
    this.env = 'development';
  }
  
  saludar() {
    return `Hola desde ${this.env}`;
  }
}
