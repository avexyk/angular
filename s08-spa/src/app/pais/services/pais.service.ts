import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private ENDPOINT_NAME: string = environment.ENDPOINTS.NAME;
  private ENDPOINT_CAPITAL: string = environment.ENDPOINTS.CAPITAL;

  constructor(
    private http: HttpClient
  ) { }

  buscarPais( termino:string ): Observable<Country[]> {
    return this.http.get<Country[]>( `${this.ENDPOINT_NAME}/${ termino }`);
    
    // Manejo de errores con rxjs
    // return this.http.get( `${this.ENDPOINT_NAME}/${ termino }`)
    //                 .pipe(
    //                   // of: funcion que genera observables, todo lo que hay entre parentesis
    //                   catchError( err => of([]) )
    //                 );

  }

  buscarCapital( termino: string ): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.ENDPOINT_CAPITAL}/${ termino }`);
  }

}
