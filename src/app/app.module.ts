import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import {MenuComponent} from './menu/menu.component';


@NgModule({
  imports:[
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [    
    AppComponent, 
    MenuComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
