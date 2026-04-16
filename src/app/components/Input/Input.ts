import { Component } from "@angular/core";

enum Priority {
  Low,Medium,High
};

enum Category {
  Work,Personal,Study
};

interface Input {
  title : string;
  description : string;
  priority : Priority;
  date : Date;
  category : Category;
  tags : string;
}

@Component({
  selector: "app-input",
  templateUrl: "./Input.html",
  styleUrls: ["./Input.css"],
})
export class InputComponent {
  const inputs : Input[] = [];
}
