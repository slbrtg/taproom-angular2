import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <h1 class="jumbotron">Welcome to The Booch</h1>
  <h1>For Patrons,</h1>
  <h2>Click a booch to tap a pint bruh bruh</h2>
  <br>
  <div id = "patron-kegs" [class]="status(chosenKeg)" (click)="tap(chosenKeg)" *ngFor="let chosenKeg of kegs">
    <h2>{{chosenKeg.name}}</h2>
    <h3>Flavor: {{chosenKeg.flavor}}</h3>
    <h4>Made By: {{chosenKeg.brand}}</h4>
    <h4>Price: {{chosenKeg.price}}$</h4>
  </div>
  `
})
//[class]="status(chosenKeg)" (click)="tap(chosenKeg)"
export class AppComponent {
  selectedKeg = null;

  // constructor(public name: string, public brand: string, public price: number, public flavor: string){}
  kegs: Keg[] = [
    new Keg("Bucha", "Kom", 4, "Lavender Honey"),
    new Keg("Synergy", "Natural Something", 8, "Grass"),
    new Keg("The Booch", "Booch Daddy", 1, "Roquefort")
  ]

  status(chosenKeg){
    //do things here
  }

  tap(chosenKeg){
    //do stuff
  }
}
