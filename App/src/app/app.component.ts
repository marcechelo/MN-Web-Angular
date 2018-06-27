import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'web';
  mostrarComponente = false;
  contadorDesdePapa = 0;

  arregloUsuarios =[
    {
      id:1,
      imagen:'/assets/1.jpeg',
      texto: 'tatis1909'
    },
    {
      id:2,
      imagen:'/assets/2.jpeg',
      texto: 'Pedro'
    },
    {
      id:3,
      imagen:'/assets/3.jpeg',
      texto: 'Jeff'
    },
    {
      id:4,
      imagen:'/assets/4.jpeg',
      texto: 'Edd'
    },
    {
      id:5,
      imagen:'/assets/5.jpeg',
      texto: 'Nancy'
    },
  ];

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

  actualizarContador(contadorHijo){
    console.log('se ejecuto');
    console.log(contadorHijo);
    this.contadorDesdePapa = contadorHijo
  }

}
