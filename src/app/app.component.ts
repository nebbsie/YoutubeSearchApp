import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["./app.component.css"],
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  videos: string[];

  ngOnInit(): void {
    this.videos = ["taylor swift", "cats", "fun"];
  }
}
