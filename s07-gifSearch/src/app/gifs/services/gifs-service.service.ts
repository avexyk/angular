import { HttpClient, HttpParams } from '@angular/common/http';
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
    // recuperar el historial de busqueda acumulativo
    this._historial = JSON.parse( localStorage.getItem('historial')! ) || [];

    // recuperar el ultimo resultado de busqueda unico
    this.resultados = JSON.parse( localStorage.getItem('resultado')! ) || [];
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

      // guardar busquedas en localstorage
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

    // contruccion de parametros
    const parametros = new HttpParams()
          .set( 'api_key', this.ENDPOINT_KEY )
          .set( 'q', query )
          .set( 'limit', '10' );

    // #3 Metodo
    this.http.get<SearchGifsResponse>(`${ this.ENDPOINT }`, { params: parametros } )
        .subscribe( resp => {
          this.resultados = resp.data;
          // guardar ultimo resultado de busqueda
          localStorage.setItem('resultado', JSON.stringify( this.resultados ));
        })

  }

}
