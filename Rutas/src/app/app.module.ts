import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FaqComponent } from './rutas/faq/faq.component';
import { NoEncontradoComponent } from './rutas/no-encontrado/no-encontrado.component';
import { HomeComponent } from './rutas/home/home.component';
import {RouterModule} from "@angular/router";
import {RUTAS_APP} from "./app.routes";
import { RutaPerfilComponent } from './rutas/ruta-perfil/ruta-perfil.component';
import { RutaUsuarioComponent } from './rutas/ruta-usuario/ruta-usuario.component';
import {AutorizacionService} from "./Servicios/autorizacion.service";
import {CredencialesService} from "./Servicios/credenciales.service";
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    FaqComponent,
    NoEncontradoComponent,
    HomeComponent,
    RutaPerfilComponent,
    RutaUsuarioComponent,
    RutaLoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      RUTAS_APP,
      {
        useHash: true
      }
    )
  ],
  providers: [
    AutorizacionService,
    CredencialesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
