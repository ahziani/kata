import { Injectable, signal } from '@angular/core';
import { CartItem } from '../../../core/models/cart.model';
import { Product } from '../../../core/models/product.model';
import { AppSettings } from '../../../core/config/app-settings';
import { LocalStorageService } from '../../../core/services/local-storage.service';
import { AlertService } from '../../../core/services/alert.service';

/**
 * Service for managing the shopping cart actions. adding, updating, and removing items,
 * and interacts with local storage for storing data.
 */
@Injectable({
  providedIn: 'root',
})
export class CartService {
  /** Manage the current state of cart items */
  private cartItems = signal<CartItem[]>([]);
  private cartKey = AppSettings.localStorage.cartKey;

  constructor(
    private localStorageService: LocalStorageService,
    private alertService: AlertService
  ) {
    this.cartItems.set(this.loadCart());
  }

  /**
   * Stores the cart items in local storage.
   * @param items - Array of cart items to store.
   */
  private storeCart(items: CartItem[]): void {
    this.localStorageService.setItem(this.cartKey, items);
  }

  /**
   * Loads the cart from local storage.
   * @returns Array of cart items, or an empty array if not found.
   */
  private loadCart(): CartItem[] {
    return this.localStorageService.getItem<CartItem[]>(this.cartKey) ?? [];
  }

  /**
   * Updates the cart state by setting the new items and storing them in local storage.
   * @param updatedItems - Array of updated cart items.
   */
  private updateCartState(updatedItems: CartItem[]): void {
    this.cartItems.set(updatedItems);
    this.storeCart(updatedItems);
  }

  getCartItems(): CartItem[] {
    return this.cartItems();
  }

  /**
   * Adds a product to the cart or increases its quantity if it already exists.
   * Limits the cart to the maximum allowed items.
   * @param product - The product to be added to the cart.
   */
  saveCart(product: Product): void {
    const cart = this.cartItems();
    const isProductInCart = cart.find(item => item.product.id === product.id);

    if (isProductInCart) {
      // If the product is already in the cart, increase its quantity.
      const updatedCart = cart.map(cartItem =>
        cartItem.product.id === product.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      this.updateCartState(updatedCart);
    } else {
      // If the product is not in the cart, check if adding it will go over the cart limit
      const cart = this.cartItems();
      if (cart.length >= AppSettings.maxCartItems) {
        // Display alert if the cart already has the maximum allowed items
        this.alertService.showAlert('Maximum limit is 5 products in the cart!');
      } else {
        // Add the product to the cart
        const newCartItem = { product, quantity: 1 };
        this.updateCartState([...cart, newCartItem]);
      }
    }
  }

  /**
   * Updates the quantity of a specific product in the cart.
   * @param productId - The ID of the product to update.
   * @param quantity - The new quantity for the product.
   */
  updateQuantity(productId: number, quantity: number): void {
    const cart = this.cartItems();
    const updatedItems = cart.map(item =>
      item.product.id === productId ? { ...item, quantity } : item
    );

    this.updateCartState(updatedItems);
  }

  /**
   * Removes a product from the cart by product ID.
   * If there are still items left in the cart after removal, update the cart state.
   * If the cart is empty after the removal, remove the cart from local storage.
   *
   * @param productId - The ID of the product to be removed from the cart.
   */
  removeFromCart(productId: number): void {
    const cart = this.cartItems();
    const updatedItems = cart.filter(item => item.product.id !== productId);

    if (updatedItems.length > 0) {
      this.updateCartState(updatedItems);
    } else {
      this.localStorageService.removeItem(this.cartKey);
    }
  }
}
