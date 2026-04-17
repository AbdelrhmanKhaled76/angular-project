import { Component, Input, input } from "@angular/core";
import { Card } from "../Card/Card";
import { Task } from "../../interfaces/Task";

@Component({
  selector: "app-card-list",
  imports: [Card],
  templateUrl: "./CardList.html",
  styleUrls: ["./CardList.css"],
})
export class CardList {
  @Input() tasks: Task[] = [];
  @Input() title: string = 'Your Tasks';
}
