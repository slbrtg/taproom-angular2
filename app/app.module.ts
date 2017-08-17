import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule } from '@angular/forms';
import { PatronKegListComponent } from './patron-keg-list.component';
import {EmployeeKegListComponent} from './employee-keg-list.component';
import {EditKegComponent} from './edit-keg.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [ AppComponent, PatronKegListComponent, EmployeeKegListComponent, EditKegComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
