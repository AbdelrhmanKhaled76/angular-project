import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./Header.html",
  styleUrls: ["./Header.css"],
})
export class HeaderComponent implements OnInit {
  counter: number = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.counter++;
    }, 1000)
  }
}
