import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MenuComponent } from "./menu/menu.component";
import { CpCounterComponent } from "./cp-counter/cp-counter.component";
import { TestComponent } from "./test/test.component";
import { CounterComponent } from "./counter/counter.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CpCounterComponent,
    TestComponent,
    CounterComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
