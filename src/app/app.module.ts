import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatFormFieldModule, MatTableModule, MatInputModule} from '@angular/material/';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { EmppageComponent } from './emppage/emppage.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { AddempComponent } from './addemp/addemp.component';

@NgModule({
  declarations: [
    AppComponent,
    EmppageComponent,
    AddempComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatTableModule,
   MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    routing,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
