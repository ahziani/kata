import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { ProductService } from '../../services/product.service';
import { ProductItemComponent } from '../product-item/product-item.component';
import { PlaceholderComponent } from '../../../../shared/components/placeholder/placeholder.component';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { mockProducts } from '../../../../core/mocks/mock-product';

// Mocking product data as an Observable
class MockProductService {
  getProducts() {
    return of(mockProducts); // Return the mock products as an array
  }
  filteredProducts() {
    return of(mockProducts); // Ensure that filteredProducts returns an array
  }
}

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let productService: ProductService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Move ProductListComponent to the imports array since it's standalone
      imports: [
        ProductListComponent,
        CommonModule,
        ProductItemComponent,
        PlaceholderComponent,
        NoopAnimationsModule, // Disable animations for testing
      ],
      providers: [{ provide: ProductService, useClass: MockProductService }],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductService); // Inject the mock service
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call getProducts on initialization', () => {
    spyOn(productService, 'getProducts').and.callThrough();
    component.ngOnInit();
    expect(productService.getProducts).toHaveBeenCalled();
  });
});
