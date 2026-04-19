import { Component, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CardList } from "../CardList/CardList";
import { Task } from '../../interfaces/Task';

@Component({
  selector: 'app-cards-container',
  imports: [CardList],
  templateUrl: './cards-container.html',
  styleUrl: './cards-container.css',
})
export class CardsContainer implements OnDestroy {
  @Input() task: Task = {} as Task;
  @Output() deleteTask = new EventEmitter<string>();
  @Output() editTask = new EventEmitter<Task>();
  @Output() notifyDeath = new EventEmitter<void>();
  
  activeFilter: "all" | "inProgress" | "done" = "all";

  filtering(pageName: "all" | "inProgress" | "done"): void {
    this.activeFilter = pageName;
  }

  ngOnDestroy(): void {
    this.notifyDeath.emit();
  }
}
