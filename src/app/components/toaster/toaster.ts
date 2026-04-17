import { Component, Input } from '@angular/core';
import { Priority } from '../../enums/Priority';
import { ToasterState } from '../../types/toasterState';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toaster',
  imports: [CommonModule],
  templateUrl: './toaster.html',
  styleUrl: './toaster.css',
})
export class Toaster {
  @Input() state: ToasterState = 'warning';
  @Input() isAction: boolean = false;
  
  get message(): string {
    switch (this.state) {
      case 'success':
        return "you inserted the task successfully";
      case 'warning':
        return "warning this issue might happen";
      case 'danger':
        return "error something went wrong";
      default:
        return '';
    }
  }

  get stateClass(): string {
    switch (this.state) {
      case 'success':
        return Priority.Low;
      case 'warning':
        return Priority.Medium;
      case 'danger':
        return Priority.High;
      default:
        return '';
    }
  }
}
