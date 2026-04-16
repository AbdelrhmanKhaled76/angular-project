import { Component, EventEmitter, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Task } from "../../interfaces/Task";
import { v4 as uuid } from "uuid";
import { Error } from "../../interfaces/error";



@Component({
  selector: "app-input",
  templateUrl: "./Input.html",
  styleUrls: ["./Input.css"],
  imports: [FormsModule]
})
export class InputComponent {
  @Output() addTask = new EventEmitter<Task>();
  currentInput: Task = {} as Task;
  error: Error = {
    message: '',
    state: false
  };
  onSubmit(): void {
    this.error.state = false;
    const requiredFields: (keyof Task)[] = ['title', 'description', 'priority', 'date', 'category', 'tags'];

    for (const field of requiredFields) {
      if (!this.currentInput[field]) {
        this.error.state = true;
        this.error.message = `${field} field is required`;
        return;
      }
    }

    this.currentInput.id = uuid();
    this.addTask.emit({ ...this.currentInput, isDone: false });
  };
}
