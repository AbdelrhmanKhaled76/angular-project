import { Component, input } from "@angular/core";
import { FormsModule } from "@angular/forms";

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
  imports : [FormsModule]
})
export class InputComponent {
  inputs : Input[] = [] as Input[];
  currentInput : Input = {} as Input; 
  onSubmit() : void {
    this.inputs.push(this.currentInput);
    console.log(this.inputs);
    this.currentInput = {} as Input;
  };


}
