import { Component, computed } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CartService } from '../../features/cart/services/cart.service';
import { CommonModule } from '@angular/common';
import { CartDisplayService } from '../../core/services/cart-display.service';
import { SearchFormComponent } from '../../features/search/components/search-form/search-form.component';

/**
 * Displays the header with cart details (item quantity, total price) and a search function.
 */
@Component({
  selector: 'eshop-header',
  standalone: true,
  imports: [MatIconModule, CommonModule, SearchFormComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  /**
   * Get the total quantity of items in the cart.
   * @returns The total number of items in the cart.
   */
  totalQuantity = computed(() => this.cartService.getCartItems().length);

  /**
   * Calculate the total price of items in the cart.
   * @returns The total price of all items in the cart.
   */
  totalPrice = computed(() =>
    this.cartService
      .getCartItems()
      .reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  );

  constructor(
    private cartService: CartService,
    private cartDisplayService: CartDisplayService
  ) {}

  /**
   * Toggles the visibility of the cart sidebar.
   */
  toggleCart(): void {
    this.cartDisplayService.toggleCart();
  }
}
