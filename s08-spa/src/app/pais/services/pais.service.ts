import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private ENDPOINT_NAME: string = environment.ENDPOINTS.NAME;

  constructor(
    private http: HttpClient
  ) { }

  buscarPais( termino:string ): Observable<any> {
    return this.http.get( `${this.ENDPOINT_NAME}/${ termino }`);
  }

}
