import { Injectable, signal } from '@angular/core';

/**
 * Service responsible for controlling the visibility of the cart sidebar.
 * Manages the cart's sidebar open and close.
 */
@Injectable({
  providedIn: 'root',
})
export class CartDisplayService {
  isCartVisible = signal(false);

  openCart() {
    this.isCartVisible.set(true);
  }

  closeCart() {
    this.isCartVisible.set(false);
  }

  /**
   * Toggles the visibility of the cart sidebar.
   * If the cart is open, it will close it, and vice versa.
   */
  toggleCart() {
    this.isCartVisible.set(!this.isCartVisible());
  }
}
