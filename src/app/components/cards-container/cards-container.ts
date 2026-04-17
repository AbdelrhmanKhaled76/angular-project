import { Component, Input } from '@angular/core';
import { CardList } from "../CardList/CardList";
import { Task } from '../../interfaces/Task';

@Component({
  selector: 'app-cards-container',
  imports: [CardList],
  templateUrl: './cards-container.html',
  styleUrl: './cards-container.css',
})
export class CardsContainer {
  @Input() tasks: Task[] = [] as Task[];
  activeFilter: "all" | "inProgress" | "done" = "all";

  get listTitle(): string {
    switch (this.activeFilter) {
      case 'done': return 'Done Tasks';
      case 'inProgress': return 'In Progress Tasks';
      default: return 'All Tasks';
    }
  }

  get filteredTasks(): Task[] {
    switch (this.activeFilter) {
      case "done":
        return this.tasks.filter(task => task.isDone);
      case "inProgress":
        return this.tasks.filter(task => !task.isDone);
      default:
        return this.tasks;
    }
  }

  filtering(pageName: "all" | "inProgress" | "done"): void {
    this.activeFilter = pageName;
  };

}
