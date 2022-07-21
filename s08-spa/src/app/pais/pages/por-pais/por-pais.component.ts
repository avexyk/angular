import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {

  termino: string = "TERMINO";
  hayError: boolean = false;

  constructor(
    private paisService: PaisService,
  ) { }

  ngOnInit(): void {
  }

  buscar(): void {
    this.hayError = false;
    console.log( this.termino );

    this.paisService.buscarPais( this.termino )
        .subscribe({
          next: resp => {
            console.log( resp );
          },
          error: err => {
            console.log( 'Error' );
            console.error( err );
            this.hayError = true;
          },
          complete: () => {
            console.info('search name complete');
          }
        });
  }

}
