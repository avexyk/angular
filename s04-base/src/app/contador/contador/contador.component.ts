import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ title }}</h1>
        <h3>La base es: {{ base }}</h3>

        <button (click)="acumular( base )"> + {{ base }}</button>
        <span>{{ number }}</span>
        <button (click)="acumular( -base )"> - {{ base }}</button>
    `
})
export class ContadorComponent {
    public title: string = 'Angular Counter';
    public number: number = 10;
    public base: number = 5;
  
    acumular( value: number ) {
      this.number += value;
    }

}