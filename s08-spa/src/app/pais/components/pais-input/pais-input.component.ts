import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Output('onEnter') onEnter: EventEmitter<string> = new EventEmitter();
  // Se emite cuando la persona deja de escribir
  @Output('onDebounce') onDebounce: EventEmitter<string> = new EventEmitter();
  
  // Recibe propiedad de placeholder
  @Input('placeholder') placeholder = "";

  // subject crea un observable manualmente
  debouncer: Subject<string> = new Subject();

  termino: string = '';

  constructor() { }

  ngOnInit(): void {
    this.debouncer
        // el metodo pipe permite transformar la salida de un observable
        .pipe(
          debounceTime(300)
        )
        .subscribe( valor => {
          // por defecto el valor que se envia en la funcion de flecha es next, en la estructura subscribe: next, error, complete
          // console.log( 'debouncer:', valor );
          this.onDebounce.emit( valor );
    });
  }

  buscar() {
    this.onEnter.emit( this.termino );
  }

  teclaPresionada() {
    this.debouncer.next( this.termino );
  }

}
