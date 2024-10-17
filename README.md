# E-Shop: A Mini E-commerce Application

E-Shop is a responsive, user-friendly mini e-commerce application built with Angular. The application allows users to browse products, search for items, add products to a shopping cart, and manage cart items, with cart data persisted in local storage.

## Demo

Check out the live demo of the application: <a href="https://kata-pied.vercel.app/" target="_blank">E-Shop Live Demo</a>

## Features

- **Product Browsing**: View a list of products fetched from FakeStoreAPI.
- **Product Search**: Search for products by name with instant, real-time results.
- **Advanced Product Details**: View detailed information about a product, including name, images, price, and description.
- **Shopping Cart**:
  - Standard Cart: Add products to the cart, adjust quantities, and remove items.
  - Limit of 5 products in the cart.
  - Persistent Cart: Save the cart state using local storage.
  - **Discount Cart**: Automatically apply a 10% discount when the total exceeds $100.
  - **Minimum Order Requirement**: Checkout only allowed when the total exceeds $50.
- **Animations**: Smooth animations for product items on page load and during search.
- **State Management**: Efficient management of application state using Angular signals.
- **Responsive Design**: Optimized for both mobile and desktop devices.

## Technologies Used

- **Angular**: The primary framework for building the application.
- **Angular Material**: UI component library for Angular.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Prettier**: Code formatter to maintain code style consistency.
- **Eslint**: Enforces code quality and consistency by identifying and fixing issues in JavaScript and TypeScript.
- **Husky & Lint-Staged**: For pre-commit linting & formating.
- **Jasmine & Karma**: For unit testing.
- **Typedoc**: Generates documentation from TypeScript code comments automatically.

## Project Structure

- **ProductItemComponent**: Represents each product as an individual interactive card, allowing users to view details and perform actions like adding to the cart.
- **CartSidebarComponent**: Manages and displays the contents of the shopping cart, providing users with a summary of their selections.
- **ProductDetailsComponent**: Displays detailed information about a product in a modal, including price, description, and images.
- **SearchFormComponent**: Provides instant product searches resultat, filtering the product list based on user input.
- **ProductService**: Responsible for fetching products from the API, managing the product list, and handling search functionality.
- **CartService**: Manages cart operations, including adding/removing products, handling state, and interacting with local storage for persistence.

## Testing

**ProductListComponent** and **QuantityCounterComponent** were tested to make sure they work well. Because of limited time, other components were not tested.
