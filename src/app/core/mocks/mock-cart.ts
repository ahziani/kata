import { CartItem } from '../models/cart.model';

/**
 * Mock data representing items in a shopping cart.
 *
 * @remarks
 * This mock data is used for testing purposes to simulate a list of items added to the cart.
 */
export const mockCart: CartItem[] = [
  {
    quantity: 2,
    product: {
      id: 1,
      title: 'Test Product 1',
      price: 100,
      image: 'image1.jpg',
      description: 'A description of product 1',
    },
  },
  {
    quantity: 3,
    product: {
      id: 2,
      title: 'Test Product 2',
      price: 200,
      image: 'image2.jpg',
      description: 'A description of product 2',
    },
  },
];
