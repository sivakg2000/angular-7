import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GreetingPipe } from "./greeting.pipe";

@NgModule({
  declarations: [GreetingPipe],
  imports: [CommonModule],
  exports: [GreetingPipe],
})
export class PipesModule {}
