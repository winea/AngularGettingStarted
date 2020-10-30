import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IProduct } from 'src/app/product/product';

@Injectable({
  providedIn: 'root'
})

export class ProductServiceHttp {
  //data.json
    //private productUrl = 'www.myWebService.com/api/products.json';
    private productUrl = 'api/products/products.json';

    constructor(private http: HttpClient) {

    }

    //como as chamadas http sao assincronas é necessario Observable
    // getProducts(): Observable<IProduct[]> {
    //   return this.http.get<IProduct[]>(this.productUrl);
    // }

    //lembrar de fazer tratamento de erros, pois e comum haver problemas de
    //comunicação em chamadas http
    //o subscribe é colocado onde ira executar o Observable, neste caso sera no componente product
    getProducts(): Observable<IProduct[]> {
      return this.http.get<IProduct[]>(this.productUrl).pipe(
                  tap(data => console.log('All: ' + JSON.stringify(data))),
                  catchError(this.handleError)
      );
    }

    private handleError(err: HttpErrorResponse) {
      // in a real world app, we may send the server to some remote logging infrastructure
      // instead of just logging it to the console
      let errorMessage = '';
      if (err.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMessage = `An error occurred: ${err.error.message}`;
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
      }
      console.error(errorMessage);
      return throwError(errorMessage);
    }
}
