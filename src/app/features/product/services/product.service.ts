import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { catchError, shareReplay, throwError } from 'rxjs';
import { environment } from '../../../../environment';

/**
 * Service responsible for retrieving product data from an API.
 * It also handles caching and error handling.
 */
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products = signal<Product[]>([]);
  private searchTerm = signal<string>('');

  constructor(private http: HttpClient) {}

  /**
   * Handles HTTP errors.
   * @param error - The HttpErrorResponse object.
   * @returns An observable that throws an error.
   */
  private handleError(error: HttpErrorResponse) {
    let errorMessage;
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Network error: ${error.error.message}`;
    } else {
      errorMessage = `Error ${error.status}: ${error.message} `;
    }

    return throwError(() => new Error(errorMessage));
  }

  /**
   * Retrieves the list of products from the API.
   * Caches the response to avoid repeated API calls.
   * @returns An observable that emits an array of Product objects.
   */
  getProducts(): void {
    this.http
      .get<Product[]>(`${environment.api}/products`)
      .pipe(
        shareReplay(1), // Cache the products list
        catchError(this.handleError)
      )
      .subscribe(products => {
        this.products.set(products);
      });
  }

  setSearchTerm(term: string): void {
    this.searchTerm.set(term.toLowerCase());
  }

  filteredProducts = computed(() => {
    const searchTerm = this.searchTerm();
    const products = this.products();

    if (searchTerm) {
      return products.filter(product =>
        product.title.toLowerCase().includes(searchTerm)
      );
    }

    return products;
  });
}
