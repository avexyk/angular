
/*
    ===== Código de TypeScript =====
*/

let skills: string[] = ['Bash', 'Counter', 'Healing'];

interface Personaje {
    nombre: string;
    hp: number;
    skills: string[];
    origin?: string;
}


const personaje: Personaje = {
    nombre: 'Char',
    hp: 100,
    skills: ['Bash', 'Counter', 'Healing']
}

personaje.origin = 'Dark Tower';

console.table( personaje );