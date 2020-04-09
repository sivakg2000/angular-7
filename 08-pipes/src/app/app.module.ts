import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GreetingPipe } from "./greeting.pipe";

@NgModule({
  declarations: [AppComponent, GreetingPipe],
  imports: [BrowserModule, AppRoutingModule],
  exports: [GreetingPipe],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
