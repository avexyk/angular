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

  buscarGifs( query: string ) {
    this._historial.unshift( query );
    console.log( this._historial );
  }

}
