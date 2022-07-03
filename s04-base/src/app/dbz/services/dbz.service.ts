import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interfaces';

@Injectable()
export class DbzService {

    // Orden servicio: Propiedades, getter y setter, constructor y metodos

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 7500
        }
    ];

    // separa los elementos que tiene este arreglo y crea uno nuevo
    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    constructor() {}

    agregarPersonaje( personaje: Personaje ) {
        this._personajes.push( personaje );
    }

}