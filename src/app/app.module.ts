import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { VideoSearchComponent } from './video-search/video-search.component';
import { VideoResultComponent } from './video-result/video-result.component';

@NgModule({
  declarations: [AppComponent, VideoSearchComponent, VideoResultComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
