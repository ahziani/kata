import { Product } from '../models/product.model';

/**
 * Mock data representing a list of products.
 *
 * @remarks
 * This mock data is used for testing purposes to simulate a list of products.
 */
export const mockProducts: Product[] = [
  {
    id: 1,
    title: 'Test Product 1',
    price: 100,
    image: 'image1.jpg',
    description: 'A description of product 1',
  },
  {
    id: 2,
    title: 'Test Product 2',
    price: 200,
    image: 'image2.jpg',
    description: 'A description of product 2',
  },
];
