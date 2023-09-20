import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaveregistroService {

  public Regis = new BehaviorSubject<boolean>(false)

  constructor(private router: Router) { }

  RegistroNice() {
    return this.Regis.asObservable()
  }



  saveRegistroData(Datos: any) {
    localStorage.setItem('User', JSON.stringify(Datos))
    this.Regis.next(true)
    console.log('Vale');
  }
}
