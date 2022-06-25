
/*
    ===== Código de TypeScript =====
*/

// Los decoradores sirven para cambiar la clase den el momento que son definidas


function classDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
    ) {
        return class extends constructor {
            newPoperty = "new property";
            hello = "override";
    };
}

@classDecorator
class MiSuperClase {
    public miPropiedad: string = 'ABC123';

    imprimir() {
        console.log( 'Hola Mundo' );
    }
}

console.log( MiSuperClase );

const miClase = new MiSuperClase();
console.log( miClase.miPropiedad );
