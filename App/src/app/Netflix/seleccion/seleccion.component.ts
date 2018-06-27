import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: ['./seleccion.component.css']
})
export class SeleccionComponent implements OnInit,OnDestroy,OnChanges {

  //propiedad del web component
  @Input() contador;
  @Input() imagen: string;
  @Input() texto: string;
  //Crear evento de web Component
  @Output() cambioElContador = new EventEmitter();
  @Output() selecciono:EventEmitter<string> = new EventEmitter();

  constructor() {
    console.log('constructor');
  }

  seleccionoUsuario(){
    console.log('selecciono', this.texto);
    this.selecciono.emit(this.texto);
  }

  aumentarContador(){
    this.contador = this.contador + 1;
    this.cambioElContador.emit(this.contador)
  }

  ngOnInit() {
    console.log('on init');
    console.log('contador',this.contador);
  }

  ngOnChanges(cambios){
    console.log('on changes',cambios);
  }

  ngOnDestroy(): void {
    console.log('on destroy');
  }

}
