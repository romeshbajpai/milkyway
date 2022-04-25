import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { ListnerComponent } from './listner/listner.component';

@NgModule({
  declarations: [
    AppComponent,
    ListnerComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule, BrowserAnimationsModule,
    MatInputModule,MatIconModule,MatDatepickerModule,MatNativeDateModule,MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
