import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  // Recibe de padre a hijo
  @Input('nuevo') nuevo: Personaje = { 
    nombre: '', 
    poder: 0 
  };

  // Emitir a componente padre
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) { return; }

    // console.log( this.nuevo );

    this.onNuevoPersonaje.emit( this.nuevo );

    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }

}
