import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  termino: string = "";
  hayError: boolean = false;
  capitales: Country[] = [];

  constructor(
    private paisService: PaisService,
  ) { }

  ngOnInit(): void {
  }

  buscar( termino: string ): void {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital( this.termino )
        .subscribe({
          next: capitales => {
            this.capitales = capitales;
          },
          error: err => {
            this.capitales = [];
            this.hayError = true;
          },
          complete: () => {
            console.info( 'search capital complete' );
          }
        });

  }

}
