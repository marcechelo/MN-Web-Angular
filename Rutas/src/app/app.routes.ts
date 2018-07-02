import {Routes} from "@angular/router";
import {HomeComponent} from "./rutas/home/home.component";
import {FaqComponent} from "./rutas/faq/faq.component";
import {NoEncontradoComponent} from "./rutas/no-encontrado/no-encontrado.component";
import {RutaUsuarioComponent} from "./rutas/ruta-usuario/ruta-usuario.component";
import {RutaPerfilComponent} from "./rutas/ruta-perfil/ruta-perfil.component";

export const RUTAS_APP: Routes =[
  {
    path:'home',
    component:HomeComponent,
    children: [
      {
        path:'usuario/:usuarioID/:universidad',
        component:RutaUsuarioComponent
      },
      {
        path:'perfil',
        component:RutaPerfilComponent
      }
    ]
  },
  {
    path:'faq',
    component:FaqComponent
  },
  {
    path:'no-encontrado',
    component:NoEncontradoComponent
  },
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'**',
    component:NoEncontradoComponent
  }
];
