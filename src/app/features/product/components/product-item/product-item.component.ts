import { Component, Input } from '@angular/core';
import { Product } from '../../../../core/models/product.model';
import { MatIconModule } from '@angular/material/icon';
import { CartService } from '../../../cart/services/cart.service';
import { PlaceholderComponent } from '../../../../shared/components/placeholder/placeholder.component';
import { NgIf } from '@angular/common';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { MatDialog } from '@angular/material/dialog';

/**
 * Displays a product item with action to add it to the cart
 * and view its details in a dialog.
 */
@Component({
  selector: 'eshop-product-item',
  standalone: true,
  imports: [MatIconModule, PlaceholderComponent, NgIf],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  @Input() product!: Product;

  constructor(
    private cartService: CartService,
    private dialog: MatDialog
  ) {}

  addToCart() {
    this.cartService.saveCart(this.product);
  }

  viewDetails() {
    this.dialog.open(ProductDetailsComponent, {
      data: this.product,
      width: '500px',
      maxHeight: '600px',
    });
  }
}
