/**
 * Configuration settings for the application.
 */
export const AppSettings = {
  /**
   * Minimum order value required to enable checkout.
   */
  minimumOrder: 50,

  /**
   * Maximum number of items allowed in the cart.
   */
  maxCartItems: 5,

  /**
   * Discount rate applied when the total exceeds the specified amount.
   * For example, 0.1 represents a 10% discount.
   */
  discountRate: 0.1,

  /**
   * Total amount of all products added to the cart that triggers the discount.
   */
  totalExceeds: 100,

  /**
   * Local storage settings.
   */
  localStorage: {
    /**
     * Key used to store cart data in local storage.
     */
    cartKey: 'cart',
  },
};
