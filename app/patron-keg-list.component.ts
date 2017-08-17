import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'patron-keg-list',
  template: `
  <br>
  <div id = "patron-kegs"  (click)="tap(chosenKeg)" *ngFor="let chosenKeg of patronKegList">
    <h2>{{chosenKeg.name}}</h2>
    <h3>Flavor: {{chosenKeg.flavor}}</h3>
    <h4>Made By: {{chosenKeg.brand}}</h4>
    <h4>Price: {{chosenKeg.price}}$</h4>
    <hr>
  </div>
  `
})

export class PatronKegListComponent{
  @Input() patronKegList: Keg[];

  tap(chosenKeg: Keg){
    if(chosenKeg.pints === 0){
      alert("This keg is tapped! An employee will refill it soon");
    } else {
      chosenKeg.pints -= 8;
      alert("Enjoy your pint of Booch!");
    }
  }

}
