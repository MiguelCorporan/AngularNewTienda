import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private logget = new BehaviorSubject<boolean>(this.getLoggedStatusFromStorage())
  private noCuenta = new BehaviorSubject<boolean>(false)

  constructor(private router: Router) { }

  get IsLogged(): Observable<boolean> {
    return this.logget.asObservable()
  }

  noRegis(): Observable<boolean> {
    return this.noCuenta.asObservable()
  }

  login(Date: any) {

    const Datos: any = localStorage.getItem('User')
    const pars: any = JSON.parse(Datos)

    console.log(".");


    if (pars.email === Date.email && pars.pass === Date.pass) {
      localStorage.setItem('isLogged', 'true')
      this.logget.next(true)
      console.log('Funciona');

    } else {
      console.log('No funciona');
      this.NoFunciona()
    }
  }

  private NoFunciona() {
    this.noCuenta.next(true)
  }

  LogOut() {
    localStorage.setItem('isLogged', 'false')
    this.logget.next(false)
    this.router.navigate(['login'])
  }

  private getLoggedStatusFromStorage(): boolean {
    const logget: any = localStorage.getItem('isLogged') === 'true';
    return logget
  }
}
