import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["./app.component.css"],
  template: `
    <h1> {{ title }} </h1>
  `
})
export class AppComponent {
  title = "Youtube App";
}
