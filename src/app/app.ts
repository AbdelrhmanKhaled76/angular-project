import { Component, signal } from '@angular/core';
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
  tasks: Task[] = [];

  state: ToasterState = "success";
  isAction: boolean = false;

  getTask(task: Task) {
    this.tasks.push(task);
  }

  handleInputState(state: ToasterState) {
    this.state = state;
    this.isAction = true;
    
    setTimeout(() => {
      this.isAction = false;
    }, 3000);
  }
}
