import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'employee-keg-list',
  template: `
  <br>
  <div id = "employee-kegs" [class]="status(chosenKeg)" *ngFor="let chosenKeg of employeeKegList">
    <h2>{{chosenKeg.name}}</h2>
    <h3>Flavor: {{chosenKeg.flavor}}</h3>
    <h4>Made By: {{chosenKeg.brand}}</h4>
    <h4>Price: {{chosenKeg.price}}$</h4>
    <h1> PINTS LEFT: {{chosenKeg.pints}}</h1>
    <hr>
  </div>
  `
})

export class EmployeeKegListComponent{
  @Input() employeeKegList: Keg[];

  status(chosenKeg){
    //do things here
  }
}
