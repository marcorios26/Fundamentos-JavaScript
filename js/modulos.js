import hello, { Usuario, PI, vector } from "./constantes.js"; //./ para indicar que busque desde mi ubicacion
import { aritmetica as calculos } from "./aritmetica.js";
//import { vector } from "./constantes.js";
console.log(PI);
//console.log(aritmetica.multiplicar(3, 4));
console.log(calculos.sumar(2, 3));
console.log(hello);
let marco = new Usuario("marco", "12345678");
console.log(marco);
console.log("hola")
console.log(vector);