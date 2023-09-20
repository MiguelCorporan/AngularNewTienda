import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OneproductService {

  constructor(private http: HttpClient) { }


  OneProduct(id: number): Observable<any> {
    return this.http.get(`https://fakestoreapi.com/products/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any): Observable<never> {
    console.error('Hubo un error al obtener los datos', error);
    throw error;
  }
}
