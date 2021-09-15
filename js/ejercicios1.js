//ejercicio 1

const cuentaCaracteres = cadena => {
    if (typeof(cadena) === "string") {
        console.log(cadena.length());
    } else {
        console.log("su parametro no es una cadena");
    }


}


//ejercicio 2

const recortaCadena = (cadena, caracteres = undefined) => {
    if (typeof(cadena) === "string" && typeof(caracteres) === "number") {
        caracteres = Math.abs(caracteres);
        if (caracteres === cadena.length) {
            console.log(`la nueva cadena es: ${cadena}`);
        } else if (caracteres > cadena.length) {
            console.log("el valor ingresado es mas grande a su cadena");
        } else {
            console.log(`la nueva cadena es: ${cadena.slice(0,caracteres)}`);
        }
    } else {
        alert("Error ingrese una cadena y luego un numero por favor")
    }
}

//ejercicio 3

const separarCadena = (cadena = "", caracter = undefined) => {
    let array = cadena.split(caracter);
    console.log(array);
}

//ejercicio 4
const repetirCadena = (cadena = "", veces = undefined) => console.log(cadena.repeat(veces));
//ejercicio 5
const invertirCadena = (cadena = "") => console.log(cadena.split("").reverse().join(""));
//ejercicio 6
const contarPalabras = (cadena = "", palabra = "") => {
        let EXPRESIONREGULAR = new RegExp(palabra, "ig");
        let ARRAYCADENAS = cadena.match(EXPRESIONREGULAR);
        console.log(ARRAYCADENAS.length);
    }
    //ejercicio 7
const palindromo = (cadena = "") => {
    let inverso = cadena.split("").reverse().join("");
    if (cadena.toLowerCase === inverso.toLowerCase) {
        return "es [palindromo";
    } else {
        return "no es palindromo"
    }
}

//EJERCICIO 8
const eliminaPatron = (cadena = "", patron = "") =>
    (!texto) ?
    console.warn("No ingresaste ningun texto a evaluar") :
    (!patron) ?
    console.warn("introduce un patron para eliminarlo del texto") :
    console.info(cadena.replace(new RegExp(patron, "ig"), ""))

//ejercicio 9
const numerosAleatoriosEnUnRango = (INICIO = undefined, FIN = undefined) => console.log(Math.round(Math.random() * (FIN - INICIO) + INICIO));
//ejercicio 10
const verificaCapicua = (numero = undefined) => {
        if (numero < 10) {
            return true;
        } else {

            let numero2 = 0;
            num = numero;
            while (numero !== 0) {
                numero2 = (numero2 * 10) + (numero % 10);
                numero = Math.floor(numero / 10);

            }
            if (num === numero2) {
                return true;
            } else {
                return false;
            }
        }
    }
    //ejercico 11

const factorial = (numero = undefined) => {
        if (numero === 0) {
            return 1;
        } else {
            return factorial(numero - 1) * numero;
        }
    }
    //ejercicio 12

const verificaPrimo = (numero = undefined) => {
    let CONTADOR = true;;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            CONTADOR = false;
            break;
        }
    }

}

