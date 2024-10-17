import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

/**
 * Service responsible for displaying alert messages using Angular Material's Snackbar.
 */
@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private snackBar: MatSnackBar) {}

  /**
   * Displays an alert message using angular material snack bar.
   *
   * @param message - The message to display in the alert.
   */
  showAlert(message: string): void {
    this.snackBar.open(message, 'Close', {
      verticalPosition: 'bottom',
      duration: 5000, // Display duration of 5 seconds
      horizontalPosition: 'center',
    });
  }
}
