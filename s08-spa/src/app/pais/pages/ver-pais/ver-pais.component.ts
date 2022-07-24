import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService,
  ) { }

  ngOnInit(): void {

    // rxjs switchmap
    this.activatedRoute.params
        .pipe(
          // recibe un observable y retorna un observable
          switchMap( ({id}) => this.paisService.getPaisPorAplha( id )),
          // dispara un efecto secundario: recibe producto del observable y dispara la accion
          tap( console.log )
        )
        .subscribe( pais => this.pais = pais );

    // #2 Forma
    // this.activatedRoute.params
    //     // desestructuracion
    //     .subscribe( ({id}) => {
    //       console.log( id );

    //       this.paisService.getPaisPorAplha( id )
    //           .subscribe( pais => {
    //             console.log( pais );
    //           });

    //     });

        // #1 Forma
        // forma tradicional
        // .subscribe(params => {
          // El nombre de la propiedad que sal en consola se encuentra definido en el app-routing-module.ts
          // console.log( params );
        // });
  }

}
