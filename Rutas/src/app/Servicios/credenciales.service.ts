import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CredencialesService {

  estaLogeados = false;
  constructor() { }

  login(password:string){
    if (password==='mashi'){
    this.estaLogeados = true;
    }else {
      this.estaLogeados = false;
    }
  }
}
