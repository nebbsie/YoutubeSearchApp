import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "video-result",
  templateUrl: "./video-result.component.html",
  styleUrls: ["./video-result.component.css"]
})
export class VideoResultComponent implements OnInit {
  @Input() video: string;

  constructor() {}

  ngOnInit() {}
}