//ejercicio 13
const verificaPar = (numero = undefined) => {
        if (numero === undefined) return console.warn("no ingresaste ningun dato");
        if (typeof(numero) !== "number") return console.error("no ingresaste un numero");
        if (Math.sign(numero) === -1) return console.error("el numero no puede ser negativo");
        if (numero % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }
    //ejercicio 14
const convertorGrados = (grados = undefined, tipo = "") => {
        if (tipo === "C") {
            console.log(`${grados} grados ${tipo}  son:` + ((grados * (9 / 5)) + 32) + "F");
        } else {
            console.log(`${grados} grados ${tipo}  son:` + ((grados - 32) * (5 / 9)) + "C");
        }

    }
    //************************PARTE 5 *************/

//ejercicio 15
const conversorDigitos = (digito = undefined, base = undefined) => {
        if (base === 10) {
            console.log(digito.toString(2))
        } else if (base === 2) {
            digito += "";
            console.log(parseInt(digito, 2));
        } else {
            console.warn("el digito o la base no esta en el rango");
        }
    }
    //ejercicio 16
const aplicaDescuento = (monto = undefined, descuento = undefined) => {
        if (typeof(monto) === "number" && typeof(descuento) === "number") {
            console.log("El monto total con el descuento es: " + monto - ((monto * descuento) / 100));
        } else {
            console.error("ingrese un numero para el monto como para el decuento");
        }
    }
    //ejercicio 17
const cuentaAnios = (fecha = undefined) => {
        if (fecha === undefined) console.warn("no ingresaste una fecha");
        if (!(fecha instanceof Date)) { console.error("el valor que introduciste no es una fecha") }

        let fechaDeHoy = new Date().getTime() - fecha.getTime()
        aniosenMs = 1000 * 60 * 60 * 24 * 365;
        let anioshumanos = Math.floor(fechaDeHoy / aniosenMs);

        return (Math.sign(fechaDeHoy) === -1) ?
            console.log(`faltan ${Math.abs(anioshumanos)} para el anio ${fecha.getFullYear()}`) :
            (Math.sign(fechaDeHoy) === 1) ?
            console.log(`han transcurrido ${anioshumanos} anios`) :
            console.log("estamos en el mismo anio");
    }
    //ejercicio 18
const cuentaVocalesConsonantes = (cadena = "") => {
        let vocales = 0;
        consonantes = 0;
        for (let letra of cadena) {
            if (/[aeiouáéíóúüö]/.test(letra)) vocales++;
            if (/[cdfghijklmnopqrstvwxyzñ]/.test(letra)) consonantes++;
        }
        return console.info(cadena, vocales, consonantes);
    }
    //ejercicio 19
const validarNombre = (nombre = "") => {
        if (typeof nombre === "undefined") return console.warn("no ingresaste un nombre")
        if (typeof nombre !== "string") return console.error("No ingresaste una cadena")

        let expReg = /^[A-Za-záéíóúÁÉÍÓÚÖÜüñÑ\s]+$/g.test(nombre);

        return (expReg) ?
            console.info(`${nombre} : es un nombre valido`) :
            console.info(`${nombre} : no es un nombre valido`);
    }
    //ejercicio 20
const validarCorreo = (correo = "") => {
        if (!correo) return console.warn("No ingresaste ningun dato")
        if (typeof correo !== "string") return console.error("El dato ingresado no es una cadena");

        let expReg = /([0-9A-Za-záéíóúÁÉÍÓÚÖÜüñÑ\.])@(gmail|hotmail|aol|outlook).(com)+$/g.test(correo);

        return (expReg) ?
            console.info("correo valido") :
            console.info('correo invalido')

    }
    //ejercicio 21
const elevarNumeros = (vector = undefined) => {
    if (vector instanceof Array) {
        let vector2 = [];
        for (let valor of vector) {
            vector2.push(Math.pow(valor, 2));
        }

        return console.info(`${vector} ahora es: ${vector2}`)

    }
}
const elevarNumeros2 = (vector = undefined) => {
        if (vector instanceof Array) {
            let newvector = vector.map(val => val * val);
            return console.info(`${newvector}`);
        }
    }
    //ejercicio 22
const minMax = (vector = undefined) => {
        if (vector instanceof Array) {
            let arra = [];
            arra.push(Math.max(...vector));
            arra.push(Math.min(...vector));
        }
        console.info(arra);
    }
    //ejercicio 23
const separaParesImpares = (vector = undefined) => {
        let pares = [];
        impares = [];
        if (vector instanceof Array) {
            pares = vector.filter(x => x % 2 === 0);
            impares = vector.filter(x => x % 2 === 1);
        }
        return console.info({
            pares,
            impares
        })
    }
    //ejercicio 24
const ordenarVector = (vector = undefined) => {
        if (vector instanceof Array) {
            function comparar(a, b) {
                return a - b
            };

            function comparar2(a, b) {
                return b - a
            };
            let Ascendente = vector.slice();
            descendente = vector.slice();
            return console.log({
                vector_original: vector,
                Ascendente: Ascendente.sort(comparar2),
                descendente: descendente.sort(comparar)
            })
        }

    }
    /*24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

*/

const eliminaRepetidos = (vector = undefined) => {
        let vectorNuevo = [];
        if (vector instanceof Array) {

            vectorNuevo = vector.filter((a, b) => {
                return vector.indexOf(a) === b
            })
            console.log(vectorNuevo);
        }
    }
    /*

    26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.*/

const promedioArreglo = (vector = undefined) => {
    if (vector instanceof Array) {
        let suma = 0;
        vector.forEach(element => {
            suma += element;
        });
        console.log(`el promedio es: ${suma/vector.length}`);
    }
}