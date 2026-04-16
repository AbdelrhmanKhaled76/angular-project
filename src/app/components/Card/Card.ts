import { Component, Input } from "@angular/core";
import { Task } from "../../interfaces/Task";
import { Priority } from "../../enums/Priority";
import { Category } from "../../enums/Category";
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
