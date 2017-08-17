import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
<div>
  <h1>Add a Keg</h1>
  <label>Keg Name:</label>
  <input #newName>
  <label>Keg Flavor:</label>
  <input #newFlavor>
  <label>Keg Brand:</label>
  <input #newBrand>
  <label>Keg Price:</label>
  <input #newPrice>
  <button (click)="submitForm(newName.value, newFlavor.value, newBrand.value, newPrice.value); newName.value=''; newBrand.value=''; newPrice.value=''; newFlavor.value='';">Done</button>
</div>
  `
})

export class NewKegComponent{
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, flavor: string, brand: string, price: number){
    let newKeg: Keg = new Keg(name, brand, price, flavor);
    this.newKegSender.emit(newKeg);
  }
}
