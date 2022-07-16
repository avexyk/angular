import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Gif, SearchGifsResponse } from '../inteface/gifs.inteface';

@Injectable({
  // Lleva a un nivel global el service
  providedIn: 'root'
})
export class GifsService {

  // expone propiedad
  private _historial: string[] = [];
  private ENDPOINT = environment.ENDPOINTS.SEARCH;
  private ENDPOINT_KEY = environment.KEYS.GIFS_API;

  public resultados: Gif[] = [];

  get historial() {
    // romper la referencia con spread para exponer hacia afuera el contenido de la propiedad
    return [...this._historial];
  }

  constructor(
    private http: HttpClient,
  ) {
    // #1 Forma
    // if(localStorage.getItem('historial')) {
    //   this._historial = JSON.parse( localStorage.getItem('historial')! );
    // }

    // #2 Forma
    this._historial = JSON.parse( localStorage.getItem('historial')! ) || [];
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

      // guardar en localstorage
      localStorage.setItem('historial', JSON.stringify( this._historial ));
    }
    // console.log( this._historial );

    // #1 Metodo
    // fetch('https://api.giphy.com/v1/gifs/search?api_key=14s2sw4njNCpvFRIpZD65wniHDE2oc9b&q=Slam Dunk&limit=10')
    //     .then( resp => {
    //       resp.json().then( data => {
    //         console.log( data )
    //       })
    //     })

    // #2 Metodo
    // const resp = await fetch('https://api.giphy.com/v1/gifs/search?api_key=14s2sw4njNCpvFRIpZD65wniHDE2oc9b&q=Slam Dunk&limit=10');
    // const data = await resp.json();
    // console.log( data );

    // #3 Metodo
    this.http.get<SearchGifsResponse>(`${ this.ENDPOINT }?api_key=${ this.ENDPOINT_KEY }&q=${ query }&limit=10`)
        .subscribe( resp => {
          this.resultados = resp.data;
        })

  }

}
