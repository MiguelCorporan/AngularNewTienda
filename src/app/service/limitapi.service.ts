import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LimitapiService {


  UrlApi = 'https://fakestoreapi.com/products?limit=5';
  UrlApiDos = 'https://fakestoreapi.com/products?limit=10';

  constructor(private http: HttpClient) { }

  FiveProduct(): Observable<any> {
    return this.http.get(this.UrlApi).pipe(
      map(data => data),
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('Hubo un error al obtener los datos', error);
    throw error;
  }

  /*---*/

  TenProduct(): Observable<any> {
    return this.http.get(this.UrlApiDos)
      .pipe(map(data => data)
        , catchError(this.handleErrorDos))
  }

  private handleErrorDos(error: any): Observable<never> {
    console.error('Hubo un error al obtener los datos', error);
    throw error;
  }
}
