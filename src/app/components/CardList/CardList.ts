import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnDestroy } from "@angular/core";
import { Card } from "../Card/Card";
import { Task } from "../../interfaces/Task";

@Component({
  selector: "app-card-list",
  imports: [Card],
  templateUrl: "./CardList.html",
  styleUrls: ["./CardList.css"],
})
export class CardList implements OnChanges, OnDestroy {
  tasks: Task[] = [];
  
  @Input() filter: "all" | "inProgress" | "done" = "all";
  @Input() task: Task = {} as Task;

  @Output() deleteTask = new EventEmitter<string>();
  @Output() editTask = new EventEmitter<Task>();
  @Output() notifyDeath = new EventEmitter<void>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['task'] && changes['task'].currentValue) {
      const t = changes['task'].currentValue;
      if (!t || Object.keys(t).length === 0) return;

      const index = this.tasks.findIndex(x => x.id === t.id);
      if (index !== -1) {
        this.tasks[index] = { ...t };
      } else {
        this.tasks.push({ ...t });
      }
    }
  }

  get listTitle(): string {
    switch (this.filter) {
      case 'done': return 'Done Tasks';
      case 'inProgress': return 'In Progress Tasks';
      default: return 'All Tasks';
    }
  }

  get filteredTasks(): Task[] {
    switch (this.filter) {
      case "done":
        return this.tasks.filter(task => task.isDone);
      case "inProgress":
        return this.tasks.filter(task => !task.isDone);
      default:
        return this.tasks;
    }
  }

  onDeleteTask(id: string) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.deleteTask.emit(id);
  }

  ngOnDestroy(): void {
    this.notifyDeath.emit();
  }
}
