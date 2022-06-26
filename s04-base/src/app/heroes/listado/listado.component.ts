import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor'];
  heroeBorrado: string = "";
  mostrarMensaje = false;

  borrarHeroe():void {
    this.heroeBorrado = this.heroes.pop() || "";
    console.log( this.heroeBorrado );
    if (this.heroeBorrado.length > 0) {
      this.mostrarMensaje = true;
    } else {
      this.mostrarMensaje = false;
    }
  }

}
