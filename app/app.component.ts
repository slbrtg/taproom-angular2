import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template:`
  <h1 class="jumbotron">Welcome to The Booch</h1>
  <h1>For Patrons,</h1>
  <h3>Click a booch to tap a pint</h3>
  <patron-keg-list [patronKegList]="masterKegList"></patron-keg-list>
  <br>
  <h1>For Employees, </h1>
  <h2>Click to refill, cuse edit button to change details</h2>
  <employee-keg-list [employeeKegList]="masterKegList" (clickSender)="editKeg($event)"></employee-keg-list>
  <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-keg>
  <new-keg (newKegSender)="addKeg($event)"></new-keg>
  `
})
export class AppComponent {
  selectedKeg = null;
  masterKegList: Keg[] = [
    new Keg("Bucha", "Kom", 4, "Lavender Honey"),
    new Keg("Synergy", "Natural Something", 8, "Grass"),
    new Keg("The Booch", "Booch Daddy", 1, "Roquefort")
  ]

  editKeg(chosenKeg) {
    this.selectedKeg = chosenKeg;
  }

  finishedEditing(){
    this.selectedKeg = null;
  }

  addKeg(newKegFromChild: Keg){
    this.masterKegList.push(newKegFromChild);
  }


}
