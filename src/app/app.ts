import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/Header/Header';
import { CardList } from './components/CardList/CardList';
import { InputComponent } from './components/Input/Input';
import { FooterComponent } from './components/Footer/Footer';
import { Carousel } from "./components/carousel/carousel";
import { Task } from './interfaces/Task';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, CardList, InputComponent, FooterComponent, Carousel],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  tasks: Task[] = [];

  getTask(task: Task) {
    this.tasks.push(task);
  }
}
