import { Component } from '@angular/core';
import { Priority } from '../../enums/Priority';

@Component({
  selector: 'app-toaster',
  imports: [],
  templateUrl: './toaster.html',
  styleUrl: './toaster.css',
})
export class Toaster {
  state: 'danger' | 'warning' | 'success' = 'warning';
  message: string = ""
  stateConverter(): string {
    switch (this.state) {
      case 'success':
        this.message = "you inserted the task successfully";
        return Priority.Low;
      case 'warning':
        this.message = "warning this issue might happen";
        return Priority.Medium;
      case 'danger':
        this.message = "error something went wrong";
        return Priority.High;
      default:
        return '';
    }
  }
}
