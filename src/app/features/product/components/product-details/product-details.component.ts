import { Component, Inject } from '@angular/core';
import { Product } from '../../../../core/models/product.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CartService } from '../../../cart/services/cart.service';

/**
 * The component display the product details when the user opens the "View Details" pop-up.
 */
@Component({
  selector: 'eshop-product-details',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public product: Product,
    private cartService: CartService,
    private dialog: MatDialogRef<ProductDetailsComponent>
  ) {}

  closeDialog() {
    this.dialog.close();
  }

  addToCart() {
    this.cartService.saveCart(this.product);
  }
}
