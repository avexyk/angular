import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {

  // Se pueden usar etiquetas html, clases, id y referencia local || !: operador de que el objeto no es nulo
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor() { }

  ngOnInit(): void {
  }

  buscar() {
    console.log( this.txtBuscar.nativeElement.value );
    this.txtBuscar.nativeElement.value = "";
  }

}
