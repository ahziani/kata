import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ProductService } from '../../../product/services/product.service';

@Component({
  selector: 'eshop-search-form',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.css',
})
export class SearchFormComponent {
  constructor(private productService: ProductService) {}

  search(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const searchText = inputElement.value;
    this.productService.setSearchTerm(searchText);
  }
}
