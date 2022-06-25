
/*
    ===== Código de TypeScript =====
*/

// ? significa que la propiedad es opcional

interface Pasajero {
    nombre: string,
    hijos?: string[]
}

const p1: Pasajero = {
    nombre: 'Francisco'
}

const p2: Pasajero = {
    nombre: 'Char',
    hijos: ['Amuro', 'Lala']
}

function imprimeHijos( pasajero: Pasajero ): void {

    // Trate de evaluar si tiene esa propieda en caso de que no devolver un undefined, encadena un OR que devuelve un 0 en caso de undefined
    const cuantosHijos = pasajero.hijos?.length || 0;
    console.log( cuantosHijos );

}

imprimeHijos( p1 );