import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'eshop-quantity-counter',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './quantity-counter.component.html',
  styleUrl: './quantity-counter.component.css',
})
export class QuantityCounterComponent {
  @Input() quantity: number = 1;
  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();

  increment() {
    this.quantity++;
    this.quantityChange.emit(this.quantity);
  }

  decrement() {
    this.quantity--;
    this.quantityChange.emit(this.quantity);
  }
}
