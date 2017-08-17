import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'patron-keg-list',
  template: `
  <br>
  <div id = "patron-kegs"  (click)="tap(chosenKeg)" *ngFor="let chosenKeg of kegs">
    <h2>{{chosenKeg.name}}</h2>
    <h3>Flavor: {{chosenKeg.flavor}}</h3>
    <h4>Made By: {{chosenKeg.brand}}</h4>
    <h4>Price: {{chosenKeg.price}}$</h4>
    <hr>
  </div>
  `
})

export class PatronKegListComponent{
  kegs: Keg[] = [
    new Keg("Bucha", "Kom", 4, "Lavender Honey"),
    new Keg("Synergy", "Natural Something", 8, "Grass"),
    new Keg("The Booch", "Booch Daddy", 1, "Roquefort")
  ]

  tap(chosenKeg){
    //do stuff
  }

}
