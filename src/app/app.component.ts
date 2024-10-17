import { Component } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { CartComponent } from './features/cart/components/cart/cart.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'eshop-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {}
