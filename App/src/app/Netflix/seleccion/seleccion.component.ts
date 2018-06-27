import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: ['./seleccion.component.css']
})
export class SeleccionComponent implements OnInit,OnDestroy,OnChanges {

  constructor() {
    console.log('constructor');
  }

  ngOnChanges() {
    console.log('on changes');
  }

  ngOnDestroy(): void {
    console.log('on destroy');
  }

  ngOnInit() {
    console.log('on init');
  }

}
