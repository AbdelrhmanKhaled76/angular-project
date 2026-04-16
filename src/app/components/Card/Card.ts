import { Component, Input } from "@angular/core";
import { Task } from "../../interfaces/Task";
import { Toaster } from "../toaster/toaster";

@Component({
  selector: "app-card",
  templateUrl: "./Card.html",
  styleUrls: ["./Card.css"],
  imports: [Toaster],
})
export class Card {
  @Input() task !: Task;
}
