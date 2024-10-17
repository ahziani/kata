import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CartDisplayService } from '../../../../core/services/cart-display.service';
import { CartService } from '../../services/cart.service';
import { CommonModule, NgForOf } from '@angular/common';
import { QuantityCounterComponent } from '../../../../shared/components/quantity-counter/quantity-counter.component';
import { AppSettings } from '../../../../core/config/app-settings';
import { AlertService } from '../../../../core/services/alert.service';
import { CartItem } from '../../../../core/models/cart.model';

/**
 * Manages the user's cart, including updating items quantity,
 * calculating the total price, and showing or hiding the cart.
 */
@Component({
  selector: 'eshop-cart',
  standalone: true,
  imports: [MatIconModule, NgForOf, CommonModule, QuantityCounterComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  totalExceeds = AppSettings.totalExceeds;
  discountRate = AppSettings.discountRate;
  minimumOrder = AppSettings.minimumOrder;

  /** Ddetermine if the cart sidebar is visible */
  isCartVisible = computed(() => this.cartDisplayService.isCartVisible());

  /** Get the items from the cart */
  cartItems = computed(() => this.cartService.getCartItems());

  /** Calculate the total price of items in the cart */
  totalPrice = computed(() =>
    this.cartItems().reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    )
  );

  constructor(
    private cartDisplayService: CartDisplayService,
    private cartService: CartService,
    private alertService: AlertService
  ) {}

  /**
   * Calculate the total price of items in the cart, applying a discount
   * if the total exceeds the set amount.
   * @returns The total price after applying any discounts.
   */
  calculateTotal(): number {
    const total = this.totalPrice();
    return total > this.totalExceeds
      ? total - total * this.discountRate
      : total;
  }

  /**
   * Updates the quantity of a product in the cart or removes it if the quantity is 0.
   * @param productId - The ID of the product to update
   * @param newQuantity - The new quantity for the product
   */
  updateQuantity(productId: number, newQuantity: number): void {
    if (newQuantity > 0) {
      this.cartService.updateQuantity(productId, newQuantity);
    } else {
      this.cartService.removeFromCart(productId);
    }
  }

  closeCart(): void {
    this.cartDisplayService.closeCart();
  }

  /**
   * Go to checkout if the total price meets the minimum order for checkout.
   * If not, it displays an alert.
   */
  viewCheckout(): void {
    if (this.totalPrice() < this.minimumOrder) {
      this.alertService.showAlert(
        `Total price must be at least $${this.minimumOrder}!`
      );
    }
  }

  /**
   * Tracks items by their product ID for *ngFor optimization.
   */
  trackById(index: number, item: CartItem): number {
    return item.product.id;
  }
}
