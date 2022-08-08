import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError, map } from 'rxjs';
import { IProduct } from '../../product/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productUrl: string = 'api/products/products.json';

  constructor(private httpCLient: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    var source$ = this.httpCLient.get<IProduct[]>(this.productUrl).pipe(
      catchError(this.handleError)
    );
    return source$;
  }

  getProduct(id: number): Observable<IProduct | undefined> {
    return this.getProducts()
      .pipe(
        map((products: IProduct[]) => products.find(p => p.productId === id))
      );
  }

  handleError(error: HttpErrorResponse) {
    var errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client side error
      errorMessage = `An error occurred  ${error.message}`;
    } else {
      // backend returned error status
      errorMessage = `server return an error: ${error.status} message: ${error.message}`;
    }
    console.log(error);
    console.log(errorMessage);
    return throwError(() => errorMessage)
  }
}
