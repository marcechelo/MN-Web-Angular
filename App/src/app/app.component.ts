import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'web';
  usuario ={
    nombre: 'marcelo',
    apellido: 'nieto',
  };
  arregloNumeros = [5,4,3,2,1];
  mostrarTitulo = true;

}
