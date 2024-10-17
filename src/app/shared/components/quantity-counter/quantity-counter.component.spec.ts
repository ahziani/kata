import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser'; // Import this to query DOM elements
import { QuantityCounterComponent } from './quantity-counter.component';
import { MatIconModule } from '@angular/material/icon';

describe('QuantityCounterComponent', () => {
  let component: QuantityCounterComponent;
  let fixture: ComponentFixture<QuantityCounterComponent>;

  const clickButton = (selector: string): void => {
    fixture.detectChanges();
    const incrementButton = fixture.debugElement.query(By.css(selector));
    incrementButton.triggerEventHandler('click', null);
    fixture.detectChanges();
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatIconModule, QuantityCounterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuantityCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should increment the quantity', () => {
    component.quantity = 1;
    clickButton('.btn-increment');
    expect(component.quantity).toBe(2);
  });

  it('should decrement the quantity', () => {
    component.quantity = 2;
    clickButton('.btn-decrement');
    expect(component.quantity).toBe(1);
  });
});
