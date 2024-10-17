import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../core/models/product.model';
import { ProductService } from '../../services/product.service';
import { ProductItemComponent } from '../product-item/product-item.component';
import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { PlaceholderComponent } from '../../../../shared/components/placeholder/placeholder.component';
import { animate, style, transition, trigger } from '@angular/animations';

/**
 * Displays a list of products with placeholders while loading.
 */
@Component({
  selector: 'eshop-product-list',
  standalone: true,
  imports: [
    ProductItemComponent,
    NgForOf,
    NgIf,
    PlaceholderComponent,
    CommonModule,
  ],
  templateUrl: './product-list.component.html',
  animations: [
    trigger('listProductAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(25px)' }),
        animate(
          '0.8s ease-in-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
})
export class ProductListComponent implements OnInit {
  // To display 20 placeholders during loadings
  placeholderItems: number[] = Array(20).fill(0);

  constructor(public productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts();
  }

  /**
   * Tracking function used by ngFor to optimize rendering.
   */
  trackById(index: number, product: Product): number {
    return product.id;
  }
}
