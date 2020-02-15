import { Injectable, Component } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { componentFactoryName } from '@angular/compiler';
export interface canComponentDeativate{
    confirm1():boolean;
}
@Injectable({
  providedIn: 'root'
})
export class DecativeGuard implements CanDeactivate <canComponentDeativate>{
  canDeactivate(
    component:canComponentDeativate,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      return  component.confirm1();
  }
  
}
