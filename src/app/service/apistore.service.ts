import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApistoreService {

  constructor(private http: HttpClient) { }

  ApiURL = 'https://fakestoreapi.com/products'
  Categorias = 'https://fakestoreapi.com/products/categories'

  apiAllProduct(): Observable<any> {
    return this.http.get(this.ApiURL).pipe(map(data => data)
      , catchError(this.handleError)
    )
  }

  private handleError(error: any): Observable<never> {
    console.error('Hubo un error al obtener los datos', error);
    throw error;
  }

  Category(): Observable<any> {
    return this.http.get(this.Categorias).pipe(map(data => data)
      , catchError(this.handleErrorDos)
    )
  }

  private handleErrorDos(error: any): Observable<never> {
    console.error('Hubo un error al obtener los datos', error);
    throw error;
  }
}
