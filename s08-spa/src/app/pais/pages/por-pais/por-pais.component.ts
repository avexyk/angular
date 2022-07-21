import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {

  termino: string = "TERMINO";
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(
    private paisService: PaisService,
  ) { }

  ngOnInit(): void {
  }

  buscar( termino: string ): void {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais( this.termino )
        .subscribe({
          next: paises => {
            console.log( paises );
            this.paises = paises;
          },
          error: err => {
            console.log( 'Error' );
            console.error( err );
            this.paises = [];
            this.hayError = true;
          },
          complete: () => {
            console.info('search name complete');
          }
        });
  }

  sugerencias( termino: string ) {
    this.hayError = false;
    // TODO: Crear sugerencias
  }

}
