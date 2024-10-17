import { NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';

/**
 * Displays placeholders for loading content with a configurable number of rows.
 */
@Component({
  selector: 'eshop-placeholder',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './placeholder.component.html',
  styleUrl: './placeholder.component.css',
})
export class PlaceholderComponent {
  @Input() numRows: number = 3;
}
