import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class AutorizacionService implements CanActivate{

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const  permisos = false;
    console.log('intenta entrar');
    return permisos;
  }

  constructor() { }
}
