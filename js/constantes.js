export const PI = Math.PI
export let a = "si";
export let vector = [1, 2, 3, 4, 5];

let usuario = "pillo";
let passsword = "rios";
const hello = "hola"
export default hello;



export function saludar() {
    console.log("hola modulos ES6");
}

export class Usuario {
    constructor(nombre, contrasena) {
        this.nombre = nombre;
        this.contrasena = contrasena;
    }
}