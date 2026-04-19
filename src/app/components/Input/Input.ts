import { Component, EventEmitter, Output, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Task } from "../../interfaces/Task";
import { v4 as uuid } from "uuid";
import { Error } from "../../interfaces/error";
import { ToasterState } from "../../types/toasterState";



@Component({
  selector: "app-input",
  templateUrl: "./Input.html",
  styleUrls: ["./Input.css"],
  imports: [FormsModule]
})
export class InputComponent {
  private _taskToEdit: Task | null = null;
  
  @Input()
  set taskToEdit(value: Task | null) {
    this._taskToEdit = value;

    if (value) {
      this.currentInput = { ...value };
      return;
    }

    this.currentInput = {} as Task;
  }

  get taskToEdit(): Task | null {
    return this._taskToEdit;
  }

  @Output() addTask = new EventEmitter<Task>();
  @Output() updateTask = new EventEmitter<Task>();
  @Output() isState = new EventEmitter<ToasterState>();

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
        this.isState.emit("danger");
        return;
      }
    }

    if (this.currentInput.id) {
      this.updateTask.emit({ ...this.currentInput });
    } else {
      this.currentInput.id = uuid();
      this.addTask.emit({ ...this.currentInput, isDone: false });
    }
    
    this.currentInput = {} as Task;
    this.isState.emit("success");
  };
}
