
/*
    ===== Código de TypeScript =====
*/

class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string
    ) {}
}

class Heroes extends PersonaNormal {
    constructor( 
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ) {
        // El 'super' llama a la clase de la cual se extiende
        super( nombreReal, 'New York, USA' );
    }
}

const person = new Heroes('Char', 24, 'Amuro');

console.log( person );
