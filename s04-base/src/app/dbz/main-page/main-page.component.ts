import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  nuevo: Personaje = {
    nombre: 'Trunks',
    poder: 120000
  }

  // get personajes(): Personaje[] {
  //   return this.dbzService.personajes;
  // }

  constructor(
    // private dbzService: DbzService
  ) {}

  ngOnInit(): void {
  }

  // agregarNuevoPersonaje( personaje: Personaje) {
    // console.log( personaje );
    // F5 para debugger en el browser
    // this.personajes.push( personaje );
    // debugger;
  // }

  // cambiarNombre( event: any ) {
  //   console.log( event.target.value );
  // }

}
