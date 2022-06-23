
/*
    ===== Código de TypeScript =====
*/

interface PersonajeGame {
    nombre: string,
    hp: number,
    // mostrarHp: (a:number, b:number, c:number) => void,
    mostrarHp: () => void,
}

function curar( personaje:PersonajeGame, hp:number):void {
    personaje.hp += hp;
    console.log( personaje );
}

const nuevoPersonaje: PersonajeGame = {
    nombre: 'Char',
    hp: 50,
    mostrarHp() {
        console.log( this.hp );
    }
}

curar( nuevoPersonaje, 35 );
nuevoPersonaje.mostrarHp();
