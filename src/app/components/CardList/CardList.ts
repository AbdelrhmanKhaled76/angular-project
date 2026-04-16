import { Component, Input, input } from "@angular/core";
import { Card } from "../Card/Card";
import { Task } from "../../interfaces/Task";
import { Toaster } from "../toaster/toaster";

@Component({
  selector: "app-card-list",
  imports: [Card, Toaster],
  templateUrl: "./CardList.html",
  styleUrls: ["./CardList.css"],
})
export class CardList {
  @Input() tasks: Task[] = [];
}
