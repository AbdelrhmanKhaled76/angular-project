import { Component } from "@angular/core";
import { Card } from "../Card/Card";

@Component({
  selector: "app-card-list",
  imports: [Card],
  templateUrl: "./CardList.html",
  styleUrls: ["./CardList.css"],
})
export class CardList {
}
