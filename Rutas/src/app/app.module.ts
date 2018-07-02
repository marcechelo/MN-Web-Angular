import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FaqComponent } from './rutas/faq/faq.component';
import { NoEncontradoComponent } from './rutas/no-encontrado/no-encontrado.component';
import { HomeComponent } from './rutas/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FaqComponent,
    NoEncontradoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
