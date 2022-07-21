import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
        // desestructuracion
        .subscribe( ({id}) => {
          console.log( id );

          this.paisService.getPaisPorAplha( id )
              .subscribe( pais => {
                console.log( pais );
              });

        });

        // forma tradicional
        // .subscribe(params => {
          // El nombre de la propiedad que sal en consola se encuentra definido en el app-routing-module.ts
          // console.log( params );
        // });
  }

}
