import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs-service.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {

  // Se pueden usar etiquetas html, clases, id y referencia local || !: operador de que el objeto no es nulo
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(
    private gifsService: GifsService,
  ) { }

  ngOnInit(): void {
  }

  buscar() {
    // Obtener valor del input
    const valor = this.txtBuscar.nativeElement.value;

    // No se insertar vacios
    if ( valor.trim().length === 0) { return; }

    // Guardar historial
    this.gifsService.buscarGifs( valor );
    // Reiniciar input
    this.txtBuscar.nativeElement.value = "";
  }

}
