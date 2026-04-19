import { Component } from '@angular/core';
import { HeaderComponent } from './components/Header/Header';
import { InputComponent } from './components/Input/Input';
import { FooterComponent } from './components/Footer/Footer';
import { Carousel } from "./components/carousel/carousel";
import { Task } from './interfaces/Task';
import { CardsContainer } from "./components/cards-container/cards-container";
import { Toaster } from "./components/toaster/toaster";
import { ToasterState } from './types/toasterState';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, InputComponent, FooterComponent, Carousel, CardsContainer, Toaster],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  task: Task = {} as Task;

  state: ToasterState = "success";
  isAction: boolean = false;
  taskToEdit: Task | null = null;
  private toasterTimeout: any;

  handleAddTask(task: Task) {
    this.task = { ...task };
  }

  handleDeleteTask(id: string) {
    if (this.taskToEdit?.id === id) {
      this.taskToEdit = null;
    }
  }

  handleEditTask(task: Task) {
    this.taskToEdit = task;
  }

  handleUpdateTask(updatedTask: Task) {
    this.task = { ...updatedTask };
    this.taskToEdit = null;
  }

  handleComponentDeath() {
    this.handleInputState('dead');
  }

  handleInputState(state: ToasterState) {
    this.state = state;
    this.isAction = true;

    if (this.toasterTimeout) {
      clearTimeout(this.toasterTimeout);
    }

    this.toasterTimeout = setTimeout(() => {
      this.isAction = false;
    }, 3000);
  }
}
