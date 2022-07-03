import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  // @Input('personajes') personajes: Personaje[] = [];
  get personajes() {
    return this.dbzService.personajes;
  }

  constructor(
    private dbzService: DbzService
  ) { }

  ngOnInit(): void {
  }

}
