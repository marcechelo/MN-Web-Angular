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

  imagenUrl ='https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&h=350';
  imagenWidth = 200;

  html = `
    <h1> Hola </h1> 
    <p>Hola mundo</p>
    <img src="${this.imagenUrl}" alt="">  
  `;

  aumentarWidht(evento){
    this.imagenWidth +=20;
    console.log(evento)
  }
  restarWidht(){
    this.imagenWidth -=20;
  }

}
