import { Injectable } from '@angular/core';

@Injectable({
  // Lleva a un nivel global el service
  providedIn: 'root'
})
export class GifsServiceService {

  // expone propiedad
  private _historial: string[] = [];

  constructor() { }

  get historial() {
    // romper la referencia con spread para exponer hacia afuera el contenido de la propiedad
    return [...this._historial];
  }

  buscarGifs( query: string = '' ) {

    // se considera repetido aunque sea mayusculas o minusculas o espacios agregados
    query = query.trim().toLocaleLowerCase();

    // inserto valores que no existen
    if( !this._historial.includes( query ) ) {
      // inserta ultimo valor como primero
      this._historial.unshift( query );
      // limita la cantidad de elementos en el arreglo a 10
      this._historial = this._historial.splice(0, 10);
    }
    console.log( this._historial );
  }

}
