
/*
    ===== Código de TypeScript =====
*/

class Heroe {
    private alterEgo: string;
    public edad: number;
    static nombreReal: string;

    imprimirEdad() {
        return this.edad;
    }

}

// Estatico
// Heroe.nombreReal

const ironman = new Heroe();

console.log( ironman );
