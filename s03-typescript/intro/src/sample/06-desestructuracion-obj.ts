
/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number,
    segundo: number,
    cancion: string,
    detalle: Detalles,
}

interface Detalles {
    autor: string,
    anio: number
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'When You Sleep',
    detalle: {
        autor: 'My Bloody Valentine',
        anio: 1990,
    }
}

// Desestructuracion
// const { volumen, segundo, cancion, detalle: { anio, autor: autorDetalle } } = reproductor;
const { volumen: vol, segundo, cancion, detalle } = reproductor;
const { autor, anio } = detalle

console.log( 'El volumen actual es: ', vol );
console.log( 'El segundo actual es: ', segundo );
console.log( 'La cancion actual es: ', cancion );
console.log( 'El autor es: ', autor);