import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ];

  constructor(
    private dbzService: DbzService
  ) {}

  ngOnInit(): void {
  }

  nuevo: Personaje = {
    nombre: 'Trunks',
    poder: 120000
  }

  agregarNuevoPersonaje( personaje: Personaje) {
    // console.log( personaje );
    // F5 para debugger en el browser
    this.personajes.push( personaje );
    // debugger;
  }

  // cambiarNombre( event: any ) {
  //   console.log( event.target.value );
  // }

}
