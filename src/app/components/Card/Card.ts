import { Component, Input, Output, EventEmitter, OnDestroy } from "@angular/core";
import { Task } from "../../interfaces/Task";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-card",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./Card.html",
  styleUrls: ["./Card.css"],
})
export class Card implements OnDestroy {
  @Input() task!: Task;
  @Output() deleteTask = new EventEmitter<string>();
  @Output() editTask = new EventEmitter<Task>();
  @Output() notifyDeath = new EventEmitter<void>();

  onDone(): void {
    this.task.isDone = true;
  }

  onDelete(): void {
    this.deleteTask.emit(this.task.id);
  }

  onEdit(): void {
    this.editTask.emit(this.task);
  }

  ngOnDestroy(): void {
    this.notifyDeath.emit();
  }
}
