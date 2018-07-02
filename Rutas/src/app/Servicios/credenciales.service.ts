import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CredencialesService {

  estaLogeados = false;
  constructor() { }

  login(password:string){
    if (password==='mashi'){
    this.estaLogeados = false;
    }else {
      this.estaLogeados = true;
    }
  }
}
