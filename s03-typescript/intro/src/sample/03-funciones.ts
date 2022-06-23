
/*
    ===== Código de TypeScript =====
*/

// funcion tradicional
function sumar(a:number, b:number):string {
    return (a + b).toString();
}

// function de flecha
const sumarFlecha = (a:number, b:number):number => {
    return a + b;
}

// manejo de argumentos orden[ obligatorios, opcionales y agumentos con valor por defecto ]
function multiplicar( numero:number, otroNumero?:number, base:number = 2 ):number {
    return numero * base;
}

const resultado = multiplicar(5, 7);
console.log( resultado );